'use client'
import React, { useState, useEffect } from 'react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-black h-[60px] z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-8">
        {/* Logo or Title */}
        <div className="text-white text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Services</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-white text-black p-2 rounded focus:outline-none"
        >
          {/* Hamburger Icon */}
          <div className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`fixed top-0 right-0 h-screen w-full bg-white text-black transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-xl"
          >
            <div>x</div>
          </button>

          <div className="mt-16 px-4">
            <a href="#" className="block py-2 hover:bg-gray-200">Home</a>
            <a href="#" className="block py-2 hover:bg-gray-200">About</a>
            <a href="#" className="block py-2 hover:bg-gray-200">Services</a>
            <a href="#" className="block py-2 hover:bg-gray-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

