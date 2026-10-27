/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in seconds (e.g. 0.08) or milliseconds (e.g. 80)
  duration?: number; // Duration in seconds (default: 0.7)
  initialOpacity?: number; // Veiled fog opacity (default: 0.15)
  initialBlur?: number; // Blur in px (default: 8)
  initialBrightness?: number; // Brightness factor (default: 0.8)
  initialScale?: number; // Scale factor before entry (default: 0.995)
  scale?: number; // Scale alias (default: 0.995)
  distance?: number; // Optional vertical offset (default: 0)
  y?: number; // Vertical offset alias (default: 0)
  threshold?: number; // Visibility threshold ratio (default: 0.1)
  amount?: number; // Threshold alias (default: 0.1)
  rootMargin?: string; // Intersection margin (default: '-60px 0px')
  margin?: string; // Margin alias (default: '-60px 0px')
  easing?: string; // CSS transition timing (default: cubic-bezier(0.25, 1, 0.5, 1))
  ease?: string | [number, number, number, number]; // Easing alias
  once?: boolean; // Whether animation only triggers once (default: false for reversible fog dissolve)
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  initialOpacity = 0.15,
  initialBlur = 8,
  initialBrightness = 0.8,
  initialScale = 0.995,
  scale,
  distance = 0,
  y,
  threshold = 0.1,
  amount,
  rootMargin = '-60px 0px',
  margin,
  easing = 'cubic-bezier(0.25, 1, 0.5, 1)',
  ease,
  once = false,
  className = '',
  style = {},
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const resolvedDistance = y ?? distance;
  const resolvedScale = scale ?? initialScale;
  const resolvedThreshold = amount ?? threshold;
  const resolvedRootMargin = margin ?? rootMargin;
  const resolvedEasing = Array.isArray(ease)
    ? `cubic-bezier(${ease.join(', ')})`
    : typeof ease === 'string'
    ? ease
    : easing;

  useEffect(() => {
    // If reduced motion is requested, reveal immediately without animation
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: resolvedThreshold,
        rootMargin: resolvedRootMargin,
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
  }, [once, resolvedThreshold, resolvedRootMargin]);

  // Normalize delay: if passed as milliseconds (> 10), convert to seconds; otherwise use as seconds
  const delaySec = typeof delay === 'number' ? (delay > 10 ? delay / 1000 : delay) : 0;

  return (
    <Component
      ref={elementRef}
      className={className.trim()}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        filter: isVisible
          ? 'blur(0px) brightness(1)'
          : `blur(${initialBlur}px) brightness(${initialBrightness})`,
        transform: isVisible
          ? (resolvedDistance ? 'translateY(0px) scale(1)' : 'scale(1)')
          : (resolvedDistance ? `translateY(${resolvedDistance}px) scale(${resolvedScale})` : `scale(${resolvedScale})`),
        transition: `opacity ${duration}s ${resolvedEasing}, filter ${duration}s ${resolvedEasing}, transform ${duration}s ${resolvedEasing}`,
        transitionDelay: isVisible ? `${delaySec}s` : '0s',
        willChange: 'filter, opacity, transform',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
