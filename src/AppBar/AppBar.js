import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('white');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange'];
    const changeColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    };
    const colorInterval = setInterval(changeColor, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(colorInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#222831]/80 backdrop-blur-md shadow-lg border-b border-gray-800/50 py-2'
        : 'bg-transparent py-4'
        } font-rubik font-medium text-[#EEEEEE]`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center transition-all duration-300">
        <div className='flex items-center'>
          <h1 className='font-indie text-3xl md:text-4xl transition-colors duration-1000 ease-in-out font-bold' style={{ color: color }}>
            Chr.
          </h1>
        </div>

        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm lg:text-base tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#222831]/95 backdrop-blur-xl border-b border-gray-800 shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center ${isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-transparent'
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="w-full text-center py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wider text-sm"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default AppBar;
