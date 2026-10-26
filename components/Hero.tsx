/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CONTACT_EMAIL } from '../constants';

interface HeroProps {
  onScrollToWork: () => void;
}

const OPERATIONAL_STANDARDS_CARDS = [
  {
    header: '01 · STANDARD',
    title: 'Turnkey Delivery',
    description: '3 to 5 page static sites delivered live in 4–5 days for a transparent flat fee.',
  },
  {
    header: '02 · STANDARD',
    title: 'Strictly Asynchronous',
    description: 'Briefs, updates, and reviews handled clearly in writing. Zero unscheduled calls.',
  },
  {
    header: '03 · STANDARD',
    title: 'High Performance',
    description: 'Lightweight edge deployment with instant load times and zero tracking bloat.',
  },
  {
    header: '04 · STANDARD',
    title: 'Cognitive Restraint',
    description: 'Interfaces designed around human focus, calm palettes, and disciplined typography.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onScrollToWork }) => {
  return (
    <section id="top" className="pt-28 pb-12 md:pt-32 md:pb-16 border-b border-[#1b222c]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Top Hero Split: Editorial Monograph Left + Portrait Plate Right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Column: Monograph Typography & Action CTAs */}
          <div className="lg:max-w-[62%] flex flex-col justify-start">
            {/* Monochromatic Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#232c37] bg-[#0e1116] mb-5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8c4bc]/70" />
              <span className="font-mono text-[11px] text-[#94a3b8] tracking-wide">
                Available for select turnkey client builds · Asynchronous workflow preferred
              </span>
            </div>

            {/* Kicker */}
            <h2 className="font-mono text-xs tracking-widest uppercase text-[#7d8b99] mb-3">
              INDEPENDENT PRODUCT BUILDER &amp; INTERFACE DESIGNER · NOOK STUDIO &amp; CO.
            </h2>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#e6e2da] mb-5">
              Samriddhi Dutta
            </h1>

            {/* Editorial Monograph Copy */}
            <div className="space-y-3 mb-6">
              <p className="font-serif italic text-base sm:text-lg text-[#c8c4bc] leading-relaxed">
                Samriddhi Dutta is an independent product builder working at the intersection of cognitive psychology, intentional UI architecture, and clean web engineering.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-[#c8c4bc] leading-relaxed">
                Operating through her independent practice, Nook Studio &amp; Co., she designs and deploys fast, production-ready digital products directly for founders and businesses—bypassing traditional agency bloat, intrusive engagement loops, and unnecessary meetings.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToWork}
                className="bg-[#e6e2da] text-[#090b0e] hover:bg-[#ffffff] px-5 py-2.5 rounded-lg text-xs font-mono font-medium tracking-wide transition-all cursor-pointer"
              >
                VIEW FEATURED WORK ↓
              </button>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20Scope%20Inquiry%20%E2%80%94%20Turnkey%20Build`}
                className="border border-[#232c37] text-[#e6e2da] hover:border-[#384657] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wide transition-all cursor-pointer"
              >
                INITIATE PROJECT VIA EMAIL ↗
              </a>
            </div>
          </div>

          {/* Right Column: Author Portrait Plate */}
          <div className="w-full sm:w-[280px] lg:w-[300px] max-w-[280px] lg:max-w-[300px] shrink-0 self-center lg:self-start">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#1b2127] bg-[#0c0e12] p-1.5 shadow-2xl">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src="/assets/samriddhi.jpg"
                  alt="Samriddhi Dutta"
                  className="w-full h-full object-cover rounded-lg grayscale contrast-[1.08] brightness-[0.88] transition-all duration-500 hover:grayscale-0 hover:brightness-100"
                />
                <div className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_20px_rgba(9,11,14,0.7)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Card Standards Row */}
        <div
          id="standards"
          className="mt-10 lg:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
        >
          {OPERATIONAL_STANDARDS_CARDS.map((card) => (
            <div
              key={card.header}
              className="bg-[#0b0d11] border border-[#1b2127] rounded-xl p-4 flex flex-col justify-start min-h-[140px] transition-colors duration-200 hover:border-[#2d3742]"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#637282]">
                {card.header}
              </div>
              <h3 className="font-serif text-base text-[#e6e2da] mt-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
