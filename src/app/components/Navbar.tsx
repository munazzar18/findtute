import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import { cookies } from 'next/headers'
import LogoutButton from './LogoutButton'
import MobileMenu from './MobileMenu'
import React from 'react'

interface User {
  id: string
  username: string
  email: string
  role: string
}

export default function App() {
  const userCookies = cookies().get('user')
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  const token = cookies().get('access_token')?.value
  return (
    <>
      <header
        id="header"
        className="sticky top-0 transition-[top] duration-300 z-40"
      >
        <div id="header-container">
          <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
            <div className="container ">
              <div className="flex justify-between items-center ">
                <div>
                  <Link href="/" className="flex items-center gap-1">
                    <img src="/logo_small.png" alt="img" />
                    <span className="font-bold text-3xl ">FindTute</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <nav className="lg:block hidden">
                    <ul className="flex items-center gap-[25px]">
                      <li className="leading-[164%] relative py-5 group">
                        <Link
                          href="/"
                          className="font-semibold text-lg gap-2 flex justify-center items-center group-hover:text-primary-foreground transition-all duration-500 py-5"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="leading-[164%] relative group">
                        <Link
                          href="/about"
                          className="font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="relative py-5 group">
                        <Link
                          href="/services"
                          className="flex items-center  group-hover:text-primary-foreground font-semibold text-lg text-gray-800 transition-colors duration-300 hover:text-primary-600"
                        >
                          Services
                          <span className="ml-2 text-[#1CBBB4] transition-transform duration-300 group-hover:rotate-180">
                            <FaAngleDown size={19} />
                          </span>
                        </Link>
                        <ul className="absolute top-full left-0 z-10 mt-2 bg-white shadow-lg min-w-56 transition-all duration-300 opacity-0 invisible translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                          <li>
                            <Link
                              href="/services"
                              className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pricing"
                              className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                            >
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/terms-condition"
                              className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                            >
                              Terms & Conditions
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/privacy-policy"
                              className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/how-it-works"
                              className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                            >
                              How It Works
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="leading-[164%] relative group">
                        <Link
                          href="/contact"
                          className=" font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="flex items-center gap-6 ">
                    <div className="ml-16 cursor-pointer search-btn">
                      <i className="fa-solid fa-magnifying-glass "></i>
                    </div>
                    <p className="h-11 w-[1px] bg-muted xl:block hidden"></p>
                    {/* Desktop Version btn */}
                    <div className="lg:block hidden">
                      {token ? (
                        <ul className="flex items-center gap-[25px]">
                          <li className="leading-[164%] relative py-5 group">
                            <Link
                              href="#"
                              className="flex items-center gap-1 font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500"
                            >
                              {user?.username}
                              <span className="">
                                <FaAngleDown size={20} />
                              </span>
                            </Link>

                            <ul className="absolute top-full z-10 bg-background shadow-sm min-w-56 transition-all duration-500 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                              <li>
                                <Link
                                  href="/dashboard"
                                  className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                >
                                  Dashboard
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/dashboard/profile"
                                  className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                >
                                  Profile
                                </Link>
                              </li>
                              {user?.role === 'admin' && (
                                <li>
                                  <Link
                                    href="/admin/dashboard"
                                    className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                  >
                                    Admin
                                  </Link>
                                </li>
                              )}
                              <li>
                                <LogoutButton />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        <ul>
                          <li className="relative py-5 group">
                            <a className="flex items-center  group-hover:text-primary-foreground font-semibold text-lg text-gray-800 transition-colors duration-300 hover:text-primary-600">
                              Sign Up / Sign In
                              <span className="ml-2 text-[#1CBBB4] transition-transform duration-300 group-hover:rotate-180">
                                <FaAngleDown size={19} />
                              </span>
                            </a>
                            <ul className="absolute top-full left-0 z-10 mt-2 bg-white shadow-lg min-w-56 transition-all duration-300 opacity-0 invisible translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                              <li>
                                <Link
                                  href="/auth/login"
                                  className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                                >
                                  Sign In
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/auth/register"
                                  className="block py-3 px-4 font-semibold text-gray-700 hover:text-white hover:bg-[#F6972C] transition-colors duration-300 border-b border-gray-200"
                                >
                                  Sign Up
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="block lg:hidden">
                      <MobileMenu userData={user} tokenData={token} />
                    </div>
                  </div>

                  <form
                    action="#"
                    className="opacity-0 invisible transition-all duration-500 absolute left-0 bottom-0 w-full lg:h-[calc(100%-32%)] md:h-[calc(100%-50%)] h-[calc(100%-0%)] search-form "
                  >
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search here"
                      className="w-full h-full border border-gray-400 px-10 rounded-md outline-none"
                    />
                    <label
                      htmlFor="search"
                      className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer search-close"
                    >
                      <i className="fa-solid fa-xmark border-gray-400  text-xl"></i>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
