import React from 'react'

const Packages = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <p className='w-20 mx-auto mt-[-3rem] bg-white text-[#cd7f32] text-2xl'>Bronze</p>
                <h2 className='text-2l font-bold text-center py-8'>Bronze Package</h2>
                <p className='text-center text-4xl font-bold'>10Mbps</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Fast web browsing</p>
                    <p className='py-2 border-b mx-8'>SD Movie & music streaming</p>
                    <p className='py-2 border-b mx-8'>Internet surfing, social media & email</p>
                    <p className='py-2 mt-8 mx-8'>Ksh 3,100 - Valid 30 days</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 py-3 text-black  px-6 md:mx-auto sm:items-center ml-28 '>Get Connected</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <p className='w-20 mx-auto mt-[-3rem] bg-white text-[#808080] text-2xl'>Silver</p>
                <h2 className='text-2l font-bold text-center py-8'>Silver Package</h2>
                <p className='text-center text-4xl font-bold'>20Mbps</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Bronze package + </p>
                    <p className='py-2 border-b mx-8'>HD TV shows and movies upto 3 connected devices</p>
                    <p className='py-2 border-b mx-8'>Moderate streaming</p>
                    <p className='py-2 border-b mx-8'>CCTV devices Capability</p>
                    <p className='py-2 border-b mx-8'>Superfast video downloads</p>
                    <p className='py-2 mt-8 mx-8'>Ksh 4,200 - Valid 30 days</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black  px-6 md:mx-auto sm:items-center ml-28'>Get Connected</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <p className='w-20 mx-auto mt-[-3rem] bg-white text-[#FFD700] text-2xl'>Gold</p>
                <h2 className='text-2l font-bold text-center py-8'>Gold Package</h2>
                <p className='text-center text-4xl font-bold'>40Mbps</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Bronze + Silver package +</p>
                    <p className='py-2 border-b mx-8'>4K Movies & TV Shows</p>
                    <p className='py-2 border-b mx-8 '>Online gaming and downloading</p>
                    <p className='py-2 border-b mx-8 '>Multiple device music streaming</p>
                    <p className='py-2 mt-8 mx-8'>Ksh 6,400 - Valid 30 days</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black px-6 md:mx-auto sm:items-center ml-28'>Get Connected</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <p className='w-20 mx-auto mt-[-3rem] bg-white text-[#b9f2ff] text-2xl'>Diamond</p>
                <h2 className='text-2l font-bold text-center py-8'>Diamond Package</h2>
                <p className='text-center text-4xl font-bold'>100Mbps</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Bronze + Silver + Gold package +</p>
                    <p className='py-2 border-b mx-8'>Heavy online gaming and downloading</p>
                    <p className='py-2 border-b mx-8'>Superfast video downloads & music streaming</p>
                    <p className='py-2 mt-8 mx-8'>Ksh 13,000 - Valid 30 days</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black px-6 md:mx-auto sm:items-center ml-28'>Get Connected</button>
            </div>
       </div>
    </div>
  )
}

export default Packages
