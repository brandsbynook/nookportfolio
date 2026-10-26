/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in seconds (default: 0.25)
  distance?: number; // Distance in px (default: 12)
  threshold?: number; // Visibility threshold ratio (default: 0.05)
  rootMargin?: string; // Intersection margin (default: '0px 0px -50px 0px')
  easing?: string; // CSS transition timing (default: cubic-bezier(0.16, 1, 0.3, 1))
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.25,
  distance = 12,
  threshold = 0.05,
  rootMargin = '0px 0px -50px 0px',
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      ref={elementRef}
      className={`will-change-transform ${className}`.trim()}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${distance}px)`,
        transition: `opacity ${duration}s ${easing}, transform ${duration}s ${easing}`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
