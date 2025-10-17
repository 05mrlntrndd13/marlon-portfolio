import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=''
          className='w-36 mx-auto mb-2'
        />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='email icon'
            className='w-6'
          />
          05mrlntrndd13@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Marlon Trinidad. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-medium'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/05mrlntrndd13'
              className='hover:text-pink-500 transition-colors'
            >
              Github
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/marlon-trinidad-66a696345'
              className='hover:text-pink-500 transition-colors'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/mrln.trnddII/'
              className='hover:text-pink-500 transition-colors'
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/mrlntrndd/'
              className='hover:text-pink-500 transition-colors'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
