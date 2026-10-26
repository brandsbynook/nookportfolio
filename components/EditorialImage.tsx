/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectClass?: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  showExpandHint?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectClass = 'aspect-[4/3]',
  title,
  subtitle,
  onClick,
  showExpandHint = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-[#ECE8E1] transition-all group ${aspectClass} ${containerClassName} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#ECE8E1] animate-pulse" />
          )}
        </>
      ) : (
        /* Zero-Broken-Image Policy Fallback: Architectural Monograph Canvas */
        <div className="absolute inset-0 w-full h-full bg-[#E5E0D8] p-6 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between text-xs text-[#736E65] font-mono uppercase tracking-wider">
            <span>Aura Archive</span>
            <span>Ref. 08</span>
          </div>

          <div className="my-auto text-center px-4">
            <svg 
              className="w-8 h-8 mx-auto mb-3 text-[#948D80] stroke-current" 
              viewBox="0 0 24 24" 
              fill="none" 
              strokeWidth="1.2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p className="font-serif italic text-base text-[#38352F] tracking-wide">
              {title || alt || 'Monograph Exhibition Visual'}
            </p>
            {subtitle && (
              <p className="text-xs text-[#736E65] mt-1 font-sans">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#857F75] font-mono">
            <span>Spatial Scenography</span>
            <span>Studio Aura</span>
          </div>
        </div>
      )}

      {/* Subtle overlay hover hint for clickable gallery media */}
      {showExpandHint && onClick && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-[#171717]/80 text-[#F8F7F4] text-xs font-mono px-3 py-1.5 rounded backdrop-blur-sm tracking-wider">
            Expand Still ↗
          </span>
        </div>
      )}
    </div>
  );
};

export default EditorialImage;
