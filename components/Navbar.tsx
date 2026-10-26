/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CONTACT_EMAIL } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b0e]/95 backdrop-blur-md border-b border-[#1b222c] py-3.5'
          : 'bg-[#090b0e] border-b border-[#1b222c] py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Solo Builder Identity & Sub-tag */}
        <a
          href="#top"
          onClick={(e) => onNavClick(e, 'top')}
          className="flex flex-col hover:opacity-85 transition-opacity shrink-0"
        >
          <span className="font-serif text-lg tracking-tight text-[#e6e2da] leading-tight">
            Samriddhi Dutta
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7d8b99] mt-0.5">
            INDEPENDENT PRODUCT BUILDER &amp; INTERFACE DESIGNER
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#7d8b99]">
          <a
            href="#work"
            onClick={(e) => onNavClick(e, 'work')}
            className="hover:text-[#e6e2da] transition-colors whitespace-nowrap shrink-0"
          >
            Work
          </a>
          <a
            href="#standards"
            onClick={(e) => onNavClick(e, 'standards')}
            className="hover:text-[#e6e2da] transition-colors whitespace-nowrap shrink-0"
          >
            Standards
          </a>
          <a
            href="#approach"
            onClick={(e) => onNavClick(e, 'approach')}
            className="hover:text-[#e6e2da] transition-colors whitespace-nowrap shrink-0"
          >
            Approach
          </a>
          <a
            href="#contact"
            onClick={(e) => onNavClick(e, 'contact')}
            className="hover:text-[#e6e2da] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Contact / Action Pill */}
        <div className="flex items-center rounded overflow-hidden bg-[#141a22] border border-[#232c37] text-[#e6e2da] shrink-0">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="px-3.5 py-2 text-xs font-mono font-medium hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="px-3 py-2 text-xs font-mono bg-[#1c2430] border-l border-[#232c37] text-[#7d8b99] hover:text-[#e6e2da] transition-colors duration-200 cursor-pointer"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
