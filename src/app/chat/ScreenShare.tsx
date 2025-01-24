'use client'
import React, { useState, useEffect, useRef } from 'react'
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
  const socket = useSocket(token)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null)

  useEffect(() => {
    if (!socket) return

    socket.emit('joinChat', { applicationId, chatId })

    socket.on('screenShareOffer', async ({ sdp }) => {
      if (!peerConnectionRef.current) {
        peerConnectionRef.current = new RTCPeerConnection()

        // Set up ontrack handler here
        peerConnectionRef.current.ontrack = (event) => {
          console.log('Incoming stream', event.streams[0])
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0]
          }
        }
      }

      await peerConnectionRef.current.setRemoteDescription(
        new RTCSessionDescription(sdp)
      )
      const answer = await peerConnectionRef.current.createAnswer()
      await peerConnectionRef.current.setLocalDescription(answer)
      socket.emit('screenShareAnswer', { chatId, sdp: answer })
    })

    socket.on('iceCandidate', async ({ candidate }) => {
      if (peerConnectionRef.current) {
        await peerConnectionRef.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        )
      }
    })

    return () => {
      socket.off('screenShareOffer')
      socket.off('iceCandidate')
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close()
        peerConnectionRef.current = null
      }
    }
  }, [socket])

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      })

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = screenStream
        console.log('Stream', screenStream)
      }

      peerConnectionRef.current = new RTCPeerConnection()

      screenStream.getTracks().forEach((track) => {
        peerConnectionRef.current?.addTrack(track, screenStream)
      })

      peerConnectionRef.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket?.emit('iceCandidate', { chatId, candidate: event.candidate })
        }
      }

      const offer = await peerConnectionRef.current.createOffer()
      await peerConnectionRef.current.setLocalDescription(offer)
      socket?.emit('shareScreenData', { chatId, sdp: offer })

      setIsScreenSharing(true)

      screenStream.getVideoTracks()[0].onended = () => {
        stopScreenShare()
      }
    } catch (err) {
      console.error('Error starting screen share:', err)
    }
  }

  const stopScreenShare = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close()
      peerConnectionRef.current = null
    }

    setIsScreenSharing(false)
    if (localVideoRef.current && remoteVideoRef.current) {
      localVideoRef.current.srcObject = null // Clear local video
      remoteVideoRef.current.srcObject = null // Clear remote video
    }
  }

  return (
    <div className="px-4 bg-white rounded-lg shadow-lg h-screen overflow-hidden">
      {!isScreenSharing ? (
        <button onClick={startScreenShare} className="btn btn-secondary">
          Start Screen Share
        </button>
      ) : (
        <button onClick={stopScreenShare} className="btn btn-danger">
          Stop Screen Share
        </button>
      )}

      <video
        ref={localVideoRef}
        autoPlay
        muted
        playsInline
        style={{ width: '100%', height: 'auto' }}
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        muted
        playsInline
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default ScreenShare
