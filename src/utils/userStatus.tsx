'use client'
import { useSocket } from '@/utils/socket'
import React, { useEffect } from 'react'

const UserStatus = ({ token, status }: { token: string; status: boolean }) => {
  const socket = useSocket(token)

  useEffect(() => {
    if (socket) {
      // Emit "online" status when connected
      socket.emit('status', { online: status })

      // Set up interval to repeatedly emit "online" status every 30 seconds
      const intervalId = setInterval(() => {
        socket.emit('status', { online: status })
      }, 30000) // 30 seconds

      // Listen for status updates from the server
      // socket.on('status', (statusUpdate) => {
      //   if (typeof statusUpdate === 'string') {
      //     toast.success(statusUpdate)
      //   }
      // })

      // On component unmount, emit "offline" status and clean up listeners
      return () => {
        socket.emit('status', { online: false }) // Notify server user is offline
        clearInterval(intervalId)
        socket.off('status')
      }
    }
  }, [socket])

  return null
}

export default UserStatus
