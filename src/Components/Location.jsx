import React from 'react';
import staff from '../assets/img/staffwork2.png';
import loc from '../assets/img/loc.png';

const Location = () => {
  return (
    <div>
      <div className='bg-yellow-400 px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col justify-center items-center py-8 md:py-10 lg:py-12 space-y-6 md:space-y-8'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-bebas text-3xl md:text-4xl lg:text-5xl text-black mb-2 md:mb-3'>
              <h1>Contact</h1>
            </div>
            <div className='text-black font-sans text-center text-sm md:text-base lg:text-lg max-w-xs md:max-w-sm lg:max-w-md'>
              <p>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="left w-full max-w-md md:max-w-lg lg:max-w-xl">
            <img src={loc} alt="location" className="w-full h-auto" />
          </div>
          <div className="cursor-pointer">
            <button className="btn bg-black text-white hover:bg-gray-800 cursor-pointer py-2 md:py-3 px-6 md:px-8 lg:px-10 rounded-sm font-sans font-bold text-sm md:text-base">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location