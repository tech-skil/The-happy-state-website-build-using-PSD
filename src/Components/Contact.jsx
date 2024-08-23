import React from 'react'
import abstaf from '../assets/img/stafwork.png'

const Contact = () => {
  return (
    <div id='contacts'>
      <section className='py-8 md:py-10 lg:py-14 flex flex-col lg:flex-row justify-center lg:space-x-8 xl:space-x-28 items-center px-4 md:px-8 lg:px-12'>
        <div className="w-full lg:w-1/2 bg-black text-white p-6 md:p-8 lg:p-10 mb-8 lg:mb-0">
          <form action="form" className='space-y-4 md:space-y-6'>
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
              <div className='flex flex-col space-y-2 w-full md:w-1/2'>
                <label htmlFor="name">Name</label>
                <input className='bg-black border-2 border-white p-2' type="text" name="Name" />
              </div>
              <div className='flex flex-col space-y-2 w-full md:w-1/2'>
                <label htmlFor="surname">Surname</label>
                <input className='bg-black border-2 border-white p-2' type="text" name="Surname" />
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="email">Email</label>
              <input className='bg-black border-2 border-white p-2' type="email" name="Email" />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="password">Password</label>
              <input className='bg-black border-2 border-white p-2' type="password" name="Password" />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="message">Message</label>
              <textarea className='bg-black border-2 border-white h-32 p-2' name="Message"></textarea>
            </div>
            <div className='text-xs pt-3'>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</span>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col py-6 md:py-8 lg:py-10 space-y-4">
          <div className='text-3xl md:text-4xl lg:text-5xl font-bebas text-yellow-400 lg:w-[42%]'>
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div className='font-sans text-sm md:text-base font-medium w-full lg:w-4/5'>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              <p className='hidden md:block mt-4'>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </span>
          </div>
          <div className='pt-6'>
            <button className="btn bg-black hover:bg-gray-800 text-gray-200 cursor-pointer py-2 px-6 md:px-10 rounded-sm font-sans font-bold text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact