import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
      <div className='w-screen h-[80px] z-10 fixed bg-zinc-200 drop-shadow-lg'>
        <div className='px-5 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <Link to='/'>
              <h1 className='text-3xl font-bold sm:text-4xl'>SAMUEL LIM</h1>
            </Link>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-sky-400'>.</h1>
            <ul className='hidden md:flex px-20 gap-10'>
              <li className='hover:text-sky-400 transition duration-300 ease-out hover:ease-in'>My Works</li>
              <li className='hover:text-sky-400 transition duration-300 ease-out hover:ease-in'>Skills & Qualifications</li>
              <li className='hover:text-sky-400 transition duration-300 ease-out hover:ease-in'>Social Media</li>
              <li className='hover:text-sky-400 transition duration-300 ease-out hover:ease-in'>Work History</li>
              <li className='hover:text-sky-400 transition duration-300 ease-out hover:ease-in'>Resume</li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4'>
            <button>Contact Me</button>
          </div>
          <div className='md:hidden' onClick={handleClick}>
            {!nav ? <Bars3Icon className="h-8 w-8" /> : <XMarkIcon className="h-8 w-8" /> }
            
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full'}>
              <li className='border-b-2 border-white px-8 hover:bg-sky-400 hover:text-white'>My Works</li>
              <li className='border-b-2 border-white px-8 hover:bg-sky-400 hover:text-white'>Skills & Qualifications</li>
              <li className='border-b-2 border-white px-8 hover:bg-sky-400 hover:text-white'>Social Media</li>
              <li className='border-b-2 border-white px-8 hover:bg-sky-400 hover:text-white'>Work History</li>
              <li className='border-b-2 border-white px-8 hover:bg-sky-400 hover:text-white'>Resume</li>
              <div className=' flex  flex-col h-[66px] px-8 py-3'>
                <button>Contact Me</button>
              </div>
        </ul>
        
      </div>
  )
}

export default Navbar