import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-yellow-400 py-4 px-4 md:px-8 lg:px-16 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="start cursor-pointer">
          <img src={logo} className='w-8 md:w-10 lg:w-12' alt="logo" />
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className='flex space-x-4 lg:space-x-8 font-sans cursor-pointer font-bold text-sm lg:text-base'>
            <li><a href='#happy'>Happiness</a></li>
            <li><a href='#book'>Books</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#contacts'>Contact</a></li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className='flex flex-col space-y-2 font-sans cursor-pointer font-bold text-sm'>
            <li><a href='#happy' onClick={() => setIsMenuOpen(false)}>Happiness</a></li>
            <li><a href='#book' onClick={() => setIsMenuOpen(false)}>Books</a></li>
            <li><a href='#about' onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href='#contacts' onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;