'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSocket } from '../../utils/socket'
import SimplePeer from 'simple-peer'

interface ChatProps {
  token: string
  chatId: string
  applicationId: string
  currentUserId: string
  roomId: string
}

interface PeerData {
  userId: string
  peer: SimplePeer.Instance
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
  const [viewingUserId, setViewingUserId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const localStreamRef = useRef<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const peersRef = useRef<PeerData[]>([])

  // Handle socket events for screen sharing
  useEffect(() => {
    if (!socket) return

    socket.emit('joinChat', { applicationId, chatId })

    const handleScreenShareStarted = ({
      userId,
      roomId,
    }: {
      userId: string
      roomId: string
    }) => {
      console.log('I AM HANDLE SCREEN SHARE STARTED CALLED')
      console.log(`User ${userId} started screen sharing in room ${roomId}`)

      if (userId !== currentUserId) {
        setViewingUserId(userId)

        // Create a peer to receive the stream
        const peer = new SimplePeer({
          initiator: true,
          trickle: true,
        })

        peer.on('signal', (signal) => {
          socket?.emit('signal', {
            signal,
            to: userId,
            roomId,
          })
        })

        peer.on('stream', (stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })

        // Store the peer
        peersRef.current.push({ userId, peer })
      }
    }

    const handleScreenShareEnded = ({
      userId,
      roomId,
    }: {
      userId: string
      roomId: string
    }) => {
      console.log(`User ${userId} stopped screen sharing in room ${roomId}`)

      if (roomId) {
        if (userId === currentUserId) {
          stopScreenSharing()
        } else if (userId === viewingUserId) {
          setViewingUserId(null)

          // Clean up video
          if (videoRef.current) {
            videoRef.current.srcObject = null
          }

          // Clean up peers
          const peerIndex = peersRef.current.findIndex(
            (p) => p.userId === userId
          )
          if (peerIndex !== -1) {
            peersRef.current[peerIndex].peer.destroy()
            peersRef.current.splice(peerIndex, 1)
          }
        }
      }
    }

    const handleActiveScreen = ({
      userId,
      roomId,
    }: {
      userId: string
      roomId: string
    }) => {
      console.log(
        `Active screen share detected from user ${userId} in room ${roomId}`
      )

      if (userId !== currentUserId) {
        setViewingUserId(userId)
      }
    }

    const handleSignal = ({
      signal,
      from,
    }: {
      signal: string
      from: string
    }) => {
      console.log(`Received signal from ${from}`)

      // If we're sharing, handle incoming signals
      if (isScreenSharing) {
        // Find or create peer for this user
        let peer = peersRef.current.find((p) => p.userId === from)?.peer

        if (!peer) {
          peer = new SimplePeer({
            initiator: false,
            trickle: true,
            stream: localStreamRef.current || undefined,
          })

          peer.on('signal', (signal) => {
            socket?.emit('signal', {
              signal,
              to: from,
              roomId,
            })
          })

          peersRef.current.push({ userId: from, peer })
        }

        // Signal the peer
        peer.signal(signal)
      }
      // If we're viewing someone's screen
      else if (viewingUserId === from) {
        const peer = peersRef.current.find((p) => p.userId === from)?.peer
        if (peer) {
          peer.signal(signal)
        }
      }
    }

    // Register event listeners
    socket.on('screenShare:started', handleScreenShareStarted)
    socket.on('signal', handleSignal)
    socket.on('screenShare:active', handleActiveScreen)
    socket.on('screenShare:ended', handleScreenShareEnded)

    return () => {
      // Clean up event listeners
      socket.off('screenShare:started', handleScreenShareStarted)
      socket.off('signal', handleSignal)
      socket.off('screenShare:active', handleActiveScreen)
      socket.off('screenShare:ended', handleScreenShareEnded)

      // Stop sharing if we were
      if (isScreenSharing) {
        stopScreenSharing()
      }
    }
  }, [socket, roomId, currentUserId, isScreenSharing, viewingUserId])

  const startScreenSharing = async () => {
    if (!socket || !socket.connected) {
      console.warn('Socket is not connected yet.')
      return
    }
    try {
      setIsScreenSharing(true)
      setLoading(true)
      setError(null)

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      })

      localStreamRef.current = stream

      // Display our own stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      // Tell the server we're starting to share
      socket?.emit('screenShare:start', { roomId })

      // Handle stream ended event
      stream.getVideoTracks()[0].onended = () => {
        stopScreenSharing()
      }

      setLoading(false)
    } catch (error) {
      console.error('Error starting screen share:', error)
      setError(
        'Failed to start screen sharing. Please make sure you have granted screen sharing permissions.'
      )
      setLoading(false)
    }
  }

  const stopScreenSharing = () => {
    setLoading(true)
    setIsScreenSharing(false)
    // Stop all tracks
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop())
      localStreamRef.current = null
    }

    // Tell the server we're stopping
    if (socket && isScreenSharing) {
      socket?.emit('screenShare:stop', { roomId })
    }

    // Clean up peers
    peersRef.current.forEach(({ peer }) => {
      peer.destroy()
    })
    peersRef.current = []

    // Clean up video
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col space-y-4 w-full bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Screen Sharing</h3>

        {!isScreenSharing && !viewingUserId && !loading && (
          <button
            onClick={startScreenSharing}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Share Screen
          </button>
        )}

        {isScreenSharing && !loading && (
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

      <div
        className="relative w-full bg-black rounded-md overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        {isScreenSharing || viewingUserId ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
            {loading ? 'Connecting...' : 'No active screen share'}
          </div>
        )}
      </div>

      {isScreenSharing && (
        <div className="text-sm text-center text-green-600 font-medium">
          You are sharing your screen
        </div>
      )}

      {viewingUserId && (
        <div className="text-sm text-center text-blue-600 font-medium">
          Viewing screen from user {viewingUserId}
        </div>
      )}
    </div>
  )
}

export default ScreenShare
