'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSocket } from '../../utils/socket'
import { FaCircle } from 'react-icons/fa6'
import toast from 'react-hot-toast'
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

interface GroupProps {
  messages: Messages[]
  userId: string
  chatRef: React.RefObject<HTMLDivElement>
}

interface Notification {
  chatId: string
  content: string
  from: string
  userId: string
}

const url = process.env.NEXT_PUBLIC_API_URL as string

const Chat: React.FC<ChatProps> = ({
  token,
  chatId,
  applicationId,
  currentUserId,
  roomId,
}) => {
  const socket = useSocket(token, currentUserId)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Messages[]>([])
  const [isSent, setIsSent] = useState(false)
  const [userId, setUserId] = useState<string>('')
  const chatRef = useRef<HTMLDivElement>(null)
  const [ownerUser, setOwnerUser] = useState<any>(null)
  const [otherUser, setOtherUser] = useState<any>(null)

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }

  const getChat = async () => {
    const response = await fetch(`${url}chat/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setOwnerUser(data?.data?.owner)
    setOtherUser(data?.data?.otherUser)
    setMessages(data?.data?.messages)
    scrollToBottom()
    setIsSent(false)
    return data
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      event.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    getChat()
  }, [])

  useEffect(() => {
    if (!socket) return

    socket.emit('joinChat', { applicationId, chatId })

    setUserId(currentUserId)

    socket.on('newMessage', (message: any) => {
      scrollToBottom()
      setMessages((prevMessages) => [...prevMessages, message])
    })

    // socket.on('notification', (notification: Notification) => {
    //   console.log('Received notification in layout:', notification)
    //   // if (notification.userId === currentUserId) return

    //   toast.custom((t) => (
    //     <div
    //       className={`${
    //         t.visible ? 'animate-enter' : 'animate-leave'
    //       } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    //     >
    //       <div className="w-0 flex-1 p-4">
    //         <div className="flex items-start">
    //           <div className="flex-shrink-0 pt-0.5">
    //             <FaCircle className="text-green-400" />
    //           </div>
    //           <div className="ml-3 flex-1">
    //             <p className="text-sm font-medium text-gray-900">
    //               {notification.from}
    //             </p>
    //             <p className="text-sm text-gray-500">{notification.content}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))
    // })

    socket.on('messageStatus', (messageStatus) => {})

    return () => {
      socket.off('newMessage')

      socket.disconnect()
    }
  }, [socket])

  const sendMessage = () => {
    if (message.trim() === '') return
    socket?.emit('sendMessage', { chatId, content: message })
    setIsSent(true)
    setMessage('')
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Group messages by date
  const groupedMessages = Object.entries(
    messages.reduce((acc, msg) => {
      const dateKey = new Date(msg.created_at).toLocaleDateString()
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(msg)
      return acc
    }, {} as Record<string, Messages[]>)
  ).map(([date, msgs]) => ({ date, msgs }))

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Chat Box */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {otherUser?.id !== userId ? otherUser?.username : ownerUser?.username}
          {otherUser && otherUser?.is_online === true ? (
            <FaCircle className="text-yellow-500" />
          ) : (
            <FaCircle className="text-red-500" />
          )}{' '}
        </h3>
      </div>
      {/* Messages Container */}
      <div
        className="mb-4 sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-y-scroll border rounded-lg p-2"
        ref={chatRef}
      >
        {groupedMessages.map(({ date, msgs }) => (
          <div key={date}>
            {/* Date Header */}
            <div className="divider divider-default my-2">
              {new Date(date).toLocaleDateString() ===
              new Date().toLocaleDateString()
                ? 'Today'
                : date}
            </div>

            {/* Messages for this date */}
            {msgs.map((msg, index) => (
              <div key={index}>
                {userId === msg.sender.id ? (
                  // User's own message (You)
                  <div className="chat chat-end">
                    <div className="chat-header">
                      You
                      <time className="text-xs opacity-50 mx-2">
                        {msg.created_at
                          ? `${new Date(msg.created_at).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true,
                            })}`
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
                          ? `${new Date(msg.created_at).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true,
                            })}`
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
