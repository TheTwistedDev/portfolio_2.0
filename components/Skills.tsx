import { languages } from "../data"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 lg:h-screen'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl font-bold tracking-widest text-blue-600 uppercase'>
        Skills
      </p>
      <h2 className='py-4'>What I Can Do</h2>

      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
        {
            languages.map(Language => <SkillCard data={Language} key={Language.name}/>)
        }
      </div>
    </div>
  </div>
  )
}
export default Skills