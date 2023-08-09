import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {MdOutlineMenuOpen} from 'react-icons/md'

// navbar function
const Navbar = () => {

//useState for the menu
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FAIBANET.</h1>
        {/* hidden on mobile devices */}
        <ul className='hidden md:flex '>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Contacts</li>
            
        </ul>

{/* dropdown menu */}
{/* hidden on large devices */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <MdOutlineMenuOpen size={30} />} 
        </div>



{/* dropdown menu content*/}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>FAIBANET.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-b-slate-800'>Home</li>
                <li className='p-4 border-b border-b-slate-800'>About Us</li>
                <li className='p-4 border-b border-b-slate-800'>Resources</li>
                <li className='p-4 border-b border-b-slate-800'>Company</li>
                <li className='p-4 border-b border-b-slate-800'>Contacts</li> 
            </ul>
        </div>
    </div>
    
)
}

export default Navbar