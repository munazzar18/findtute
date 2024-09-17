'use client'
import React from 'react'
import Sidebar from './Sidebar'
import { IoFileTrayStacked, IoPeopleSharp } from 'react-icons/io5'

const AdminSidebar = () => {
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
      link: '/admin/users',
      icon: <IoPeopleSharp />,
    },
  ]

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default AdminSidebar
