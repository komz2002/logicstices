import React from 'react'
import  { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';




function Scrolldown() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100 && window.innerWidth > 768) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div>
      <div
        className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'} ${isScrolling ? 'disappear' : ''}`}
        onClick={scrollToTop}
        style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
      >
        <FaArrowCircleUp size={60} color="orange"/>
      </div>
    </div>
  );
}
export default Scrolldown;