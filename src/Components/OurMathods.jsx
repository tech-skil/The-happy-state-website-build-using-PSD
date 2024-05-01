import React from 'react'
import abstaf from '../assets/img/happyimg.png'

const OurMathods = () => {
  return (
    <div id='book' className='bg-[#e6e6e6]'>
      <div>
      <section className=' py-14  flex flex-row-reverse   justify-center space-x-28 items-center'>
        <div className="left   flex items-center justify-center ">
        <img src={abstaf} className='h-auto w-auto' alt="staf" />
        </div>
        <div className="right   flex flex-col w-2/5   py-10  space-y-6 ">
          <div className='text-7xl font-bebas font-medium w-3/4'>
          Try our method
for free
          </div>
          <div className='font-sans text-lg w-4/5'>
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </span>
          </div>
          <div><button className="btn bg-yellow-400 hover:bg-yellow-500 cursor-pointer py-2 px-5 rounded-sm font-sans font-bold ">
            Read more</button></div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default OurMathods
