import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { cookies } from 'next/headers'
import Logout from '../auth/logout/page'

interface User {
  id: string
  email: string
  role: string
}

export default function App() {
  const userCookies = cookies().get('user')
  const user: User = userCookies ? JSON.parse(userCookies.value) : null
  const token = cookies().get('access_token')?.value
  return (
    <>
      <header
        id="header"
        className="sticky top-0 transition-[top] duration-300 z-40"
      >
        <div id="header-container">
          <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
            <div className="container py-5 ">
              <div className="flex justify-between items-center ">
                <div>
                  <Link href="/" className="flex items-center gap-1">
                    <img src="/logo_small.png" alt="img" />
                    <span className="font-bold text-3xl ">Find Tute</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <nav className="xl:block hidden">
                    <ul className="flex items-center gap-[25px]">
                      <li className="leading-[164%] relative py-5 group">
                        <Link
                          href="/"
                          className="font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500 py-5"
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
                      <li className="leading-[164%] relative py-5 group">
                        <Link
                          href="#"
                          className=" font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500"
                        >
                          Services{' '}
                          <span className="">
                            <FontAwesomeIcon
                              icon={faAngleDown}
                              fixedWidth
                              size="sm"
                            />
                          </span>
                        </Link>

                        <ul className="absolute top-full z-10 bg-background shadow-sm min-w-56 transition-all duration-500 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                          <li>
                            <Link
                              href="/services"
                              className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service-details"
                              className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                            >
                              Service Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog"
                              className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                            >
                              Blog
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

                  <div className="block xl:hidden">
                    <div className="fixed left-0 top-0 w-full h-full bg-black/30 invisible transition-all offcanva-overlay hover:visible"></div>
                    <nav className="bg-warm border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed -right-full top-0 z-50 transition-all duration-500 offcanva  ">
                      <div className="flex justify-between items-center">
                        <a href="#" className="flex items-center gap-1">
                          <img src="assets/images/logo.png" alt="img" />
                          <span className="font-bold text-3xl ">Ascent</span>
                        </a>
                        <div className="bg-primary w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] left-4 offcanvaClose">
                          <i className="fa-solid fa-xmark text-xl"></i>
                        </div>
                      </div>
                      <ul className=" mt-6">
                        <li className="leading-[164%] relative w-full dropdown">
                          <a
                            href="#"
                            className=" py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                          >
                            <span>Home</span>
                            <i className="fa-solid fa-plus"></i>
                          </a>

                          <ul className="max-h-0 min-w-56 w-full opacity-0 invisible transition-all duration-500 dropdown-item">
                            <li>
                              <a
                                href="index.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Home-1
                              </a>
                            </li>
                            <li>
                              <a
                                href="index-2.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Home-2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="leading-[164%] relative w-full">
                          <a
                            href="about.html"
                            className=" py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="leading-[164%] relative w-full dropdown">
                          <a
                            href="#"
                            className=" py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                          >
                            <span>Services</span>
                            <i className="fa-solid fa-plus"></i>
                          </a>

                          <ul className="max-h-0 min-w-56 w-full opacity-0 invisible transition-all duration-500 dropdown-item">
                            <li>
                              <a
                                href="services.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="service-details.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Service Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="leading-[164%] relative w-full dropdown">
                          <a
                            href="#"
                            className=" py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                          >
                            <span>Blog</span>
                            <i className="fa-solid fa-plus"></i>
                          </a>

                          <ul className="max-h-0 min-w-56 w-full opacity-0 invisible transition-all duration-500 dropdown-item">
                            <li>
                              <a
                                href="blog.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-details.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Blog Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="leading-[164%] relative w-full dropdown">
                          <a
                            href="#"
                            className=" py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                          >
                            <span>Page</span>
                            <i className="fa-solid fa-plus"></i>
                          </a>

                          <ul className="max-h-0 min-w-56 w-full opacity-0 invisible transition-all duration-500 dropdown-item">
                            <li>
                              <a
                                href="about.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="services.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="service-details.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Service Details
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                href="faq.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Faq's
                              </a>
                            </li>
                            <li>
                              <a
                                href="contact.html"
                                className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="leading-[164%] relative w-full ">
                          <a
                            href="contact.html"
                            className="text-[#385469]  hover:text-secondary-foreground transition-all duration-500 py-2.5 block border-b border-b-slate-300"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>

                      <div className="mt-5">
                        <div>
                          <h4 className="text-xl font-bold text-[#385469]">
                            Contact Info
                          </h4>
                          <ul className="mt-5 flex flex-col gap-[15px]">
                            <li>
                              <p>
                                <i className="fa-solid fa-phone text-primary-foreground"></i>{' '}
                                <a href="#" className="ml-2.5">
                                  (629) 555-0129
                                </a>
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa-solid fa-envelope text-primary-foreground"></i>{' '}
                                <a href="#" className="ml-2.5">
                                  info@example.com
                                </a>
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa-solid fa-location-dot text-primary-foreground"></i>{' '}
                                <span className="ml-2.5">
                                  6391 Elgin St. Celina, 10299
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/* button */}
                        <div className="mt-5">
                          {token ? (
                            <ul className="absolute top-full z-10 bg-background shadow-sm min-w-56 transition-all duration-500 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                              <li>
                                <a
                                  href="services.html"
                                  className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                >
                                  {user.email}
                                </a>
                              </li>
                              <li>
                                {user.role === 'teacher' ? (
                                  <Link
                                    href={`/onboarding/teacher/${user.id}`}
                                    className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                  >
                                    Profile
                                  </Link>
                                ) : (
                                  <Link
                                    href={`/onboarding/student/${user.id}`}
                                    className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                  >
                                    Profile
                                  </Link>
                                )}
                              </li>
                            </ul>
                          ) : (
                            <Link
                              href="/auth/register"
                              className="bg-primary text-cream-foreground rounded-md sm:flex hidden items-center gap-2.5  btn after:bg-green"
                            >
                              Register
                              <span>
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  size="sm"
                                />
                              </span>{' '}
                            </Link>
                          )}
                        </div>
                        {/* button */}
                        <ul className="flex items-center gap-[14px] mt-6">
                          <li>
                            <a
                              href="#"
                              className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                            >
                              <i className="fa-brands fa-facebook-f "></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                            >
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                            >
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="rounded-md w-11 h-11 flex items-center justify-center text-muted-foreground bg-background hover:bg-primary transition-all duration-500"
                            >
                              <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div className="flex items-center gap-6 ">
                    <div className="ml-16 cursor-pointer search-btn">
                      <i className="fa-solid fa-magnifying-glass "></i>
                    </div>
                    <p className="h-11 w-[1px] bg-muted xl:block hidden"></p>
                    {/* Desktop Version btn */}
                    <div className="">
                      {token ? (
                        <ul className="flex items-center gap-[25px]">
                          <li className="leading-[164%] relative py-5 group">
                            <Link
                              href="#"
                              className=" font-semibold text-lg  group-hover:text-primary-foreground transition-all duration-500"
                            >
                              {user.email}
                              <span className="">
                                <FontAwesomeIcon
                                  icon={faAngleDown}
                                  fixedWidth
                                  size="sm"
                                />
                              </span>
                            </Link>

                            <ul className="absolute top-full z-10 bg-background shadow-sm min-w-56 transition-all duration-500 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                              <li>
                                <Link
                                  href={
                                    user.role === 'teacher'
                                      ? `/onboarding/teacher/${user.id}`
                                      : `/onboarding/student/${user.id}`
                                  }
                                  className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                >
                                  Profile
                                </Link>
                              </li>
                              <li>
                                {/* <Link
                                  href="/auth/logout"
                                  className=" font-semibold  hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300"
                                >
                                  Logout
                                </Link> */}
                                <Logout />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        <Link
                          href="/auth/register"
                          className="bg-primary text-cream-foreground rounded-md sm:flex hidden items-center gap-2.5  btn after:bg-green"
                        >
                          Register
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} size="sm" />
                          </span>{' '}
                        </Link>
                      )}
                    </div>
                    <div className="block xl:hidden">
                      <div className="flex flex-col items-end cursor-pointer transition-all duration-500 offcanvaTragger">
                        <span className="block h-[3px] w-5 bg-muted"></span>
                        <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                        <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                      </div>
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
