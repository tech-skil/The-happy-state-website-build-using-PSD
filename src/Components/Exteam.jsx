import React from 'react'
import staf from '../assets/img/staff2.png'
const Exteam = () => {
  return (
    <div  className='bg-yellow-400 pb-20' >
      <div className='   flex flex-col items-stretch ml-40'>
        <div className="continer mt-72 ">
          <div className='text-8xl font-bebas font-medium  w-2/5 '>
            <h1>We can help you to be happy</h1>
          </div>
        </div>

        <div className="continer2 flex flex-row space-x-8 -mt-4 ">
          <div className="lefl size-full py-5 space-y-10  w-[30%]">
            <div className='text-base font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
            <div>
          <button className="btn bg-black text-gray-100 hover:bg-gray-800 cursor-pointer py-3 px-10 rounded-sm font-sans font-bold ">
            Read more</button>
          </div>
          </div>
          <div className="right size-fit -ml-20 ">
            <img src={staf} alt="staff" />
          </div>
          
        </div>


        
      </div>
    </div>
  )
}

export default Exteam
