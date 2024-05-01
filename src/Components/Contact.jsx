import React from 'react'
import abstaf from '../assets/img/stafwork.png'
const Contact = () => {
  return (
    <div id='contacts'>
      <div>
      <section className=' py-14  flex flex-row  justify-center space-x-28 items-center'>
        <div className="left  bg-black text-white p-10  flex items-center justify-center ">
          <form action="form " className='space-y-1'> 
          <div className='flex space-x-6'>
            <div className='flex flex-col space-y-2'>
            <label htmlFor="for"> Name</label> 
            <input   className='bg-black border-2 border-white'  type="text" name="Name"  />
            </div>
            <div className='flex flex-col space-y-2'>
            <label htmlFor="for"> Surname</label> 
            <input   className='bg-black border-2 border-white' type="text" name="Name"  />
            </div>

          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="for"> Email</label> 
            <input   className='bg-black border-2 border-white' type="text" name="Name"  />
            </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="for"> Passward</label> 
            <input   className='bg-black border-2 border-white' type="text" name="Name"  />
            </div>
          <div className='flex flex-col  space-y-2'>
            <label htmlFor="for"> Message</label> 
            <input   className='bg-black border-2 border-white h-32' type="text"  name="Name"  />
            </div>
            <div className='w-[24rem] text-xs pt-3 '>
            <span >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </span>
            </div>
          </form>
        </div>
        <div className="right   flex flex-col w-2/5   py-10  space-y-4 ">
          <div className='text-5xl font-bebas text-yellow-400 w-[42%]'>
          SUBSCRIBE TO
OUR NEWSLETTER
          </div>
          <div className='font-sans text-sm font-medium w-4/5'>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <p className='hidden'> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></span>
          </div>
          <div className='pt-6'><button className="btn  bg-black hover:bg-gray-800 text-gray-200  cursor-pointer py-1 px-10 rounded-sm font-sans font-bold ">
          Subscribe</button></div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Contact
