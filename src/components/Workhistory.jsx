import React from 'react'

const Workhistory = () => {
  return (
    <div className='w-full h-auto bg-zinc-200'>
        <div className='max-w-7xl h-auto m-auto flex flex-col justify-center'>
            <div className='flex flex-col flex-wrap justify-center mx-20 py-10 md:items-center'>
                <h1 className='text-5xl md:text-5xl font-bold'>Work History</h1>
            </div>
            
            <div className='flex flex-col flex-wrap justify-start mx-20 py-5 md:items-start'>
                <strong className='text-2xl md:text-2xl'>💼 I Security ENGINEER @ M.TECH PRODUCTS PTE LTD</strong>
                <p>Year July 2021 - Present</p>
                <ul className='flex flex-col flex-wrap mx-10 md:items-start list-disc'>
                    <li>Implementation and provides adviced for 6 projects on the work of scope.</li>
                    <li>Installation and configuration of antivirus products for 6 projects.</li>
                    <li>Followed up with the clients during requirements gathering and run UAT session with the business users.</li>
                    <li>Conducted knowledge transfer to teach and guide the operation owners.</li>
                    <li>Prepared built in documentation for operation owners to read up for hand over.</li>
                    <li>Standby support and provide troubleshooting for antivirus products.</li>
                </ul>
            </div>
 
            <div className='flex flex-col flex-wrap justify-start mx-20 py-5 md:items-start'>    
                <strong className='text-2xl md:text-2xl'>💼 SOFTWARE ENGINEER @ ACCENTURE PTE. LTD.</strong>
                <p>Year Jan 2018 - Nov 2020</p>
                <ul className='flex flex-col flex-wrap mx-10 md:items-start list-disc'>
                    <li>Identified total of 1000+ test scenarios and cases on 6 different projects.</li>
                    <li>Followed up with different companies to resolve their issues and schedule a date for their vehicles to go for inspection.</li>
                    <li>Provided manual and automation for desktop and mobile testing.</li>
                    <li>Assigned as an onboarding coordinator to ensure smooth onboarding process within the companies.</li>
                    <li>Prepared built in documentation for operation owners to read up for hand over.</li>
                    <li>Assigned as the main tester to ensure the defects is resolved without issues and provide close off with the clients.</li>
                </ul>
            </div>

            <div className='flex flex-col flex-wrap justify-start mx-20 py-5 md:items-start'> 
                <strong className='text-2xl md:text-2xl'>💼 ASSISTANT PROGRAMMER @ 3M SINGAPORE PTE. LTD.</strong>
                <p>Year Mar 2014 - June 2014</p>
                <ul className='flex flex-col flex-wrap mx-10 md:items-start list-disc'>
                    <li>Gathered client requirements and created a database program which they can easily retrieve, view and save the records into excel and lessen their workload.</li>
                    <li>Collected raw data from supervisors to provide a better storage management solutions for the company platform.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Workhistory