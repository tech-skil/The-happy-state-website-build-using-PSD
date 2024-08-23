import React from 'react'
import abstaf from '../assets/img/happyimg.png'

const OurMethods = () => {
  return (
    <div id='book' className='bg-[#e6e6e6]'>
      <section className='py-8 md:py-10 lg:py-14 px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center space-y-8 lg:space-y-0 lg:space-x-reverse lg:space-x-8 xl:space-x-28'>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={abstaf} className='h-auto w-full max-w-md lg:max-w-full' alt="staf" />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col space-y-4 md:space-y-6">
            <div className='text-4xl md:text-5xl lg:text-7xl font-bebas font-medium w-full lg:w-3/4'>
              Try our method for free
            </div>
            <div className='font-sans text-base md:text-lg w-full lg:w-4/5'>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </span>
            </div>
            <div>
              <button className="btn bg-yellow-400 hover:bg-yellow-500 cursor-pointer py-2 px-5 rounded-sm font-sans font-bold text-sm md:text-base">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurMethods