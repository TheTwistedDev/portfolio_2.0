import Image from "next/image"
import CoffeeComputing from '../public/img/CoffeeComputing.png'

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 border-b-4 bg-slate-800'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='pb-4 text-xl font-bold tracking-widest text-blue-600 uppercase'>About</p>
                <hr className='text-slate-300'/>
                <h2 className='py-4 text-slate-300'>Who Am I</h2>
                <p className='py-2 text-slate-300'>
                    I'm a self taught developer and have been practicing Web Development for 3+ years now. 
                    I'm excited to finally be starting my journey as a professional developer and I'm looking 
                    for opportunities to use what I have learned to help companies to improve or start development of their online applications.
                </p>
            </div>
            <div className='col-span-1'>
                <div className='flex items-center justify-center w-full h-auto p-4 m-auto shadow-sm bg-slate-200 shadow-gray-500 rounded-xl'>
                <Image 
                    src={CoffeeComputing}
                    width='400'
                    height='400'
                    className='rounded-xl'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
export default About