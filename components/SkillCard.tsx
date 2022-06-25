import { FunctionComponent } from 'react'
import { ISkill } from '../types'
import Image from 'next/image'

const SkillCard:FunctionComponent<{
    data: ISkill
}> = ({data: {name, image_path}}) => {
    return (
        <div className='p-6 duration-300 ease-in shadow-md rounded-xl hover:scale-105'>
          <div className='grid items-center justify-center grid-cols-2 gap-4'>
            <div className='m-auto'>
              <Image src={image_path} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      )
}
  
export default SkillCard