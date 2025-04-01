'use client'
import React, { useState, useEffect, useRef } from 'react'
import Peer, { MediaConnection } from 'peerjs'
import { useSocket } from '../../utils/socket'

interface ChatProps {
  token: string
  chatId: string
  applicationId: string
  currentUserId: string
  roomId: string
}

const ScreenShare: React.FC<ChatProps> = ({
  token,
  chatId,
  applicationId,
  currentUserId,
  roomId,
}) => {
  // Initialize PeerJS
  const peerInstance = new Peer({
    host: 'localhost',
    port: 3001,
    path: '/',
  })
  const socket = useSocket(token)
  const localVideoRef = useRef<HTMLVideoElement | null>(null)
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null)
  const [peer, setPeer] = useState<Peer | null>(null)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isRemoteScreenSharing, setIsRemoteScreenSharing] = useState(false)
  const [viewingUserId, setViewingUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [peerId, setPeerId] = useState('')

  useEffect(() => {
    if (!socket) return

    socket?.emit('joinChat', { applicationId, chatId })

    peerInstance.on('open', (id) => {
      console.log('Peer ID:', id)
      socket?.emit('registerPeerId', {
        payload: { userId: currentUserId, peerId: id },
      })
      setPeerId(id)
    })

    peerInstance.on('call', (call) => {
      // Answer incoming calls with an empty stream
      call.answer()
      setIsRemoteScreenSharing(true)

      call.on('stream', (remoteStream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream
          // remoteVideoRef.current.play().catch((err) => {
          //   console.error('Error playing remote video:', err)
          // })
        }
      })

      call.on('error', (err) => {
        console.error('Call error:', err)
      })
    })

    peerInstance.on('error', (err) => {
      console.error('Peer error:', err)
    })

    // socket?.on('receivePeerId', (data) => {
    //   setViewingUserId(data.peerId)
    //   console.log('Received peer ID:', data.peerId)
    //   setPeerId(data.peerId)
    // })

    setPeer(peerInstance)

    return () => {
      peerInstance.destroy()
      socket.off('registerPeerId')
      socket.off('receivePeerId')
      socket.disconnect()
    }
  }, [socket])

  const startScreenSharing = async () => {
    setIsScreenSharing(true)
    setLoading(true)
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      })

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
        localVideoRef.current.play()
      }

      // Replace with the actual remote peer ID
      socket?.emit('requestPeerId', { chatId })

      socket?.on('receivePeerId', (data) => {
        setIsRemoteScreenSharing(true)
        setViewingUserId(data.peerId)
        setPeerId(data.peerId)

        const remotePeerId = data.peerId
        if (peer && remotePeerId) {
          const call = peer.call(remotePeerId, stream)

          call.emit('stream', stream)

          call.on('error', (err) => {
            console.error('Call error:', err)
          })
        }
      })
      console.log('Viwing user id', peerId)
    } catch (err) {
      setError('Failed to start screen sharing.')
      console.error('Error accessing display media:', err)
    } finally {
      setLoading(false)
    }
  }

  const stopScreenSharing = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      ;(localVideoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop())
      localVideoRef.current.srcObject = null
    }
    if (remoteVideoRef.current && remoteVideoRef.current.srcObject) {
      ;(remoteVideoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop())
      remoteVideoRef.current.srcObject = null
    }
    setIsScreenSharing(false)
    setIsRemoteScreenSharing(false)
    setViewingUserId(null)
    setPeerId('')
  }

  return (
    <div className="flex flex-col space-y-4 w-full bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Screen Sharing</h3>
        {!isScreenSharing && !loading && (
          <button
            onClick={startScreenSharing}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Share Screen
          </button>
        )}
        {isScreenSharing && (
          <button
            onClick={stopScreenSharing}
            className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Stop Sharing
          </button>
        )}
        {loading && <div className="px-4 py-2 text-gray-500">Loading...</div>}
      </div>

      {error && (
        <div className="p-3 bg-red-100 text-red-800 rounded-md text-sm">
          {error}
        </div>
      )}

      {isScreenSharing && (
        <div
          className="relative w-full bg-black rounded-md overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            controls
            muted
            className="absolute w-full h-full object-contain"
          />
        </div>
      )}

      {isRemoteScreenSharing && (
        <div
          className="relative w-full bg-black rounded-md overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            muted
            controls
            className="absolute w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

export default ScreenShare
