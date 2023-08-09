import React from 'react'
import {
 FaDribbbleSquare,
 FaFacebookSquare,
 FaGithubSquare,
 FaInstagram,
 FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
       <div>
         <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FAIBANET.</h1>
         <p className='py-4'>Trust us to give you the best internet experience ever.</p>
         <div className='flex justify-between md:w-[75%] my-6'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
         </div>
       </div>

       {/* menus */}
       <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
                <h6 className='font-medium border-b text-gray-400'>Our Menu</h6>
                <ul>
                    <li className='py-2 text-sm'>Home</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Resources</li>
                    <li className='py-2 text-sm'>Company</li>
                    <li className='py-2 text-sm'>Contacts</li>
                </ul>
          </div>

          <div>
                <h6 className='font-medium border-b text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Network Status</li>
                    <li className='py-2 text-sm'>Contacts</li>
                </ul>
          </div>

          <div>
                <h6 className='font-medium border-b text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
          </div>

          <div>
                <h6 className='font-medium border-b text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claims</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                    <li className='py-2 text-sm'>Reviews</li>
                    <li className='py-2 text-sm'>Promotions</li>
                </ul>
          </div>

       </div>

       
    </div>
  )
}

export default Footer
