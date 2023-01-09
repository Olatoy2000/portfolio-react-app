
import React, {useState} from 'react';
import OlatoyLogo from '../assets/olatoylogo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  return (
    <div className='flex fixed w-full h-20 items-center justify-between bg-[#0a192f] px-4 text-gray-300'>
      <div>
        <img src={OlatoyLogo} alt="Customized Brand Logo" className='w-20 rounded-xl' />
      </div>

       {/* Menu */}
       
      <div>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}

      <div onClick={handleClick} className='z-10 md:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      {/* Mobile Menu */}
      
      <ul className={!nav ? 'hidden' : 'absolute flex flex-col top-0 left-0 w-full h-screen bg-[#0a192f] items-center justify-center'} >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>


      {/* Social icons */}
      <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex items-center justify-between w-full text-gray-300'  href='https://www.linkedin.com/in/toyyib-oladejo-8161bb203'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar
