/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CONTACT_EMAIL } from '../constants';

interface HeroProps {
  onScrollToWork: () => void;
}

const PRODUCT_DECISION_CARDS = [
  {
    header: '01 · COMMERCE CONTEXT',
    title: 'Adapting to Real User Habit',
    description:
      'On The Vanaspati Co., forcing a conventional cart checkout would have failed wholesale nurseries who trade on relationships. Replacing it with direct WhatsApp dispatch and structured indent uploads aligned with actual trading behavior.',
  },
  {
    header: '02 · WELLNESS CONTEXT',
    title: 'Intentional Subtraction',
    description:
      'For nook sanctuary, high-engagement patterns like notifications and streaks actively contradicted user recovery. Cutting cloud tracking and gamification proved that zero-noise, local-first utility drove sustained retention.',
  },
  {
    header: '03 · ENGINEERING CONTEXT',
    title: 'Performance Over Overhead',
    description:
      'Choosing edge deployment, client-side SQLite persistence, and minimal asset weight. Every technical layer is audited so users on low-bandwidth networks experience instant load times and zero layout shifts.',
  },
  {
    header: '04 · COLLABORATION CONTEXT',
    title: 'Direct Execution over Bloat',
    description:
      'Working asynchronously with founders to eliminate alignment theatre. Shipping production-ready code directly to live URLs within days, validating interfaces against actual usage rather than speculative slide decks.',
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#232c37] bg-[#0e1116] mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8c4bc]/70" />
              <span className="font-mono text-[11px] text-[#94a3b8] tracking-wide">
                Available for select turnkey client builds · Asynchronous workflow preferred
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#e6e2da] mb-5">
              Samriddhi Dutta
            </h1>

            {/* Editorial Monograph Copy */}
            <div className="space-y-3.5 mb-7">
              <p className="font-serif italic text-sm sm:text-[15px] text-[#c8c4bc] leading-[1.75]">
                Samriddhi Dutta is an independent product builder working at the intersection of cognitive psychology, intentional UI architecture, and clean web engineering.
              </p>
              <p className="font-serif italic text-sm sm:text-[15px] text-[#c8c4bc] leading-[1.75]">
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

        {/* Full-Width 4-Card Context-Driven Decisions Row */}
        <div id="standards" className="mt-12 lg:mt-14 w-full">
          <div className="font-mono text-[10px] sm:text-xs tracking-wider text-[#7d8b99] uppercase mb-4">
            01–04 · CONTEXT-DRIVEN DECISIONS ACROSS PAST BUILDS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCT_DECISION_CARDS.map((card) => (
              <div
                key={card.header}
                className="bg-[#0b0d11] border border-[#1b2127] rounded-xl p-5 flex flex-col justify-start min-h-[160px] transition-colors duration-200 hover:border-[#2d3742]"
              >
                <div className="font-mono text-[10px] sm:text-xs tracking-wider text-[#7d8b99] uppercase">
                  {card.header}
                </div>
                <h3 className="font-serif text-base sm:text-lg text-[#f3f0e8] mt-2 mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#8b99a8] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
