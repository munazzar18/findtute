import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { FaCircle } from 'react-icons/fa6'
import toast from 'react-hot-toast'

const URL = process.env.NEXT_PUBLIC_SOCKET_URL as string

export const useSocket = (token: string, userId?: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    if (!token) return // Don't create socket without token

    const newSocket = io(URL, {
      auth: {
        token,
      },
    })

    newSocket.on('connect', () => {
      console.log('Socket successfully connected', newSocket.id)
    })

    newSocket.on('notification', (data) => {
      if (data.userId === userId) return

      newSocket.emit('status', { online: true })

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <FaCircle className="text-green-400" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{data.from}</p>
                <p className="text-sm text-gray-500">{data.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))
    })

    newSocket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason)
    })

    newSocket.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
    })

    setSocket(newSocket)

    return () => {
      newSocket.off('notification')
      newSocket.off('status')
      newSocket.off('connect')
      newSocket.off('disconnect')
      newSocket.off('connect_error')
      newSocket.disconnect()
    }
  }, [token, userId]) // Add dependencies here

  return socket
}
