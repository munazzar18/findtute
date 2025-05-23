import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import ScrollToTopButton from '../helper/ScrollToTop'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pt-[70px] relative">
      <div className="container">
        <div className="grid lg:grid-cols-[370px_auto_auto] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5">
          <div className="wow fadeInUp" data-wow-delay=".3s">
            <a href="#" className="flex items-center gap-1">
              <img src="/logo_small.png" alt="img" />
              <span className="font-bold text-3xl ">Find Tute</span>
            </a>
            <p className="pt-4">
              only platform find teachers onsite or online for learning online
              or onsite
            </p>
            {/* <ul className="flex items-center gap-5 pt-7.5">
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                  </svg>
                </a>
              </li>
            </ul> */}
          </div>

          <div className="wow fadeInUp" data-wow-delay=".5s">
            <h3 className="text-2xl font-semibold">Pages</h3>
            <ul className="flex flex-col gap-[15px] pt-5">
              <li>
                <Link
                  href="/about"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Latest Service
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Latest Blog And News
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className=" wow fadeInUp" data-wow-delay=".5s">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-[15px] pt-5">
              {/* <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaMapMarkerAlt />
                  </span>{' '}
                  <span className="max-w-[168px]">
                    Building No.3-A, Block 'Y' , Main Road Model Town C,
                    Bahawalpur
                  </span>
                </p>
              </li> */}
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaEnvelope />
                  </span>{' '}
                  <a href="#">findtute@info.com</a>
                </p>
              </li>
              {/* <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <FaPhoneAlt />
                  </span>{' '}
                  <a href="#">0923047279400</a>
                </p>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="pt-[75px] overflow-x-hidden">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center pt-7.5 pb-8 border-t border-t-white border-opacity-20">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © <a href="#">Find Tute</a> {new Date().getFullYear()} | All
              Rights Reserved
            </p>
            <ul
              className="flex items-center gap-7.5 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <li>
                <Link href="/terms-condition">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}

export default Footer
