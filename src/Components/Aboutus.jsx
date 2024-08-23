import React from 'react';
import staff from '../assets/img/staffwork2.png'

const Aboutus = () => {
  return (
    <div id='about' className='bg-black'>
      <div className='flex flex-col justify-center items-center py-8 md:py-10 lg:py-12 space-y-6 md:space-y-8 px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='font-bebas text-3xl md:text-4xl lg:text-5xl text-yellow-400 mb-4'>
            <h1>About us</h1>
          </div>
          <div className='text-gray-50 w-full md:w-3/4 lg:w-[55%] text-center'>
            <p className='text-sm md:text-base lg:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              <span className='hidden md:inline'>
                , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </span>
            </p>
          </div>
        </div>
        <div className="left w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <img src={staff} alt="staff" className='w-full h-auto' />
        </div>
        <div className="">
          <button className="btn bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer py-2 px-6 md:px-8 rounded-sm font-sans font-bold text-sm md:text-base">
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus