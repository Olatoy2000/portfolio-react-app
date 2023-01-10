import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex justify-center p-4 items-center w-full h-screen bg-[#0a192f]'>
        <form method='POST' action="https://getform.io/f/ad6d3149-66a6-4542-8d68-71e4ffa95492" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>Contact</p>
                <p className='py-4 text-gray-300'> Submit the form below or shoot me an email - olatoyconsult@gmail.com </p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name' id='name' required />
            <input type="email" className='bg-[#ccd6f6] my-4 p-2' placeholder='Email' name='name' required />
            <textarea name="message" id="" cols="30" placeholder='Message' className='bg-[#ccd6f6] p-2' rows="10" required></textarea>
            <button className='flex items-center justify-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600'>Let's Collaborate </button>
        </form>      
    </div>
  )
}

export default Contact
