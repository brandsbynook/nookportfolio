/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import EditorialImage from './EditorialImage';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
  exif?: {
    medium?: string;
    camera?: string;
    year?: string;
    location?: string;
  };
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  exif,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0B0A]/95 backdrop-blur-md p-4 md:p-8 animate-fade-in-up">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-neutral-800 text-neutral-300">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-white font-medium">{title}</span>
          {exif?.year && (
            <>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">{exif.year}</span>
            </>
          )}
          {exif?.location && (
            <>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">{exif.location}</span>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded transition-colors"
          aria-label="Close lightbox"
        >
          <span>Close</span>
          <span className="text-neutral-500">[ESC]</span>
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center mt-6">
        <div className="w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-lg">
          <EditorialImage
            src={imageUrl}
            alt={caption || title}
            aspectClass="aspect-auto"
            containerClassName="max-h-[72vh] max-w-full"
            className="max-h-[72vh] max-w-full object-contain"
          />
        </div>

        {/* Caption & EXIF metadata bar */}
        <div className="w-full mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
          <p className="font-sans text-neutral-300 max-w-xl">
            {caption || title}
          </p>

          {exif && (
            <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-400 shrink-0">
              {exif.medium && <span>{exif.medium}</span>}
              {exif.camera && (
                <>
                  <span className="text-neutral-700">·</span>
                  <span>{exif.camera}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Chevrons */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-neutral-700 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-neutral-700 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default LightboxModal;
