import React from 'react';
import staff from '../assets/img/staffwork2.png';

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
          <div className="left w-full max-w-md md:max-w-5xl lg:max-w-7xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88654020372!2d77.46612549485897!3d12.953945613736225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1692861745353!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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

export default Location;