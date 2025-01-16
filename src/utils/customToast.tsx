'use client'
import React, { useEffect } from 'react'
import { useSocket } from './socket'
import { FaCircle } from 'react-icons/fa6'
import toast from 'react-hot-toast'

interface Notification {
  chatId: string
  content: string
  from: string
  userId: string
}

const CustomToast = ({
  token,
  currentUserId,
}: {
  token: string
  currentUserId: string
}) => {
  const socket = useSocket(token, currentUserId)

  useEffect(() => {
    if (!socket) return

    socket.on('connect', () => {
      console.log('Socket successfully connected in dashboard', socket.id)
      socket.emit('socketId', currentUserId)
    })

    const handleNotification = (notification: Notification) => {
      console.log('Received notification in layout:', notification)
      //   if (notification.userId === currentUserId) return

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
                <p className="text-sm font-medium text-gray-900">
                  New message received
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {notification.from}
                </p>
                <p className="text-sm text-gray-500">{notification.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))
    }

    socket.on('notification', handleNotification)

    return () => {
      socket.off('notification', handleNotification)
      socket.off('messageStatus')
    }
  }, [socket, currentUserId])

  return null
}

export default CustomToast
