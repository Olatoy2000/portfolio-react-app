import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4 sm:text-right'>
                     <p className='inline-block pt-[200px] sm:pt-0 text-4xl font-bold border-b-4 border-pink-600'>About</p>
                </div>
                <div>             
                </div>
              </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8'>
                  <div className='px-4 text-4xl font-bold sm:text-right'>
                    <p>Hi, I'm Toyyib, nice to meet you. Please you are free to take a look around</p>
                  </div>
                  <div>
                    <p className='ml-3 text-justify mb-8 px-5 sm:mb-0'>I graduated from Obafemi Awolowo University, studied Crop Production and Protection, 
                     I decided to go with web development, since I understand that it is impossible to succeed in almost
                      any business without some online presence. Hence I know the opportunities are there and will stay there. 
                      My interests are in Front-End Engineering and I love to create beautiful and performant products 
                      with delightful user experiences for clients ranging from individuals, small and large-scale businesses. 
                      What would you do if you had a software expert available at your fingertips?</p>
                  </div>
                </div> 
        </div> 
    </div>
  )
}

export default About
