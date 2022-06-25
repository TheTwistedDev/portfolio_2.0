import Image from 'next/image'
import { FunctionComponent } from 'react'
import { IProject } from '../types'
import Link from 'next/link'

const ProjectCard:FunctionComponent <{
    project: IProject
}> = ({
    project: {
      name,
      projectUrl,
      image_path,
    }}) => {
  return (
    <div className='relative flex items-center justify-center w-full h-auto shadow-lg shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-gray-800 to-gray-400'>
        <Image className='rounded-xl group-hover:opacity-10' src={image_path} alt='/' width='600px' height='400px'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl tracking-wider text-center text-white'>{name}</h3>
            <Link href={projectUrl}>
                <p className='py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}
export default ProjectCard