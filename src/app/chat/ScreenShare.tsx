'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSocket } from '../../utils/socket'
import { get } from 'http'
interface ChatProps {
  token: string
  chatId: string
  applicationId: string
  currentUserId: string
  roomId: string
}

interface Messages {
  id: string
  content: string
  created_at: string
  chatId: string
  sender: any
  receiver: any
}

const url = process.env.NEXT_PUBLIC_API_URL as string

const ScreenShare: React.FC<ChatProps> = ({
  token,
  chatId,
  applicationId,
  currentUserId,
  roomId,
}) => {
  const socket = useSocket(token)
  const [userId, setUserId] = useState<string>('')
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!socket) return

    socket.emit('joinChat', { applicationId, chatId })

    setUserId(currentUserId)

    socket.on('receiveScreenData', (screenData: string) => {
      setIsScreenSharing(true)
      if (screenRef.current) {
        screenRef.current.innerHTML = `<img src="${screenData}" alt="Screen Share" />`
      }
    })

    // Listen for screen share stop
    socket.on('screenShareStopped', () => {
      setIsScreenSharing(false)
      if (screenRef.current) {
        screenRef.current.innerHTML = ''
      }
    })

    return () => {
      socket.off('receiveScreenData')
      socket.off('screenShareStopped')
      socket.disconnect()
    }
  }, [socket])

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      })
      const videoTrack = screenStream.getVideoTracks()[0]

      setIsScreenSharing(true)
      socket?.emit('startScreenShare', { chatId })

      const captureFrame = () => {
        const imageCapture = new (window as any).ImageCapture(videoTrack)
        imageCapture.grabFrame().then((bitmap: any) => {
          const canvas = document.createElement('canvas')
          canvas.width = bitmap.width
          canvas.height = bitmap.height
          const context = canvas.getContext('2d')
          context?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
          const screenData = canvas.toDataURL() // Convert to a base64 string
          if (screenRef.current) {
            screenRef.current.innerHTML = `<img src="${screenData}" alt="Screen Share" />`
          }
          socket?.emit('shareScreenData', { chatId, screenData })
        })
      }

      const intervalId = setInterval(captureFrame, 100)

      // Stop screen sharing when the user stops the track
      videoTrack.onended = () => {
        clearInterval(intervalId)
        socket?.emit('stopScreenShare', { chatId })
        setIsScreenSharing(false)
        if (screenRef.current) {
          screenRef.current.innerHTML = '' // Clear the screen
        }
      }
    } catch (err) {
      console.error('Error starting screen share:', err)
    }
  }

  const stopScreenShare = () => {
    socket?.emit('stopScreenShare', { chatId })
    setIsScreenSharing(false)
    if (screenRef.current) {
      screenRef.current.innerHTML = '' // Clear the screen
    }
  }

  return (
    <div className="px-4 bg-white rounded-lg shadow-lg h-screen overflow-hidden">
      {!isScreenSharing ? (
        <button onClick={startScreenShare} className="btn btn-secondary">
          Start Screen Share
        </button>
      ) : (
        ''
      )}
      {/* Screen Sharing Section */}
      <div className="flex justify-center items-center mt-4">
        {/* Screen Share Preview */}
        {isScreenSharing ? (
          <div className="mt-4 px-2 border rounded-lg h-full ">
            <div ref={screenRef} className="h-full  bg-gray-200">
              {/* The shared screen will be rendered here */}
              <video ref={videoRef} />
            </div>
          </div>
        ) : (
          'Screen Share Preview'
        )}
      </div>
    </div>
  )
}

export default ScreenShare
