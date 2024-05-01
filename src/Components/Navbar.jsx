import React from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <>
    <nav className='navbar h-14 bg-yellow-400 flex items-center justify-between px-16'>
      <div className="start cursor-pointer ">
        <img src={logo} className='w-12' alt="logo" />
      </div>
      <div className="end  ">
        <ul className='flex space-x-8 font-sans cursor-pointer font-bold'>
          <li><a href='#happy'>Happiness</a></li>
          <li><a href='#book'>Books</a></li>
          <li><a href='#about'>About Us</a></li>
          <li><a href='#contacts'>Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
