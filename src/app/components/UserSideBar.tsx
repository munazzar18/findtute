import { cookies } from 'next/headers'
import React, { use } from 'react'
import {
  IoChatbubbles,
  IoFileTrayStacked,
  IoPeopleSharp,
  IoTv,
} from 'react-icons/io5'
import Sidebar from './Sidebar'
import { FaFile } from 'react-icons/fa'
import { FaDollarSign, FaUserLarge } from 'react-icons/fa6'

interface User {
  id: string
  username: string
  email: string
  role: string
}

const UserSideBar = () => {
  const userCookies = cookies().get('user')
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  const generateRoomName = (length: number) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }

  const items = [
    {
      id: 1,
      name: 'Dashboard',
      link: `/dashboard`,
      icon: <IoFileTrayStacked />,
    },
    {
      id: 2,
      name: 'Profile',
      link: `/dashboard/profile`,
      icon: <FaUserLarge />,
    },
    {
      id: 3,
      name: 'Browse',
      link: `/dashboard/browse`,
      icon: <IoPeopleSharp />,
    },
    {
      id: 4,
      name: 'Messages',
      link: `/dashboard/messages`,
      icon: <IoChatbubbles />,
    },
    {
      id: 5,
      name: 'Online Session',
      link: `/dashboard/online-session`,
      icon: <IoTv />,
    },
  ]

  if (user?.role === 'teacher') {
    items.push({
      id: items.length + 1,
      name: 'Payment Request',
      link: '/dashboard/payment-request',
      icon: <FaDollarSign />,
    })
  }

  if (user?.role === 'teacher') {
    items.push({
      id: items.length + 1,
      name: 'Application',
      link: '/dashboard/application',
      icon: <FaFile />,
    })
  }

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default UserSideBar
