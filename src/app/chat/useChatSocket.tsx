'use client'
import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import Peer, { MediaConnection } from 'peerjs'

interface UseChatSocketProps {
  room: string
  userId: string
  token: string
}

interface Message {
  userId: string
  message: string
}

const useChatSocket = ({ room, userId, token }: UseChatSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null)

  const myVideo = useRef<HTMLVideoElement>(null)
  const userVideo = useRef<HTMLVideoElement>(null)

  const url = process.env.NEXT_PUBLIC_SOCKET_URL as string

  useEffect(() => {
    if (userId) {
      const socketConnection = io(url, {
        auth: { userId, token },
        transports: ['websocket'],
      })

      setSocket(socketConnection)
      socketConnection.emit('joinRoom', room)

      socketConnection.on('receiveMessage', (message: Message) => {
        setMessages((prev) => [...prev, message])
      })

      // Handle incoming WebRTC signals (ICE candidates, offers, answers)
      socketConnection.on('signal', async (data: any) => {
        if (peerConnection) {
          if (data.type === 'offer') {
            await peerConnection.setRemoteDescription(
              new RTCSessionDescription(data)
            )
            const answer = await peerConnection.createAnswer()
            await peerConnection.setLocalDescription(answer)
            socketConnection.emit('signal', {
              room,
              ...peerConnection.localDescription,
            })
          } else if (data.type === 'answer') {
            await peerConnection.setRemoteDescription(
              new RTCSessionDescription(data)
            )
          } else if (data.candidate) {
            await peerConnection.addIceCandidate(
              new RTCIceCandidate(data.candidate)
            )
          }
        }
      })

      return () => {
        socketConnection.emit('leaveRoom', room)
        socketConnection.disconnect()
      }
    }
  }, [room, userId])

  // Initialize RTCPeerConnection
  useEffect(() => {
    if (!peerConnection) {
      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' }, // Google's public STUN server
        ],
      })

      // Send ICE candidates to signaling server
      pc.onicecandidate = (event) => {
        if (event.candidate && socket) {
          socket.emit('signal', { room, candidate: event.candidate })
        }
      }

      // Handle receiving tracks from the remote peer
      pc.ontrack = (event) => {
        if (userVideo.current) {
          userVideo.current.srcObject = event.streams[0]
        }
      }

      setPeerConnection(pc)
    }

    return () => {
      if (peerConnection) peerConnection.close()
    }
  }, [peerConnection])

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('sendMessage', { userId, room, message })
    }
  }

  // Start screen sharing using WebRTC
  const startScreenSharing = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      })

      // Display your screen in the local video element
      if (myVideo.current) {
        myVideo.current.srcObject = stream
      }

      // Add your screen to the RTCPeerConnection
      stream.getTracks().forEach((track) => {
        if (peerConnection) peerConnection.addTrack(track, stream)
      })

      // Create an offer and send it to the other peer
      if (peerConnection) {
        const offer = await peerConnection.createOffer()
        await peerConnection.setLocalDescription(offer)
        socket?.emit('signal', { room, ...peerConnection.localDescription })
      }
    } catch (error) {
      console.error('Error sharing screen:', error)
    }
  }

  return {
    messages,
    sendMessage,
    startScreenSharing,
    myVideo,
    userVideo,
  }
}

export default useChatSocket
