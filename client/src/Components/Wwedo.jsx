import Homecards from './Homecards'
import safeimg from '../assets/image.png'
import feep from '../assets/finance1.jpg'
import jeep from '../assets/finance2.jpg'
import { motion } from "framer-motion"


function Wwedo() {
  return (
    <div className='bg-[#fbf1ef]  font-montserrat p-6 md:p-12 mt-10 sm:mt-24'>
      <div className=' text-gray-950 text-3xl md:text-5xl font-semibold p-2 sm:p-3 text-center'>What is <span className='text-orange-600'>Ideafest</span> what we do?</div>
        <div className='flex flex-wrap flex-col justify-center items-center gap-5 mx-auto w-3/4'>
        <div className=' mx-auto text-md sm:text-lg p-2 text-gray-500'>"At Ideafest, we facilitate investment opportunities in a diverse array of startups and innovations, allowing individuals to become part of the driving force behind tomorrow's groundbreaking technologies. Our platform offers curated selections of emerging ventures, meticulously vetted for their potential to revolutionize industries. We provide comprehensive research and due diligence, empowering investors to make informed decisions while supporting the growth of visionary entrepreneurs. With a focus on fostering innovation and driving positive change, we invite you to join us in shaping the future of entrepreneurship."</div>
        <div className='p-2 flex flex-col text-center'><span className='text-gray-500 font-bold text-xl'>Sanjay Manikrao Paul </span><span className='text-gray-500 font-semibold'>MERN Web Devloper</span></div>
        </div>
    </div>
  )
}

export default Wwedo
