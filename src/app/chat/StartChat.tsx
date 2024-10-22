'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSocket } from '../../utils/socket'
import { get } from 'http'
interface ChatProps {
  token: string
  chatId: string
  applicationId: string
  currentUserId: string
  roomId: string
}

interface Messages {
  id: string
  content: string
  created_at: string
  chatId: string
  sender: any
  receiver: any
}

const url = process.env.NEXT_PUBLIC_API_URL as string

const Chat: React.FC<ChatProps> = ({
  token,
  chatId,
  applicationId,
  currentUserId,
  roomId,
}) => {
  const socket = useSocket(token)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Messages[]>([])
  const [isSent, setIsSent] = useState(false)
  const [userId, setUserId] = useState<string>('')
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  const getChat = async () => {
    const response = await fetch(`${url}chat/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setMessages(data?.data?.messages)
    scrollToBottom()
    setIsSent(false)
    return data
  }

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      event.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    if (!socket) return

    getChat()

    socket.emit('joinChat', { applicationId, chatId })

    setUserId(currentUserId)

    socket.on('newMessage', (message: any) => {
      scrollToBottom()
      setMessages((prevMessages) => [...prevMessages, message])
    })

    socket.on('receiveScreenData', (screenData: string) => {
      setIsScreenSharing(true)
      if (screenRef.current) {
        screenRef.current.innerHTML = `<img src="${screenData}" alt="Screen Share" />`
      }
    })

    // Listen for screen share stop
    socket.on('screenShareStopped', () => {
      setIsScreenSharing(false)
      if (screenRef.current) {
        screenRef.current.innerHTML = ''
      }
    })

    return () => {
      socket.off('newMessage')
      socket.off('receiveScreenData')
      socket.off('screenShareStopped')
      socket.disconnect()
    }
  }, [socket])

  const sendMessage = () => {
    if (message.trim() === '') return
    socket?.emit('sendMessage', { chatId, content: message })
    setIsSent(true)
    getChat()
    scrollToBottom()
    setMessage('')
  }

  useEffect(() => {
    getChat()
    scrollToBottom()
  }, [isSent])

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      })
      const videoTrack = screenStream.getVideoTracks()[0]

      setIsScreenSharing(true)
      socket?.emit('startScreenShare', { chatId })

      const captureFrame = () => {
        const imageCapture = new (window as any).ImageCapture(videoTrack)
        imageCapture.grabFrame().then((bitmap: any) => {
          const canvas = document.createElement('canvas')
          canvas.width = bitmap.width
          canvas.height = bitmap.height
          const context = canvas.getContext('2d')
          context?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
          const screenData = canvas.toDataURL() // Convert to a base64 string
          if (screenRef.current) {
            screenRef.current.innerHTML = `<img src="${screenData}" alt="Screen Share" />`
          }
          socket?.emit('shareScreenData', { chatId, screenData })
        })
      }

      const intervalId = setInterval(captureFrame, 100)

      // Stop screen sharing when the user stops the track
      videoTrack.onended = () => {
        clearInterval(intervalId)
        socket?.emit('stopScreenShare', { chatId })
        setIsScreenSharing(false)
        if (screenRef.current) {
          screenRef.current.innerHTML = '' // Clear the screen
        }
      }
    } catch (err) {
      console.error('Error starting screen share:', err)
    }
  }

  const stopScreenShare = () => {
    socket?.emit('stopScreenShare', { chatId })
    setIsScreenSharing(false)
    if (screenRef.current) {
      screenRef.current.innerHTML = '' // Clear the screen
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Chat Box */}
      <div
        className="mb-4 h-64 overflow-y-scroll border rounded-lg p-2"
        ref={chatRef}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            {userId === msg.sender.id ? (
              // User's own message (You)
              <div className="chat chat-end">
                <div className="chat-header">
                  You
                  <time className="text-xs opacity-50 mx-2">
                    {msg.created_at
                      ? new Date(msg.created_at).toLocaleString()
                      : ''}
                  </time>
                </div>
                <div className="chat-bubble">{msg.content}</div>
              </div>
            ) : (
              // Message from the other user
              <div className="chat chat-start">
                <div className="chat-header">
                  {msg.sender.username}
                  <time className="text-xs opacity-50 mx-2">
                    {msg.created_at
                      ? new Date(msg.created_at).toLocaleString()
                      : ''}
                  </time>
                </div>
                <div className="chat-bubble chat-bubble-info">
                  {msg.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input input-bordered flex-grow"
          placeholder="Type your message"
        />
        <button onClick={sendMessage} className="btn btn-primary ml-2">
          Send
        </button>
      </div>

      {/* Screen Sharing Section */}
      <div className="mt-4">
        {!isScreenSharing ? (
          <button onClick={startScreenShare} className="btn btn-secondary">
            Start Screen Share
          </button>
        ) : (
          ''
        )}

        {/* Screen Share Preview */}
        <div className="mt-4 p-2 border rounded-lg">
          <div
            ref={screenRef}
            className="screen-share-container h-96 bg-gray-200"
          >
            {/* The shared screen will be rendered here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
