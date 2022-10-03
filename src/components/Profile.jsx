import React from 'react'
import proImg from '../assets/profile-pic.jpg'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import res from '../assets/Samuel_Resume2022.pdf'


const Profile = () => {
  return (
    <div className='w-full h-auto bg-zinc-200'>
        <div className='max-w-7xl h-auto pb-10 pt-28 m-auto flex flex-col justify-center'>
            <div className='flex flex-row justify-start mx-20 md:items-start'>
                <div className='px-10'>
                    <img className='w-[250px] h-auto rounded-full' src={proImg} alt="/" />
                </div>
                <div className='flex flex-col justify-center md:items-start px-10 py-5'>
                    <h1 className='text-5xl md:text-5xl font-bold'>👋🏻 Hello, I’m Samuel!</h1>
                    <p className='text-2xl py-3'>i-Security Engineer</p>
                    <p className='text-2xl py-3'>samuel.lim93@gmail.com</p>
                    <div className='flex flex-row md:flex-row gap-2'> 
                        <div>
                            <a href='https://www.linkedin.com/in/samuellimruixing/' >
                                <svg class='w-6 h-6 text-white border bg-zinc-600 fill-current hover:text-white hover:bg-sky-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path> 
                                </svg>
                            </a>
                        </div>
                        <div className='flex flex-row'> 
                            <a href={res} target="_blank" rel="noopener noreferrer" download>   
                                <p>
                                    <DocumentArrowDownIcon className='w-6 h-6 text-white bg-zinc-600 hover:text-white hover:bg-sky-400'/>
                                </p>
                            </a>
                            (Click to download Resume)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile