import { cookies } from 'next/headers'
import React, { use } from 'react'
import {
  IoChatbubbles,
  IoFileTrayStacked,
  IoPeopleSharp,
  IoTv,
} from 'react-icons/io5'
import Sidebar from './Sidebar'

interface User {
  id: string
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
      link: `/dashboard/${user?.id}`,
      icon: <IoFileTrayStacked />,
    },
    {
      id: 2,
      name: 'Browse',
      link: `/dashboard/${user?.id}/browse`,
      icon: <IoPeopleSharp />,
    },
    {
      id: 3,
      name: 'Messages',
      link: `/dashboard/${user?.id}/messages/${user?.id}`,
      icon: <IoChatbubbles />,
    },
    {
      id: 4,
      name: 'Online Session',
      link: `/dashboard/${user?.id}/online-session/${generateRoomName(16)}`,
      icon: <IoTv />,
    },
  ]

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default UserSideBar
