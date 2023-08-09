import React from 'react'
import About3 from '../assets/About3.jpeg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={About3} alt="About Us"/>
          <div className='flex flex-col justify-center'>
             <p className='text-[#00df9a] font-bold'> About FaibaNet Connection </p>
             <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We provide fast internet connection in your household.</h1>
              {/* <p>
                 A Wi-Fi network is simply an internet connection that's shared with multiple devices in a home or business via a wireless router. The router is connected directly to your internet modem and acts as a hub to broadcast the internet signal to all your Wi-Fi enabled devices. This gives you flexibility to stay connected to the internet as long as you're within your network coverage area.
              </p>
              <p>
                 There are several ways to get wireless service at your home and most depend on geographical location and availability. The majority of urban and suburban areas offer most of these services, with 5G Home Internet right around the corner. Rural areas will most likely offer satellite and 4G LTE Home Internet. If you have a wired internet service, you'll be able to set up your own Wi-Fi network at home. By connecting a router to your modem, you can share your internet connection with all your Wi-Fi enabled devices within range. If your home has two levels, concrete walls or random dead zones, adding a Wi-Fi extender that relays the wireless signal to these areas can make a big difference.
             </p> */}
             <p>
                 Keep in mind that as the number of your mobile devices grows, so does the demand for bandwidth. To keep your devices running at top speeds, you may need to upgrade your internet speed plan. FAIBANET offers several internet services ranging from DSL and fiber to 5G Home Internet, depending on your location. For better reliability and FAIBANET'S fastest download speeds, check if FAIBANET Internet or 5G Home Internet are available at your address.
             </p>
             <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] '>Learn More</button>
          </div>
      </div>
    </div>
  )
}

export default About
