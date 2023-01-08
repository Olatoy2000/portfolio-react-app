
import React, {useState} from 'react';
import OlatoyLogo from '../assets/olatoylogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        <FaBars />
      </div>
      
      {/* Mobile Menu */}
      
      <ul className={!nav ?'hidden' : 'absolute flex flex-col top-0 left-0 w-full h-screen bg-[#0a192f] items-center justify-center'} >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>


      {/* Social icons */}
    </div>
  )
}

export default Navbar
