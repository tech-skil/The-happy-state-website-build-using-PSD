import React from 'react';
import abstaf from '../assets/img/stafwork.png'

const About = () => {
  return (
    <div>
      <section className='py-8 md:py-10 lg:py-14 flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-28'>
        <div className="w-full md:w-1/2 lg:w-auto flex items-center justify-center mb-8 md:mb-0">
          <img src={abstaf} className='h-auto w-full md:w-auto max-w-full' alt="staf" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col py-4 md:py-6 lg:py-10 space-y-4 px-4 md:px-0">
          <div className='text-4xl md:text-6xl lg:text-8xl font-bebas font-bold w-full md:w-4/5 lg:w-3/5'>
            how happy are you?
          </div>
          <div className='font-sans text-base md:text-lg w-full md:w-4/5'>
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
      </section>
    </div>
  )
}

export default About