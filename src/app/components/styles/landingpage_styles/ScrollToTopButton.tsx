"use client";
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <p
      className={`fixed w-14 h-14 bottom-6 right-6 p-4 bg-gradient-to-r from-teal-400 to-purple-600 text-white rounded-xl shadow-2xl hover:scale-110 transform transition-all ease-in-out ${isVisible ? 'opacity-50' : 'opacity-0'}`}
      onClick={scrollToTop}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        zIndex: 1000,
      }}
    >
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-7 h-7 animate-pulse transform -translate-y-2.5 -translate-x-2.5 hover:cursor-pointer" 
        style={{
          transform: 'rotate(0deg)', 
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 15l-7-7-7 7"
        />
      </svg>
    </p>
  );
};

export default ScrollToTopButton;
