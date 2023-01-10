import React from 'react'
import WorkImg from '../assets/project/workImg.jpeg';
import RealEstate from '../assets/project/realestate.jpg';
import CalculatorApp from '../assets/project/calculatorapp.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 md:h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my past and recent work</p>
        </div>       
        {/* Container for past works */}
        <div
        className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 '>
          {/* Grid items */}
          <div
           style={{backgroundImage: `url(${WorkImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${RealEstate})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${CalculatorApp})`,
          backgroundSize: 'contain',  
        }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-[#9e263a]'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-white bg-[#9e263a] rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-white bg-[#9e263a] rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${RealEstate})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${WorkImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${RealEstate})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work

