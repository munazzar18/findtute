'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import logoutAction from '../auth/logout/_action'

const LogoutButton = () => {
  const router = useRouter()
  // const logout = () => {
  //   logoutAction()
  // }

  return (
    <form action={logoutAction}>
      <div>
        <button
          type="submit"
          className=" font-semibold w-full text-left hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
        >
          Logout
        </button>
      </div>
    </form>
  )
}

export default LogoutButton
