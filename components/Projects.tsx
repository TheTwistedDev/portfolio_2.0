import ProjectCard from "./ProjectCard"
import { projects } from '../data'

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-slate-800'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl font-bold text-blue-600 uppercase tracking widest'>Projects</p>
        <h2 className='py-4 text-slate-300'> What I've Built</h2>
        <hr className='py-4 text-slate-300'/>
        <div className='grid gap-8 md:grid-cols-2'>
          {
            projects.map((project) =>(
              <ProjectCard project={project} key={project.id}/>
          ))}
        </div>
      </div>

    </div>
  )
}
export default Projects