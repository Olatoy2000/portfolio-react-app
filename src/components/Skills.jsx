import React from 'react';
import CssLogo from '../assets/css.png';
import HtmlLogo from '../assets/html.png';
import JavaScriptLogo from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import TailwindCssLogo from '../assets/tailwind.png';
import nodeLogo from '../assets/node.png';
import { Typescript } from 'react-icons';
import GitHubLogo from '../assets/github.png';
import { Icon } from '@iconify/react';
import NextJsLogo from '../assets/nextjs.webp';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='inline text-4xl font-bold border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
            <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HtmlLogo} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CssLogo} alt="Html icon" />
                    <p className='my-4'>CSS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailwindCssLogo} alt="Html icon" />
                    <p className='my-4'>TAILWINDCSS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScriptLogo} alt="Html icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="Html icon" />
                    <p className='my-4'>REACT</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHubLogo} alt="Html icon" />
                    <p className='my-4'>GITHUB</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <Icon icon="logos:typescript-icon" width="80" height="100" className='mx-auto' />                    <p className='my-4'>TYPESCRIPT</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto w-28' src={NextJsLogo} alt="Html icon" />
                    <p className='my-4'>NEXTJS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <Icon icon="logos:nodejs" width="80" height="80" className='mx-auto' />                   
                    <p className='my-4'>NODEJS</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Skills
