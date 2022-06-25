import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import Profilepic from '../public/img/profilepic.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-24 shadow-xl z-[100] bg-[#ecf0f3]'>
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <div className='flex justify-center'>
          <Image 
            src={Profilepic}
            width='60'
            height='60'
            className='cursor-pointer rounded-xl'
          />
          <div className='flex flex-col justify-center mx-4 text-3xl font-bold tracking-wide font-patrick'>
            <span className='text-blue-600'>Abdullah</span> 
            <h3 className=''>Full-Stack Developer</h3>
          </div>
        </div>
        <div>
          <ul className='hidden lg:flex'>
            <Link href='/'>
              <li className='ml-10 uppercase hover:text-blue-600'> Home </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 uppercase hover:text-blue-600'> About </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 uppercase hover:text-blue-600'> Skills </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 uppercase hover:text-blue-600'> Projects </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 uppercase hover:text-blue-600'> Contact </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='lg:hidden'>
          <AiOutlineMenu size={25}/>
        </div>
      </div>

      <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col justify-center mx-4 text-3xl font-bold tracking-wide font-patrick'>
                <span className='text-blue-600'>Abdullah</span> 
                <h3 className=''>Al-Suwaidi</h3>
              </div>
              <div onClick={handleNav} className='p-3 rounded-lg shadow-sm cursor-pointer shadow-gray-400'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4'> Let's build something great together </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>

            <div className='pt-40'>
              <p className='tracking-widest text-blue-600 uppercase'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/" target="_blank"
                    rel="noreferrer">
                <div className='p-3 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
                  <FaLinkedin />
                </div>
                </a>
                <a  href="https://github.com/TheTwistedDev" target="_blank"
                   rel="noreferrer">
                <div className='p-3 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
                  <FaGithub />
                </div>
                </a>
                <div className='p-3 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
                  <AiOutlineMail onClick={() => window.open('mailto: contact@abdullah-al-suwaidi.com')}/>
                </div>
                <a href="/assets/abdullah-al-suwaidi-resume.pdf" 
                      download="abdullah-al-suwaidi-resume.pdf">
                <div className='p-3 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
                  <BsFillPersonLinesFill />
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Navbar