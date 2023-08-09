import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
           <p className='uppercase text-[#00df9a] font-bold p-2'>Faibanet internet</p>
           {/* <h1>We have different packages to suite your different needs.</h1> */}
           <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Faibanet for you.</h1>
           <div className='flex justify-center items-center'>
             <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>We offer fast,reliable internet in</p>
                <Typed
                  className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
                  strings={['10Mbps','20Mbps','40Mbps','100Mbps']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
           </div>
           <p className='md:text-2xl text-xl font-bold text-gray-500'>We have different packages to suite your different needs.</p>
           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-white '>Get Started</button>
        </div>
        
    </div>
  )
}

export default Hero
