import React from 'react'
import staf from '../assets/img/staff2.png'

const Exteam = () => {
  return (
    <div className='bg-yellow-400 pb-10 md:pb-16 lg:pb-20'>
      <div className='flex flex-col items-stretch px-4 md:px-8 lg:px-16 xl:px-40'>
        <div className="container mt-20 md:mt-40 lg:mt-72">
          <div className='text-4xl md:text-6xl lg:text-8xl font-bebas font-medium w-full md:w-3/4 lg:w-2/5'>
            <h1>We can help you to be happy</h1>
          </div>
        </div>
        
        <div className="container2 flex flex-col md:flex-row md:space-x-8 mt-8 md:mt-0 lg:-mt-4">
          <div className="left py-5 space-y-6 md:space-y-8 lg:space-y-10 w-full md:w-1/2 lg:w-[30%]">
            <div className='text-sm md:text-base font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
            <div>
              <button className="btn bg-black text-gray-100 hover:bg-gray-800 cursor-pointer py-2 md:py-3 px-6 md:px-8 lg:px-10 rounded-sm font-sans font-bold text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>
          <div className="right w-full md:w-1/2 lg:w-auto mt-8 md:mt-0 md:-ml-0 lg:-ml-20">
            <img src={staf} alt="staff" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exteam