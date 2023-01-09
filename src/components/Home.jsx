import React from 'react';
import { HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      

      {/* container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 '>Hi, my name is </p>
        <h1 className='text-4xl font-bold sm:text-7xl text-[#ccd6f6]'>Oladejo Toyyib Olalekan</h1>
        <h2 className='text-4xl font-bold sm:text-7xl text-[#8892b0]'>I'am a Front-End Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a responsible, creative, open-minded, friendly and ambitious front-end web developer.  My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences. Currently, I'm focusing on building responsive web application with good user experience </p>
        <div>
            <button className='flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600'>View Work  
            <span className='duration-300 group-hover:rotate-90'>
            <HiArrowNarrowRight className="ml-3" />
            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
