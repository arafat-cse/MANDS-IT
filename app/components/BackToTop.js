"use client";

import { useEffect, useState } from 'react';

export default function BackToTop() {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <a
      href="#"
      className="btn btn-secondary btn-square rounded-circle back-to-top"
      aria-label="Scroll back to top of page"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ display: 'inline-block' }}
    >
      <i className="fa fa-arrow-up text-white" aria-hidden="true"></i>
    </a>
  );
}
