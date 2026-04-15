"use client";
import { useEffect } from 'react';
import useAnimations from '../hooks/useAnimations';

export default function ClientOnly({ children }) {
  useAnimations();

  useEffect(() => {
    // Attach close mobile menu handler to all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const handleClick = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      if (navbarToggler && navbarCollapse) {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarCollapse.classList.remove('show');
        }
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return <>{children}</>;
}
