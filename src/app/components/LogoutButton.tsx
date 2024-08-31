'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = ({ logoutAction }: { logoutAction: () => void }) => {
  const router = useRouter()
  const logout = () => {
    logoutAction()
  }

  return (
    <div>
      <a
        onClick={logout}
        className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
      >
        Logout
      </a>
    </div>
  )
}

export default LogoutButton
