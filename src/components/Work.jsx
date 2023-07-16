import React from 'react'
import BatteryDetector from "../assets/project/battery-dete.jpg";
import WeatherApp from "../assets/project/smart-weather.jpg";
import CreditCard from "../assets/project/credit-card.png"


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
           style={{backgroundImage: `url(${BatteryDetector})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                Battery Detector
              </span>
              <div className='pt-8 text-center'>
                <a href="https://olatoy-batterydetector.netlify.app">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/Olatoy2000/battery-detector">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${WeatherApp})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
               Weather App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://olatoy-weatherapp.netlify.app">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/Olatoy2000/weather-app">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
          style={{backgroundImage: `url(${CreditCard})`,
          backgroundSize: 'contain',  
        }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effect */}
            <div className='px-3 opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-gray-700'>
                Credit Card
              </span>
              <div className='pt-8 text-center'>
                <a href="https://cc-demo.netlify.app">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/Olatoy2000/credit-card">
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

