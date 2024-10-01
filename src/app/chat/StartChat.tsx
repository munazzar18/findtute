'use client'
import { useState, useRef, useEffect } from 'react'
import useChatSocket from './useChatSocket'
import { IoEnter } from 'react-icons/io5'

interface User {
  id: string
  username: string
  email: string
  role: string
}

interface ChatProps {
  room: string
  userId: string
  token: string
  user: User
}

const StartChat: React.FC<ChatProps> = ({ room, userId, token, user }) => {
  const [message, setMessage] = useState('')

  const { messages, sendMessage, startScreenSharing, myVideo, userVideo } =
    useChatSocket({ room, userId, token })
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message)
      setMessage('') // Clear input
    }
  }

  return (
    <div className="w-full h-[800px] flex flex-col">
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                msg.userId === room ? 'justify-end' : ''
              } gap-2.5 mb-4 relative`}
            >
              {msg.userId !== room && (
                <img
                  src="https://pagedone.io/asset/uploads/1710412177.png"
                  alt="User avatar"
                  className="w-10 h-11"
                />
              )}
              <div className="grid relative">
                <h5
                  className={`text-sm font-semibold leading-snug pb-1 ${
                    msg.userId === room
                      ? 'text-right text-gray-900'
                      : 'text-gray-900'
                  }`}
                >
                  {msg.userId === room ? 'You' : 'User'}
                </h5>
                <div
                  className={`px-3.5 py-2 ${
                    msg.userId === room ? 'bg-indigo-600' : 'bg-gray-100'
                  } rounded inline-flex items-center gap-3`}
                >
                  <h5
                    className={`${
                      msg.userId === room ? 'text-white' : 'text-gray-900'
                    } text-sm font-normal leading-snug`}
                  >
                    {msg.message}
                  </h5>
                </div>
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Input Field */}
      <div className="sticky bottom-0 w-full p-3 bg-white border-t border-gray-200">
        <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
          <div className="flex items-center gap-2 w-full">
            <input
              className="grow !text-black text-lg leading-4 focus:outline-none"
              placeholder="Type here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e)
                }
              }}
            />
            <button
              className="items-center flex py-2 border border-gray-200 rounded-full btn"
              onClick={handleSendMessage}
            >
              <IoEnter size={30} />
              <h3 className=" text-lg font-semibold leading-4 ">Send</h3>
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <video ref={myVideo} autoPlay muted style={{ width: '300px' }}></video>
        <video ref={userVideo} autoPlay style={{ width: '300px' }}></video>
      </div>
      <button
        className="border border-gray-200 rounded-md !leading-0 mx-2 btn"
        type="button"
        onClick={startScreenSharing}
      >
        Start Screen Share
      </button>
      <button
        className="border border-gray-200 rounded-md !leading-0 mx-2 btn"
        type="button"
      >
        Stop Screen Share
      </button>
    </div>
  )
}

export default StartChat
