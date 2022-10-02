import React from 'react'
import workImg from '../assets/work1.PNG'
import workImg2 from '../assets/project1.jpg'
import { Link } from 'react-router-dom'

const Mywork = () => {
  return (
    <div className='w-full h-auto bg-zinc-200'> 
        <div className='max-w-7xl h-auto m-auto flex flex-col justify-center'>
            <div className='flex flex-row flex-wrap justify-center mx-20 py-10 md:items-center'>     
                <h1 className='text-5xl md:text-5xl text-center font-bold'>My Works</h1>
            </div>

            <div className='flex flex-row flex-wrap justify-between mx-20 py-10 md:items-start gap-5'>
                <div>
                    <a href='https://www.figma.com/proto/ta83LVeswRrAYj5hegD0ZU/Resume?node-id=104%3A2&scaling=min-zoom&page-id=0%3A1' target="_blank" rel="noopener noreferrer">
                        <img className='w-[500px] h-[300px]'  src={workImg} alt="/" />
                    </a>
                    <h1 className='text-3xl md:text-3xl font-bold py-5'>My Resume</h1>
                    <p className='mb-5'>Created in figma</p>
                </div>
                
                <div>
                    <Link to='/project1'>
                        <img className='w-[500px] h-[300px]' src={workImg2} alt="/" />
                    </Link>
                    <h1 className='text-3xl md:text-3xl font-bold py-5'>Capstone Project</h1>
                    <p className='mb-5'>Casestudy for Fintech</p>
                </div>

                <div>
                    <img className='w-[500px] h-[300px]'  src={workImg2} alt="/" />
                    <h1 className='text-3xl md:text-3xl font-bold py-5'>To be Added</h1>
                    <p className='mb-5'>To be Added</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Mywork