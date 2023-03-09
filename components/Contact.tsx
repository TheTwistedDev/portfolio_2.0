import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { useForm, SubmitHandler } from 'react-hook-form'
import ContactImg from '../public/img/Contact.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'

interface IFormInputs {
  name: string,
  phone: string,
  email: string,
  subject: string,
  message: string,
}

const Contact = () => {

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors }, 
  } = useForm<IFormInputs>()

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    if (data.phone === '') data.phone = 'Client did not provide a phone number'
    try {
      const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    } catch (err) {
      console.log(err)
    }
    reset()
  }

  return (



    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 pt-16 w-full '>
        <p className='text-xl font-bold tracking-widest text-blue-600 uppercase'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid gap-8 lg:grid-cols-5'>
          {/* left */}
          <div className='w-full h-full col-span-3 p-4 shadow-lg lg:col-span-2 shadow-gray-400 rounded-xl'>
            <div className='h-full lg:p-4 '>
              <div>
                <Image
                  className='duration-300 ease-in rounded-xl hover:scale-105'
                  src={ContactImg}
                  alt='/'
                  width='400'
                  height='250'
                />
              </div>
              <div>
                <h2 className='py-2 text-blue-600 font-patrick'>Abdullah <span className='text-black'>Al-Suwaidi</span></h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='py-8 font-bold tracking-wider uppercase'>Connect With Me</p>
                <div className='flex items-center justify-between py-4 text-blue-600'>
                  <a href="https://www.linkedin.com/in/abdullah-al-suwaidi-787b1416b/" target="_blank"
                    rel="noreferrer">
                    <Tippy content="LinkedIn" theme='material'>
                    <div className='p-6 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                      <FaLinkedinIn size={22} />
                    </div>
                    </Tippy>
                  </a>
                  <a href="https://github.com/TheTwistedDev" target="_blank"
                    rel="noreferrer">
                    <Tippy content="GitHub" theme='material'>
                    <div className='p-6 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                      <FaGithub size={22} />
                    </div>
                    </Tippy>
                  </a>
                  <Tippy content='Email' theme='material'>
                  <div className='p-6 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                    <AiOutlineMail size={22} onClick={() => window.open('mailto: abdullah.s.khalfan@gmail.com')}/>
                  </div>
                  </Tippy>
                    <a href="/assets/abdullah-al-suwaidi-resume.pdf" 
                      download="abdullah-al-suwaidi-resume.pdf">
                      <Tippy content='Resume' theme='material'>
                      <div className='p-6 duration-300 ease-in shadow-md cursor-pointer rounded-xl shadow-gray-400 hover:scale-110'>
                        <BsFillPersonLinesFill size={22} />
                      </div>
                      </Tippy>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='w-full h-auto col-span-3 shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit(formSubmitHandler)}
                action=''
                method='POST'
              >
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input
                      className={`flex p-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.name ? 'ring-2 ring-red-500': null}`}
                      type='text'
                      {...register('name' , { required: {
                        value: true,
                        message: 'Please Enter your Name'
                      } })}
                      placeholder='Full Name'
                    />
                    <span className='py-2 text-sm text-red-400'>{errors?.name?.message}</span>
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1'
                      type='text'
                      {...register('phone')}
                      placeholder='Phone (Not Required)'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Email</label>
                  <input
                    className={`flex p-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.email ? 'ring-2 ring-red-500': null}`}
                    type='email'
                    {...register('email' , { required: {
                        value: true,
                        message: 'You must provide an email address',
                      }, 
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'You must enter a valid email address'
                      },
                    })}
                    placeholder='Email '
                  />
                  <span className='py-2 text-sm text-red-400'>{errors?.email?.message}</span>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Subject</label>
                  <input
                    className={`flex p-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.subject ? 'ring-2 ring-red-500': null}`}
                    type='text'
                    {...register('subject' , { required: {
                      value: true,
                      message: 'Please provide a Subject Title for your Message'
                    } })}
                    placeholder='Subject'
                  />
                  <span className='py-2 text-sm text-red-400'>{errors?.subject?.message}</span>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Message</label>
                  <textarea
                    className={`flex p-3 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 ${errors.message ? 'ring-2 ring-red-500': null}`}
                    rows={10}
                    {...register('message' , { required: {
                      value: true,
                      message: 'You must provide a Message'
                    } })}
                    placeholder='Enter your message here'
                    style={{resize: 'none'}}
                  ></textarea>
                  <span className='py-2 text-sm text-red-400'>{errors?.message?.message}</span>
                </div>
                <button type='submit' className='w-full p-4 mt-4 shadow-md shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='p-4 duration-300 ease-in shadow-md cursor-pointer hover:scale-110 rounded-xl shadow-gray-400'>
                <HiOutlineChevronDoubleUp
                  className='text-blue-600'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact