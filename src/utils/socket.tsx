import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const URL = process.env.NEXT_PUBLIC_SOCKET_URL as string

export const useSocket = (token: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    if (!socket) {
      const newSocket = io(URL, {
        auth: {
          token,
        },
      })

      newSocket.on('connect', () => {
        console.log('Socket successfully connected', newSocket.id)
      })

      newSocket.on('disconnect', (reason) => {
        console.log('Socket disconnected:', reason)
      })

      newSocket.on('connect_error', (error) => {
        console.error('Socket connection error:', error)
      })

      setSocket(newSocket)
    }

    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [socket, token])

  return socket
}
