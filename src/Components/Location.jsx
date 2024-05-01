import React from 'react';
import staff from '../assets/img/staffwork2.png';
import loc from '../assets/img/loc.png';
const Location = () => {
  return (
    <div>
      <div className='bg-yellow-400 '>
      <div className=' flex flex-col justify-center items-center py-12 space-y-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='font-bebas text-4xl text-black'>

        <h1 >Contact </h1>
          </div>
          <div className=' text-black font-sans text-center'>
            <p>
            Lorem ipsum dolor sit amet, consectetur 
            </p>
          </div>
        </div>
        <div className="left">
            <img src={loc}  alt="staff" />
        </div>
        <div className="cursor-pointer">
        <button className="btn bg-black text-white hover:bg-gray-800 cursor-pointer py-2 px-8 rounded-sm font-sans font-bold ">
            Read more</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Location
