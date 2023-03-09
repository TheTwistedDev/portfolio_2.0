import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'

const Home = () => {
  return (
    <div id='Home' className='w-full h-screen text-center border-b-4'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='text-lg tracking-widest text-gray-600 uppercase'> Let's Build Something Great Together </p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-blue-600'> Abdullah </span></h1>
                <h1 className='py-2 text-gray-700'>
                  A Full-Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'> 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/" target="_blank"
                    rel="noreferrer">
                    <Tippy content="LinkedIn" theme='material'>
                      <div className='p-5 text-blue-600 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                        <FaLinkedin size={25}/>
                      </div>
                    </Tippy>
                  </a>
                  <a  href="https://github.com/TheTwistedDev" target="_blank"
                   rel="noreferrer">
                    <Tippy content="GitHub" theme='material'>
                    <div className='p-5 text-blue-600 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                      <FaGithub size={25}/>
                    </div>
                    </Tippy>
                  </a>
                  <a href="">
                    <Tippy content="Email" theme='material'>
                    <div className='p-5 text-blue-600 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                      <AiOutlineMail size={25} onClick={() => window.open('mailto: abdullah.s.khalfan@gmail.com')}/>
                    </div>
                    </Tippy>
                  </a>
                  <a href="/assets/abdullah-al-suwaidi-resume.pdf" 
                      download="abdullah-al-suwaidi-resume.pdf">
                    <Tippy content="Resume" theme='material'>
                    <div className='p-5 text-blue-600 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                      <BsFillPersonLinesFill size={25}/>
                    </div>
                    </Tippy>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home