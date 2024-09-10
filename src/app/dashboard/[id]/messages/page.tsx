'use client'

import { useState, useEffect, useRef } from 'react'

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Shanay cruz',
      content: 'Guts, I need a review of work. Are you ready?',
      time: '05:14 PM',
      fromUser: false,
    },
    {
      id: 2,
      sender: 'Shanay cruz',
      content: 'Let me know',
      time: '05:14 PM',
      fromUser: false,
    },
    {
      id: 3,
      sender: 'You',
      content: 'Yes, let’s see, send your work here',
      time: '05:14 PM',
      fromUser: true,
    },
    {
      id: 4,
      sender: 'You',
      content: 'Anyone on for lunch today',
      time: '05:14 PM',
      fromUser: true,
    },
  ])

  const [currentMessage, setCurrentMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Function to handle message send
  const handleSendMessage = () => {
    if (currentMessage.trim() === '') return

    setMessages([
      ...messages,
      {
        id: Date.now(), // Unique ID for each message
        sender: 'You',
        content: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        fromUser: true,
      },
    ])

    setCurrentMessage('')
  }

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Handle message deletion by clicking on the message
  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id))
  }

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.fromUser ? 'justify-end' : ''
            } gap-2.5 mb-4 relative`}
            onClick={() => handleDeleteMessage(msg.id)} // Message deletion on click
          >
            {!msg.fromUser && (
              <img
                src="https://pagedone.io/asset/uploads/1710412177.png"
                alt="Shanay image"
                className="w-10 h-11"
              />
            )}
            <div className="grid relative">
              <h5
                className={`text-sm font-semibold leading-snug pb-1 ${
                  msg.fromUser ? 'text-right text-gray-900' : 'text-gray-900'
                }`}
              >
                {msg.sender}
              </h5>
              <div
                className={`px-3.5 py-2 ${
                  msg.fromUser ? 'bg-indigo-600' : 'bg-gray-100'
                } rounded inline-flex items-center gap-3`}
              >
                <h5
                  className={`${
                    msg.fromUser ? 'text-white' : 'text-gray-900'
                  } text-sm font-normal leading-snug`}
                >
                  {msg.content}
                </h5>
              </div>
              <div
                className={`justify-start items-center inline-flex mb-2.5 ${
                  msg.fromUser ? 'justify-end' : ''
                }`}
              >
                <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  {msg.time}
                </h6>
              </div>
            </div>
          </div>
        ))}
        {/* Auto-scroll reference */}
        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Input Field */}
      <div className="sticky bottom-0 w-full p-3 bg-white border-t border-gray-200">
        <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
          <div className="flex items-center gap-2 w-full">
            <input
              className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none"
              placeholder="Type here..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow"
              onClick={handleSendMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g id="Send 01">
                  <path
                    id="icon"
                    d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              <h3 className="text-white text-xs font-semibold leading-4 px-2">
                Send
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
