'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import logoutAction from '@/app/auth/logout/_action'
import { usePathname } from 'next/navigation'
import { IoFileTrayStacked, IoPeopleSharp, IoPower } from 'react-icons/io5'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSocket } from '@/utils/socket'

interface MenuItem {
  id: number
  name: string
  link: string
  icon: React.ReactNode
  children?: { id: number; name: string; link: string }[]
}

const Sidebar = ({
  items,
  token,
  currentUserId,
}: {
  items: MenuItem[]
  token: string
  currentUserId: string
}) => {
  const socket = useSocket(token)
  const pathname = usePathname()
  const [unReadMessages, setUnReadMessages] = useState(0)
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const toggleDropdown = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    if (!socket) return

    socket.emit('getUnreadMessageCount')

    socket.on('unreadMessageCount', (count: number) => {
      setUnReadMessages(count)
    })

    return () => {
      socket.off('unreadMessageCount')
    }
  }, [socket, token])

  return (
    <div className="h-screen min-h-screen bg-primary w-16 lg:!w-64 xl:!w-72 flex flex-col">
      <div className="overflow-y-auto flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="text-white p-4">
            <Link
              href="/"
              className="flex items-center gap-1 flex-col sm:flex-row"
            >
              <img src="/logo_white_small.png" alt="findtute logo" />
              <span className="font-bold text-xs sm:block sm:ml-2 sm:text-xs md:text-lg lg:text-3xl">
                FindTute
              </span>
            </Link>
          </li>

          {items?.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <>
                  <a
                    onClick={() => toggleDropdown(item.id)}
                    className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6 ${
                      pathname === item.link
                        ? '!text-gray-800 bg-gray-50 font-extrabold'
                        : ''
                    } `}
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      {item.icon}
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {item.name}
                    </span>
                    <span className="ml-auto">
                      {expandedItems.includes(item.id) ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </span>
                  </a>
                  {/* Dropdown Menu */}
                  {expandedItems.includes(item.id) && (
                    <ul className="ml-8 space-y-3">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.link}
                            className={`flex items-center h-9 pl-6 text-white hover:text-gray-800 ${
                              pathname === child.link
                                ? '!text-gray-800 font-bold'
                                : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className={`relative flex flex-row items-center h-12 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6 ${
                    pathname === item.link
                      ? '!text-gray-800 bg-gray-50 font-extrabold'
                      : ''
                  } `}
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    {item.icon}
                  </span>
                  <span className="ml-2 text-base tracking-wide">
                    {item.name === 'Messages' ? (
                      <div className="indicator">
                        {unReadMessages > 0 && (
                          <span className="indicator-item badge badge-primary">
                            {unReadMessages}
                          </span>
                        )}
                        <div className="me-5 place-items-center">
                          {item.name}
                        </div>
                      </div>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <form action={logoutAction}>
            <span className="flex  justify-center items-center ml-4">
              <IoPower className="w-5 h-5" />
              <span className="ml-2 text-sm tracking-wide truncate">
                <button type="submit">
                  <span className="lg:block hidden">Logout</span>
                </button>
              </span>
            </span>
          </form>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
