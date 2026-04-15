"use client";

import { useEffect, useState } from 'react';

export default function useAnimations() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Hide spinner on mount
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.classList.remove('show');
    }

    // Initialize WOW.js
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }

    // Back to top button visibility
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      const stickyTop = document.querySelector('.sticky-top');

      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.style.display = 'inline-block';
          setIsVisible(true);
        } else {
          backToTop.style.display = 'none';
          setIsVisible(false);
        }
      }

      // Sticky Navbar
      if (stickyTop) {
        if (window.scrollY > 45) {
          stickyTop.classList.add('shadow-sm');
          stickyTop.style.top = '0px';
          setIsSticky(true);
        } else {
          stickyTop.classList.remove('shadow-sm');
          stickyTop.style.top = '0px';
          setIsSticky(false);
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close mobile menu on link click
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarCollapse.classList.remove('show');
      }
    }
  };

  // Fact Counter Animation
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-value');

    const animateCounter = (counter) => {
      const target = parseInt(counter.textContent);
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    };

    // Use Intersection Observer to animate counters when visible
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return {
    isVisible,
    isSticky,
    scrollToTop,
    closeMobileMenu
  };
}
