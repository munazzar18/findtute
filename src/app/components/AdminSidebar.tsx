'use client'
import React from 'react'
import Sidebar from './Sidebar'
import { IoFileTrayStacked, IoPeopleSharp } from 'react-icons/io5'
import { FaAward, FaBookOpen, FaFileInvoiceDollar } from 'react-icons/fa'

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
      <Sidebar items={items} />
    </div>
  )
}

export default AdminSidebar
