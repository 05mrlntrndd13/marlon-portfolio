import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // ✅ Handle scroll blur/shadow
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [setIsDarkMode])

  // ✅ Toggle dark mode and save preference
  const handleDarkModeToggle = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return newMode
    })
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* motion.nav added for a subtle entrance animation */}
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 
        ${isScroll
          ? (isDarkMode
              ? 'bg-neutral-900/80 backdrop-blur-md shadow-lg'
              : 'bg-white/80 backdrop-blur-md shadow-lg')
          : 'bg-transparent'}`}
      >
        {/* --- LOGO --- */}
       <button
  onClick={() => {
    const top = document.querySelector('#top');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
  className="cursor-pointer focus:outline-none"
>
  <Image
    src={isDarkMode ? assets.logo_dark : assets.logo}
    alt="logo"
    className="w-28 mr-14"
  />
</button>


        {/* --- NAV MENU --- */}
        <div className="relative hidden md:flex items-center justify-center mx-auto">
          {/* Background Pill */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-100 ease-in-out
            ${isScroll
              ? 'opacity-0 scale-95'
              : isDarkMode
              ? 'opacity-100 bg-neutral-900 border border-neutral-800 shadow-sm backdrop-blur-md'
              : 'opacity-100 bg-white/70 border border-gray-200 shadow-sm backdrop-blur-md'}`}
          ></div>

          {/* Menu Items */}
          <ul className="flex items-center gap-5 lg:gap-6 px-8 lg:px-10 py-3 text-[15px] lg:text-base font-medium relative z-10">
            <li><a className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} font-Ovo transition-colors`} href="#top">Home</a></li>
            <li><a className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} font-Ovo transition-colors`} href="#about">About me</a></li>
            <li><a className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} font-Ovo transition-colors`} href="#experiences">Experiences</a></li>
            <li><a className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} font-Ovo transition-colors`} href="#work">My Work</a></li>
            <li><a className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} font-Ovo transition-colors`} href="#contact">Contact me</a></li>
          </ul>
        </div>

        {/* --- RIGHT SIDE BUTTONS --- */}
        <div className='flex items-center gap-4'>
          {/* 🌙 DARK MODE TOGGLE */}
          <button onClick={handleDarkModeToggle}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt='toggle theme'
              className='w-6'
            />
          </button>

          {/* CONTACT BUTTON */}
          <div className="relative hidden lg:inline-flex">
            {/* Background Pill */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-100 ease-in-out
              ${isDarkMode
                ? 'opacity-100 bg-neutral-900 border border-neutral-800 shadow-sm backdrop-blur-md'
                : 'opacity-100 bg-white/60 border border-gray-300 shadow-sm backdrop-blur-md'}`}
            ></div>

            <a
              href="#contact"
              className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full ml-4 font-Ovo text-base font-medium whitespace-nowrap select-none relative z-10
              transition-all duration-100 ease-in-out ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}
            >
              <span>Contact</span>
              <Image
                src={assets.arrow_icon}
                alt='arrow'
                className={`w-3 ${isDarkMode ? 'brightness-0 invert' : ''}`}
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt='menu'
              className='w-6'
            />
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 
          ${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-gray-50 text-gray-800'}`}
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt='close'
              className='w-6 cursor-pointer hover:opacity-70 transition-opacity'
            />
          </div>
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About me</a></li>
          <li><a onClick={closeMenu} href="#experiences">Experiences</a></li>
          <li><a onClick={closeMenu} href="#work">My Work</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar
