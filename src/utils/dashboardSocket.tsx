'use client'
import React, { use, useEffect } from 'react'
import { useSocket } from './socket'

const DashboardSocket = ({
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
    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected in dashboard:', reason)
    })
    socket.on('connect_error', (error) => {
      console.error('Socket connection error in dashboard:', error)
    })

    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [socket, token])

  return null
}

export default DashboardSocket
