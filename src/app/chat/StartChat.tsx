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
  const chatRef = useRef<HTMLDivElement>(null)
  const [otherUser, setOtherUser] = useState<any>(null)

  const getChat = async () => {
    const response = await fetch(`${url}chat/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setOtherUser(data?.data?.otherUser.username)
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
      scrollToBottom()
    }
  }

  useEffect(() => {
    getChat()
  }, [])

  useEffect(() => {
    if (!socket) return

    getChat()

    socket.emit('joinChat', { applicationId, chatId })

    setUserId(currentUserId)

    socket.on('newMessage', (message: any) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.off('newMessage')

      socket.disconnect()
    }
  }, [socket])

  const sendMessage = () => {
    if (message.trim() === '') return
    socket?.emit('sendMessage', { chatId, content: message })
    scrollToBottom()
    setIsSent(true)
    setMessage('')
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Chat Box */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{otherUser}</h3>
      </div>
      {/* Messages Container */}
      <div
        className="mb-4  sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-y-scroll border rounded-lg p-2"
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
    </div>
  )
}

export default Chat
