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
  const socket = useSocket(token, currentUserId)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const peerConnection = useRef<RTCPeerConnection | null>(null)
  const localStream = useRef<MediaStream | null>(null)

  useEffect(() => {
    if (!socket) return

    // Join the chat room
    socket.emit('joinChat', { applicationId, chatId })

    // Handle incoming screen share offer
    socket.on('screenShareOffer', async ({ sdp, userId }) => {
      console.log('Received screen share offer')
      try {
        // Create new peer connection for receiver
        const pc = new RTCPeerConnection({
          iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
        })
        peerConnection.current = pc

        // Handle incoming tracks
        pc.ontrack = (event) => {
          console.log('Received track', event.track.kind)
          setRemoteStream(event.streams[0])
        }

        // Send ICE candidates
        pc.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('iceCandidate', {
              chatId,
              candidate: event.candidate,
              to: userId,
            })
          }
        }

        // Set remote description and create answer
        await pc.setRemoteDescription(new RTCSessionDescription(sdp))
        const answer = await pc.createAnswer()
        await pc.setLocalDescription(answer)

        // Send answer back
        socket.emit('screenShareAnswer', {
          chatId,
          sdp: answer,
          to: userId,
        })
      } catch (error) {
        console.error('Error handling offer:', error)
      }
    })

    // Handle incoming screen share answer
    socket.on('screenShareAnswer', async ({ sdp }) => {
      console.log('Received screen share answer')
      try {
        if (peerConnection.current) {
          await peerConnection.current.setRemoteDescription(
            new RTCSessionDescription(sdp)
          )
        }
      } catch (error) {
        console.error('Error handling answer:', error)
      }
    })

    // Handle incoming ICE candidates
    socket.on('iceCandidate', async ({ candidate }) => {
      try {
        if (peerConnection.current) {
          await peerConnection.current.addIceCandidate(
            new RTCIceCandidate(candidate)
          )
        }
      } catch (error) {
        console.error('Error adding ICE candidate:', error)
      }
    })

    return () => {
      // Clean up
      if (peerConnection.current) {
        peerConnection.current.close()
      }
      if (localStream.current) {
        localStream.current.getTracks().forEach((track) => track.stop())
      }
      socket.off('screenShareOffer')
      socket.off('screenShareAnswer')
      socket.off('iceCandidate')
    }
  }, [socket, chatId, applicationId])

  const startScreenShare = async () => {
    try {
      // Get screen sharing stream
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      })

      // Save stream reference
      localStream.current = stream

      // Display local stream
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }

      // Create peer connection for sender
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      })
      peerConnection.current = pc

      // Add tracks to peer connection
      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream)
      })

      // Send ICE candidates
      pc.onicecandidate = (event) => {
        if (event.candidate) {
          socket?.emit('iceCandidate', {
            chatId,
            candidate: event.candidate,
          })
        }
      }

      // Create and send offer
      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)
      socket?.emit('shareScreenData', {
        chatId,
        sdp: offer,
      })

      setIsScreenSharing(true)

      // Handle stream end
      stream.getVideoTracks()[0].onended = () => {
        stopScreenShare()
      }
    } catch (error) {
      console.error('Error starting screen share:', error)
      stopScreenShare()
    }
  }

  const stopScreenShare = () => {
    // Stop all tracks
    if (localStream.current) {
      localStream.current.getTracks().forEach((track) => track.stop())
      localStream.current = null
    }

    // Close peer connection
    if (peerConnection.current) {
      peerConnection.current.close()
      peerConnection.current = null
    }

    // Clear video elements
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null
    }

    setIsScreenSharing(false)
    setRemoteStream(null)
  }

  // Update remote video when stream changes
  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        {!isScreenSharing ? (
          <button
            onClick={startScreenShare}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start Screen Share
          </button>
        ) : (
          <button
            onClick={stopScreenShare}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Stop Screen Share
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isScreenSharing && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Your Screen</h3>
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full border rounded"
            />
          </div>
        )}

        {remoteStream && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Remote Screen</h3>
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full border rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ScreenShare
