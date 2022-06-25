//@ts-nocheck
import { useRouter } from 'next/router'
import { projects } from '../data'
import Link from 'next/link'
import Image from 'next/image'
import { SiVisualstudiocode } from 'react-icons/si'
import { HiChevronDoubleLeft } from 'react-icons/hi'
import Head from 'next/head'

const Project = () => {

    const router = useRouter()
    const projectPage = router.query.project
    const projectData = getProjectData(projectPage)
  return (
    <div className='w-full'> 
      <Head>
        <title>Abdullah-Al-Suwaidi | {projectData?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='w-screen h-[40vh]'>
          <div className='absolute top-0 left-0 w-full h-[40vh]'>
            <Image className='absolute -z-10' src={projectData?.image_path} alt='/' layout='fill' size='100vw' alt='/'/>
            <div className='w-full h-[40vh] bg-black/80'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-300 z-20 p-2'>
              <h2 className='py-2'>{projectData?.name}</h2>
              <div className='flex space-x-2'>
                {
                  projectData?.key_techs.map((tech) => (
                    <h3 key={tech}>{tech}</h3>
                  ))
                }
              </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                <p className='text-xl font-bold text-blue-600'> Project </p>
                <h2 className='font-bold tracking-wider'>Overview</h2>
                <p>{projectData?.description}</p>
                <a href={projectData?.deployed_url}
                  target="_blank"
                  rel="noreferrer">
                  <button className='px-8 py-2 mt-4 mr-8 duration-300 ease-in hover:scale-110'> Demo </button>
                </a>
                <a href={projectData?.github_url}
                  target="_blank"
                  rel="noreferrer">
                  <button className='px-8 py-2 mt-4 duration-300 ease-in hover:scale-110'> Code </button>
                </a>
              </div>
              <div className='col-span-4 p-4 shadow-md md:col-span-1 shadow-gray-400 rounded-xl'>
                <p className='text-lg font-bold text-center'>Technologies</p> 
                  {
                    projectData?.key_techs.map((tech) => (
                     
                      <div className='flex items-center px-2 py-2'>
                        <SiVisualstudiocode className='text-blue-600'/>
                        <p className='pl-2 font-bold text-gray-500'> {tech} </p>
                      </div>
                    ))
                  }
              </div>
            </div>
            <Link href='/#projects'>
               <button className='flex items-center px-6 py-2 ml-4 duration-300 ease-in hover:scale-110'> 
                <HiChevronDoubleLeft size={25}/>  
                <p className='pl-2'> Back </p>
               </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
export default Project

function getProjectData(projectPage: string | string[] | undefined) {
  for(let i = 0; i < projects.length; i++) {
    if(projects[i].projectUrl === projectPage) {
      return projects[i]
    }
  }
}

