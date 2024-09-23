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
  const [myPeer, setMyPeer] = useState<Peer | null>(null)

  const myVideo = useRef<HTMLVideoElement>(null)
  const userVideo = useRef<HTMLVideoElement>(null)

  const url = process.env.NEXT_PUBLIC_SOCKET_URL

  useEffect(() => {
    if (userId) {
      const socketConnection = io(url ? url : '', {
        auth: { userId, token },
        transports: ['websocket'],
      })

      setSocket(socketConnection)
      socketConnection.emit('joinRoom', room)

      socketConnection.on('receiveMessage', (message: Message) => {
        setMessages((prev) => [...prev, message])
      })

      socketConnection.on('signal', (userId: string) => {
        console.log('User joined:', userId)
      })

      return () => {
        socketConnection.emit('leaveRoom', room)
        socketConnection.disconnect()
      }
    }
  }, [room, userId])

  // Initialize PeerJS connection
  useEffect(() => {
    if (!myPeer) {
      const peer = new Peer(userId, {
        host: 'localhost',
        port: 9000,
        path: '/peerjs',
      })

      peer.on('open', () => {
        setMyPeer(peer)
      })

      peer.on('call', (call: MediaConnection) => {
        call.answer() // Answer without creating a new stream
        call.on('stream', (remoteStream: MediaStream) => {
          if (userVideo.current) {
            userVideo.current.srcObject = remoteStream
          }
        })
      })
    }

    return () => {
      if (myPeer) myPeer.destroy()
    }
  }, [myPeer, userId])

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('sendMessage', { userId, room, message })
    }
  }

  const startScreenSharing = () => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((stream) => {
        if (myVideo.current) {
          myVideo.current.srcObject = stream
        }

        // Call other peers in the room
        const call = myPeer?.call(room, stream)

        call?.on('stream', (remoteStream: MediaStream) => {
          if (userVideo.current) {
            userVideo.current.srcObject = remoteStream
          }
        })
      })
      .catch((error) => {
        console.error('Error sharing screen:', error)
      })
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
