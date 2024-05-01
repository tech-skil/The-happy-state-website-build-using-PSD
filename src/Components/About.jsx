import React from 'react';
import abstaf from '../assets/img/stafwork.png'

const About = () => {
  return (
    <div>
      <section className=' py-14  flex flex-row  justify-center space-x-28 items-center'>
        <div className="left   flex items-center justify-center ">
        <img src={abstaf} className='h-auto w-auto' alt="staf" />
        </div>
        <div className="right   flex flex-col w-2/5   py-10  space-y-4 ">
          <div className='text-8xl font-bebas font-bold w-3/5'>
          how happy are you?
          </div>
          <div className='font-sans text-lg w-4/5'>
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</span>
          </div>
          <div><button className="btn bg-yellow-400 hover:bg-yellow-500 cursor-pointer py-2 px-5 rounded-sm font-sans font-bold ">
            Read more</button></div>
        </div>
      </section>
    </div>
  )
}

export default About
