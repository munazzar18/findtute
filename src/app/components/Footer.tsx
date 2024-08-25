import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import ScrollToTopButton from '../helper/ScrollToTop'

const Footer = () => {
  return (
    <footer className="pt-[70px] relative">
      <div className="container">
        <div className="grid lg:grid-cols-[370px_auto_auto] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5">
          <div className="wow fadeInUp" data-wow-delay=".3s">
            <a href="#" className="flex items-center gap-1">
              <img src="/logo_small.png" alt="img" />
              <span className="font-bold text-3xl ">TeachU</span>
            </a>
            <p className="pt-4">
              Yes, there are many notable ma corporate the a od businesses
              Informati worldwide
            </p>
            <ul className="flex items-center gap-5 pt-7.5">
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  {/* <FontAwesomeIcon icon={faFacebook} fixedWidth size="sm" /> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                  {/* <FontAwesomeIcon icon={faTwitter} fixedWidth size="sm" /> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md w-9 h-9 flex items-center justify-center bg-warm hover:text-cream-foreground hover:bg-green transition-all duration-500"
                >
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="wow fadeInUp" data-wow-delay=".5s">
            <h3 className="text-2xl font-semibold">Pages</h3>
            <ul className="flex flex-col gap-[15px] pt-5">
              <li>
                <a
                  href="#"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Latest Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Latest Blog And News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground"
                >
                  Our Creative Team Member
                </a>
              </li>
            </ul>
          </div>

          <div className=" wow fadeInUp" data-wow-delay=".5s">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-[15px] pt-5">
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>{' '}
                  <span className="max-w-[168px]">
                    Building No.10, Sector-XX, Phase-3 DHA, Lahore
                  </span>
                </p>
              </li>
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <i className="fa-solid fa-envelope"></i>
                  </span>{' '}
                  <a href="#">teachu@info.com</a>
                </p>
              </li>
              <li>
                <p className="text-[#686868] flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground">
                    <i className="fa-solid fa-phone"></i>
                  </span>{' '}
                  <a href="#">012547892354</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-[75px] overflow-x-hidden">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center pt-7.5 pb-8 border-t border-t-white border-opacity-20">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © <a href="#">TeachU</a> {new Date().getFullYear()} | All Rights
              Reserved
            </p>
            <ul
              className="flex items-center gap-7.5 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <li>
                <a href="#">Trams & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
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
