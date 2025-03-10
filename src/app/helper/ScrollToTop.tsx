'use client'
import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 3000) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div
      id="scroll-up"
      onClick={scrollToTop}
      className={`z-[999] fixed bottom-2 sm:left-1/2 md:left-1/2 xl:left-[98%] left-full -translate-x-1/2 w-12.5 h-12.5 flex justify-center items-center cursor-pointer  ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ display: isVisible ? 'inline' : 'none' }}
      aria-label="Scroll to Top"
    >
      <FaArrowUp
        className="text-primary-foreground hover:text-secondary transition-all duration-500"
        size={25}
      />
    </div>
  )
}

export default ScrollToTopButton
