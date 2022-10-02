import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer";
import Poster1 from '../assets/project1_poster.jpg'
import personaImg from '../assets/UserPersona.png'
import ideationImg from '../assets/Ideation.png'
import affintyImg from '../assets/Affintymap.jpg'
import firstImg from '../assets/1st.jpg'
import secondImg from '../assets/2nd.jpg'
import thirdImg from '../assets/3rd.jpg'

const Project1 = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto bg-zinc-200'>
        <div className='max-w-7xl h-auto m-auto py-[100px] border-2 border-green-600 flex flex-col justify-center'>
          
          <div className='flex flex-col flex-wrap justify-center mx-20 py-3 md:items-center'>
            <img src={Poster1} alt="/" />
          </div>
          
          <div className='flex flex-row justify-between mx-20 py-3 md:items-start'>
              <div className='px-10'>
                <h1 className='text-3xl md:text-3xl font-bold'>Responsibilities</h1>
                <ul className='list-disc px-10'>
                  <li>User Research</li>
                  <li>UX design: Crazy 8s, Wireframing, Prototyping</li>
                  <li>UI design + Iterations</li>
                </ul>
              </div>

              <div className='px-10'>
                <h1 className='text-3xl md:text-3xl font-bold'>Project Context</h1>
                <ul className='list-disc px-10'>
                  <li>Designed in 1 month</li>
                  <li>Group Project with a team of 3 people</li> 
                </ul>
              </div>
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>The Problem Statement</h1>
            <p>
              As a university student taking a degree in IT, I have a passion of having the latest technology and spending time with my family/friends. 
              Although I have an freelance job to recuperate the spendings, I realised <b>my savings is going downwards</b> after I have took up car license and now it is disrupting my day-to-day life.
              The assumptions of I always have enough hit me hard as <b>I never find the need to budget my spendings.</b> 
            </p>
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h3 className='text-sm md:text-sm'>THE SOLUTION</h3>
            <h1 className='text-3xl md:text-3xl font-bold'>A Solution for task management.</h1>
            <p>
              A e-wallet application where anyone can efficiently keep track of their spendings, ease of use for mutliple currencies transactions (Top-up and payment),
              and update the administration whenever they need additional assistance.
            </p>
            <img className='w-[900px] p-5 m-auto'  src={firstImg} alt="/" />
            <img className='w-[900px] p-5 m-auto'  src={secondImg} alt="/" />
            <img className='w-[900px] p-5 m-auto'  src={thirdImg} alt="/" />
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>To design for tasks is to design for SPEED. </h1>
            <p>
              Based on the trends in my affinity map, students spend most of their transactions using digital payment. The main reason was mainly due to the cashback rewards they are getting. 
              Additionally,most of the students do not actively keep track of their spendings. The common way of them is to either limit their credit limit to stop them from spending or transfer a certain amount of money to some account and use it. 
            </p>
            <img className='w-[700px] m-auto'  src={affintyImg} alt="/" />
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>Sketching for Efficient Flows + Visualizations</h1>
            <p>
              Utilizing the different opportunities, I started to look at different UI to design the best visualization for e-wallet applications. 
              After various ideas, the final design is completed in my ideation.
            </p>
            <img className='w-[700px] h-[400px] m-auto'  src={ideationImg} alt="/" />
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>THE COLLEGE STUDENT PERSONA</h1>
            <img className='w-[700px] h-[500px] m-auto'  src={personaImg} alt="/" />
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>Final Prototype with added revisions</h1>
            <iframe className='m-auto' width='1000' height='650' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmNIlu2v1Tq7C3E1tjHS2Wm%2FLofi-and-Hifi%3Fnode-id%3D143%253A1874%26scaling%3Dscale-down%26page-id%3D143%253A1529%26starting-point-node-id%3D143%253A1874%26show-proto-sidebar%3D1" allowfullscreen title='test'></iframe>
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-start mx-20 md:items-start gap-2'>
            <h1 className='text-3xl md:text-3xl font-bold'>Reflections + What I would do differently</h1>
            <p>
              This was my first UX project!🎉. More than the actual output, however- I’m immensely grateful to have been through an entire UX process so I can see what it’s actually like. 
              On that note, a few things I’ve learned: 
            </p>
            <ul className='list-decimal'>
              <li>
                <b>Iterate as much as you can.</b>
                <p>
                  In the beginning stages, I’ve explored so many different options to try finding the right solution for my e-wallet application - I’ve ended up “restarting” my project over 3 times with over 3-4 iterations of my FIGMA file to make sure every aspect of the application was designed with intention.
                  Not to mention- I have a better sense to obey WCAG standards next time!
                </p>
              </li>
              <li>
                <b>Be cautious, but never assume.</b>
                <p>
                  As it is my goal to design an application to help student to budget their spendings, this project made me learn to be more open to suggestions and do not assume based on my experience and needs.
                </p>
              </li>
            </ul>
          </div>

          <div className='border-t-2 border-zinc-400 mx-20 my-5'></div>

          <div className='flex flex-col justify-center md:items-start gap-2 m-auto'>
            <a href='https://docs.google.com/presentation/d/11skE6oOFfbPHTkC_Cvvq8QQlVyqBqnOh/edit?usp=sharing&ouid=109366641910326080958&rtpof=true&sd=true' target="_blank" rel="noopener noreferrer">   
              <button class='test'>CASE STUDY SLIDEDECK HERE</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Project1
