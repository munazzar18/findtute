'use client'
import React from 'react'
import Link from 'next/link'
import logoutAction from '@/app/auth/logout/_action'
import { usePathname } from 'next/navigation'
import { IoFileTrayStacked, IoPeopleSharp, IoPower } from 'react-icons/io5'

const Sidebar = ({
  items,
}: {
  items: { id: number; name: string; link: string; icon: React.ReactNode }[]
}) => {
  const pathname = usePathname()

  return (
    <div className="h-screen bg-primary w-16 lg:!w-64 xl:!w-72 flex flex-col">
      <div className="overflow-y-auto flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="text-white p-4">
            <Link href="/" className="flex items-center gap-1">
              <img src="/logo_white_small.png" alt="findtute logo" />
              <span className="font-bold text-3xl ">FindTute</span>
            </Link>
          </li>

          {items?.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6 ${
                  pathname === item.link
                    ? 'text-[#f7941e] bg-white font-bold'
                    : ''
                } `}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  {item.icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  {item.name}
                </span>
              </Link>
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
