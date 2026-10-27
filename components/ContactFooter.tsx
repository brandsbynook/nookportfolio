/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  CONTACT_EMAIL,
  CONTACT_NOTE,
  AVAILABILITY_STATUS,
} from '../constants';
import ScrollReveal from './ScrollReveal';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#090b0e] text-[#e6e2da] pt-20 pb-12 border-t border-[#1b222c]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Upper Contact Block with Contained Watermark */}
        <ScrollReveal>
          <div className="relative overflow-visible">
            {/* Subtle Studio Emblem Watermark Impression - Contained in upper section */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <img
                src="/assets/nook-icon.png"
                alt=""
                className="w-full h-full object-contain opacity-[0.06] grayscale contrast-125 mix-blend-screen"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)',
                }}
              />
            </div>

            {/* Main Contact Content */}
            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7d8b99]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#e6e2da]">{AVAILABILITY_STATUS}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#e6e2da] tracking-tight leading-tight [text-wrap:balance]">
                Have a project in mind? Let’s build without friction.
              </h2>

              {/* Subtext with natural wider line wrap */}
              <p className="text-sm sm:text-base text-[#7d8b99] font-sans leading-relaxed">
                {CONTACT_NOTE}
              </p>

              {/* Direct Mailto Action & Copy Button with High-Visibility Hover States */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-6 py-3.5 text-xs font-mono font-medium text-[#090b0e] bg-[#e6e2da] hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 rounded transition-all duration-200 uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>{CONTACT_EMAIL}</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] border border-[#232c37] hover:border-[#384656] hover:bg-[#1c2430] rounded bg-[#141a22] transition-all duration-200 cursor-pointer active:scale-[0.99]"
                >
                  {copied ? 'Copied to Clipboard' : 'Copy Email Address'}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Refined Bottom Colophon Utility Bar */}
        <ScrollReveal delay={0.1}>
          <div className="border-t border-[#1b2127] pt-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#637282]">
            <div>
              © 2026 Samriddhi Dutta · Nook Studio &amp; Co.
            </div>

            <div>
              Next.js · Tailwind CSS · Vercel Edge · Zero Tracking
            </div>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="hover:text-[#e6e2da] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top ↑</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default ContactFooter;
