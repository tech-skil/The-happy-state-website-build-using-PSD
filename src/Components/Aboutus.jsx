import React from 'react';
import staff from '../assets/img/staffwork2.png'

const Aboutus = () => {
  return (
    <div id='about' className='bg-black '>
      <div className=' flex flex-col justify-center items-center py-12 space-y-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='font-bebas text-4xl text-yellow-400'>

        <h1 >About us </h1>
          </div>
          <div className=' text-gray-50 w-[55%] text-center'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam <span className='hidden'>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </p>
          </div>
        </div>
        <div className="left">
            <img src={staff}  alt="staff" />
        </div>
        <div className="">
        <button className="btn bg-yellow-400 text-black hover:bg-ytext-yellow-500 cursor-pointer py-2 px-8 rounded-sm font-sans font-bold ">
            Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
