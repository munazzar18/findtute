'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6'
import { FaMapMarkedAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import LogoutButton from './LogoutButton'
import React from 'react'

interface User {
  id: string
  username: string
  email: string
  role: string
}

const MobileMenu = ({
  userData,
  tokenData,
}: {
  userData: User | null
  tokenData: string | undefined
}) => {
  const [switchNav, setSwitchNav] = useState(false)

  const handleSwitchNav = () => {
    setSwitchNav(!switchNav)
  }

  return (
    <>
      <div className="block xl:hidden">
        <nav
          className={`bg-warm border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed  ${
            switchNav ? 'right-0' : '-right-full'
          } top-0 z-50 transition-all duration-500 offcanva`}
        >
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-1">
              <img src="/logo_small.png" alt="findtute logo" />
              <span className="font-bold text-3xl ">FindTute</span>
            </a>
            <div
              className="bg-primary w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] left-4 offcanvaClose"
              onClick={handleSwitchNav}
            >
              <FiX className="text-xl" />
            </div>
          </div>

          {userData && tokenData ? (
            <ul className=" mt-6">
              <li className="leading-[164%] relative w-full dropdown">
                <Link
                  href="/"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="leading-[164%] relative w-full">
                <Link
                  href="/dashboard"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  Dashboard
                </Link>
              </li>
              <li className="leading-[164%] relative w-full dropdown">
                <Link
                  href="/dashboard/profile"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  <span>Profile</span>
                </Link>
              </li>
              {userData?.role === 'admin' && (
                <li>
                  <Link
                    href="/admin/dashboard"
                    className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                  >
                    Admin
                  </Link>
                </li>
              )}
              <li
                className="leading-[164%] relative font-jost border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                onClick={handleSwitchNav}
              >
                <LogoutButton />
              </li>
            </ul>
          ) : (
            <ul className=" mt-6">
              <li className="leading-[164%] relative w-full dropdown">
                <Link
                  href="/"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="leading-[164%] relative w-full">
                <Link
                  href="/about"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  About Us
                </Link>
              </li>
              <li className="leading-[164%] relative w-full dropdown">
                <Link
                  href="/services"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  <span>Services</span>
                </Link>
              </li>
              {/* <li className="leading-[164%] relative w-full dropdown">
                <Link
                  href="/"
                  className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                  onClick={handleSwitchNav}
                >
                  <span>Blog</span>
                </Link>
              </li> */}

              <li className="leading-[164%] relative w-full ">
                <Link
                  href="/contact"
                  className="text-[#385469] font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 block border-b border-b-slate-300"
                  onClick={handleSwitchNav}
                >
                  Contact Us
                </Link>
              </li>
              <li className="leading-[164%] relative w-full ">
                <Link
                  href="/auth/login"
                  className="text-[#385469] font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 block border-b border-b-slate-300"
                  onClick={handleSwitchNav}
                >
                  Login
                </Link>
              </li>
              <li className="leading-[164%] relative w-full ">
                <Link
                  href="/auth/register"
                  className="text-[#385469] font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 block border-b border-b-slate-300"
                  onClick={handleSwitchNav}
                >
                  Register
                </Link>
              </li>
            </ul>
          )}

          <ul className=" mt-6"></ul>

          <div className="mt-5">
            <div>
              <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
              <ul className="mt-5 flex flex-col gap-[15px]">
                <li>
                  <p>
                    <span className="flex items-center gap-2">
                      <FaPhoneAlt className="text-primary-foreground" />
                      (92) 304-7279400
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="flex items-center gap-2">
                      <FaRegEnvelope className="text-primary-foreground" />
                      info@findtute.com
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="flex items-center gap-2">
                      <FaMapMarkedAlt className="text-primary-foreground" />
                      3-A, Block Y, Model Town C, Bwp
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <ul className="flex items-center gap-[14px] mt-6">
              <li>
                <a
                  href="/facebook.com/findtute"
                  target="_blank"
                  className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                >
                  <FaFacebookF className="text-primary-foreground text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="/twitter.com/findtute"
                  target="_blank"
                  className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                >
                  <FaTwitter className="text-primary-foreground text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="/linkedin.com/findtute"
                  target="_blank"
                  className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                >
                  <FaLinkedinIn className="text-primary-foreground text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="/instagram.com/findtute"
                  target="_blank"
                  className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                >
                  <FaInstagram className="text-primary-foreground text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="block xl:hidden">
        <div
          className="flex flex-col items-end cursor-pointer transition-all duration-500 offcanvaTragger"
          onClick={handleSwitchNav}
        >
          <span className="block h-[3px] w-5 bg-muted"></span>
          <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
          <span className="block h-[3px] w-5 bg-muted mt-2"></span>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
