import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg'
import CV from '../Assets/Profile.pdf'

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: "#222831", color: "#EEEEEE" }} className="font-rubik font-medium py-2 fixed top-0 w-full z-50">
      <div className="flex justify-between mx-7">
        <div>
          <img src={Logo} className='h-10 w-10 white'></img>
        </div>

        <div className="hidden md:flex space-x-10 items-center">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#project" className="hover:text-cyan-400 transition-colors duration-300">Project</a>
          <a href="#certificate" className="hover:text-cyan-400 transition-colors duration-300">Certificate</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </div>

        <div className="md:hidden self-center">
          <button onClick={toggleMenu} className="text-cyan-400 items-end">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-2 py-3">
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#project" className="hover:text-cyan-400 transition-colors duration-300">Project</a>
            <a href="#cerificate" className="hover:text-cyan-400 transition-colors duration-300">Certificate</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AppBar;
