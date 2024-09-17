import logoutAction from '@/app/auth/logout/_action'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { useState } from 'react'
import {
  IoFileTrayStacked,
  IoPeopleSharp,
  IoPower,
  IoReorderFourOutline,
} from 'react-icons/io5'

interface User {
  id: string
  email: string
  role: string
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //   const userCookies = cookies().get('user')
  //   let user: User | null = null

  //   try {
  //     if (userCookies && userCookies.value) {
  //       user = JSON.parse(userCookies.value)
  //     }
  //   } catch (error) {
  //     console.error('Error parsing user cookie:', error)
  //   }

  return (
    <>
      <div className="flex min-w-0">
        <div className="h-screen bg-primary w-16 lg:!w-64 xl:!w-72">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="text-white p-4">
                <Link href="/" className="flex items-center gap-1">
                  <img src="/logo_white_small.png" alt="findtute logo" />
                  <span className="font-bold text-3xl ">FindTute</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/dashboard"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6 "
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <IoFileTrayStacked className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/users"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <IoPeopleSharp className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Users
                  </span>
                </Link>
              </li>

              <li className="px-5 lg:block hidden">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-white">
                    Settings
                  </div>
                </div>
              </li>

              <li>
                <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ">
                  <form action={logoutAction}>
                    <span className="inline-flex justify-center items-center ml-4">
                      <IoPower className="w-5 h-5" />
                    </span>
                    <button
                      type="submit"
                      className="ml-2 text-sm tracking-wide truncate "
                    >
                      <span className="lg:block hidden">logout</span>
                    </button>
                  </form>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-6">
          <main className="flex-grow p-6 overflow-auto bg-primary-foreground">
            {children}
          </main>{' '}
        </div>
      </div>
    </>
  )
}
