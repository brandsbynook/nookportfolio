/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#ECE8E1] pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand & Studio Mission */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-[#F8F7F4]">
              AURA STUDIO
            </h2>
            <p className="text-sm text-neutral-400 font-sans max-w-sm leading-relaxed">
              Multidisciplinary practice exploring the boundary between tactile materiality, architectural restraint, and cinematic storytelling.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="px-5 py-2.5 text-xs font-mono text-[#171717] bg-[#F8F7F4] hover:bg-[#EAE5DC] rounded transition-colors uppercase tracking-wider"
              >
                Inquire Studio Commission ↗
              </button>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              Portfolio Archive
            </span>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href="#works"
                  onClick={(e) => onLinkClick(e, 'works')}
                  className="hover:text-white transition-colors"
                >
                  Selected Works
                </a>
              </li>
              <li>
                <a
                  href="#disciplines"
                  onClick={(e) => onLinkClick(e, 'disciplines')}
                  className="hover:text-white transition-colors"
                >
                  Disciplines &amp; Modalities
                </a>
              </li>
              <li>
                <a
                  href="#monographs"
                  onClick={(e) => onLinkClick(e, 'monographs')}
                  className="hover:text-white transition-colors"
                >
                  Critical Monographs
                </a>
              </li>
              <li>
                <a
                  href="#studio"
                  onClick={(e) => onLinkClick(e, 'studio')}
                  className="hover:text-white transition-colors"
                >
                  The Practice &amp; Team
                </a>
              </li>
              <li>
                <a
                  href="#accolades"
                  onClick={(e) => onLinkClick(e, 'accolades')}
                  className="hover:text-white transition-colors"
                >
                  Awards &amp; Recognition
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Locations & Direct Inquiries */}
          <div className="md:col-span-4 space-y-4 text-xs font-mono">
            <span className="uppercase tracking-wider text-neutral-500 block">
              Permanent Workshops
            </span>

            <div className="space-y-3 text-neutral-300">
              <div>
                <span className="text-neutral-500 block">Zurich Workshop:</span>
                <span className="text-neutral-200">Neugasse 29, 8005 Zürich, Switzerland</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Tokyo Atelier:</span>
                <span className="text-neutral-200">5-7-22 Minami-Aoyama, Minato-ku, Tokyo 107-0062</span>
              </div>
              <div>
                <span className="text-neutral-500 block">New York Project Room:</span>
                <span className="text-neutral-200">74 Franklin St, Tribeca, New York, NY 10013</span>
              </div>
              <div className="pt-2 border-t border-neutral-800">
                <span className="text-neutral-500 block">Direct Inquiries:</span>
                <a href="mailto:direct@aurastudio.design" className="text-white hover:underline">
                  direct@aurastudio.design
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Aura Studio Design Practice. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Zurich · Tokyo · New York</span>
            <button
              onClick={scrollToTop}
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
