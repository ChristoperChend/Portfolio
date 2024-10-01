import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('white');

  const colors = ['red', 'green', 'blue', 'purple', 'orange'];

  useEffect(() => {
    const changeColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    };

    const colorInterval = setInterval(changeColor, 600);

    return () => clearInterval(colorInterval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav style={{ backgroundColor: "#252525", color: "#EEEEEE" }} className="font-rubik font-medium py-2 fixed top-0 w-full z-50">
      <div className="flex justify-between mx-7">
        <div className='flex items-center'>
          <h1 className='font-indie text-4xl' style={{ color: color }}>Chr.</h1>
        </div>

        <div className="hidden sm:flex space-x-10 items-center">
          <Link to="/" className="hover:text-cyan-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors duration-300">About</Link>
          <Link to="/project" className="hover:text-cyan-400 transition-colors duration-300">Project</Link>
          <Link to="/certificate" className="hover:text-cyan-400 transition-colors duration-300">Certificate</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</Link>
        </div>

        <div className="sm:hidden self-center">
          <button onClick={toggleMenu} className="text-cyan-400 items-end">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-2 py-3">
            <Link to="/" className="hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>About</Link>
            <Link to="/project" className="hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Project</Link>
            <Link to="/certificate" className="hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Certificate</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default AppBar;
