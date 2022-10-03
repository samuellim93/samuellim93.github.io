import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-200 text-gray-300 px-3 border-t-2 border-zinc-400'>
        <div className='max-w-7xl mx-auto py-8'>
            <div className='flex flex-col px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
              <p>2022 Samuel Lim. All rights reserved</p>
              
              <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook className=' hover:text-sky-400' />
                <FaInstagram className=' hover:text-sky-400' />
                <FaTwitter className=' hover:text-sky-400' />
                <FaGithub className=' hover:text-sky-400' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer