import React from 'react'
import Sidebar from './Sidebar'
import { IoFileTrayStacked, IoPeopleSharp } from 'react-icons/io5'
import { FaAward, FaBookOpen, FaFileInvoiceDollar } from 'react-icons/fa'
import { cookies } from 'next/headers'

interface User {
  id: string
  username: string
  email: string
  role: string
}

const AdminSidebar = () => {
  const userCookies = cookies().get('user')
  const token = cookies().get('access_token')?.value
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }
  const items = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/admin/dashboard',
      icon: <IoFileTrayStacked />,
    },
    {
      id: 2,
      name: 'Users',
      link: '/admin/users?page=1',
      icon: <IoPeopleSharp />,
    },
    {
      id: 3,
      name: 'Payments',
      link: '/admin/payments?page=1',
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 4,
      name: 'Grades',
      link: '/admin/grades?page=1',
      icon: <FaAward />,
    },
    {
      id: 5,
      name: 'Subjects',
      link: '/admin/subjects?page=1',
      icon: <FaBookOpen />,
    },
  ]

  return (
    <div>
      <Sidebar
        items={items}
        token={token ? token : ''}
        currentUserId={user ? user.id : ''}
      />
    </div>
  )
}

export default AdminSidebar
