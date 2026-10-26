/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  BUILDER_NAME,
  BUILDER_TITLE,
  AVAILABILITY_STATUS,
  CORE_STATEMENT,
  EDUCATION_TEXT,
  EXPERIENCE_TEXT,
  WORKFLOW_PIPELINE,
  CONTACT_EMAIL,
} from '../constants';

interface HeroProps {
  onScrollToWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToWork }) => {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1b222c]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Availability Status Pill - subtle slow fade */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141a22] border border-[#232c37] text-xs font-mono text-[#7d8b99] mb-8 opacity-0 animate-fade-in-up animate-delay-100">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[#e6e2da]">{AVAILABILITY_STATUS}</span>
        </div>

        {/* Builder Identifier & Tag */}
        <div className="mb-4 opacity-0 animate-fade-in-up animate-delay-200">
          <h2 className="text-sm md:text-base font-mono uppercase tracking-wider text-[#7d8b99]">
            {BUILDER_NAME} · {BUILDER_TITLE}
          </h2>
        </div>

        {/* Core Statement: Oversized Editorial Typographic Impact */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-normal text-[#e6e2da] tracking-tight leading-[1.14] [text-wrap:balance] max-w-4xl mb-8 opacity-0 animate-editorial-slow animate-delay-350">
          Designing and deploying <br className="hidden sm:inline" />fast, minimalist business websites and mobile applications.
        </h1>

        {/* Three-Column Context Cards: Education, Experience & AI Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#1b222c] mb-10">
          {/* Education */}
          <div className="p-5 bg-[#0b0d11] rounded-lg border border-[#1b2127] opacity-0 animate-fade-in-up animate-delay-350 transition-all duration-200 hover:border-[#2d3742] hover:shadow-lg">
            <span className="text-[11px] font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Academic Background
            </span>
            <p className="font-serif text-lg text-[#e6e2da] mb-1">
              {EDUCATION_TEXT}
            </p>
            <p className="text-xs text-[#7d8b99] leading-relaxed">
              Informing sensory-conscious digital architecture, low cognitive friction, and intentional user attention.
            </p>
          </div>

          {/* Experience */}
          <div className="p-5 bg-[#0b0d11] rounded-lg border border-[#1b2127] opacity-0 animate-fade-in-up animate-delay-500 transition-all duration-200 hover:border-[#2d3742] hover:shadow-lg">
            <span className="text-[11px] font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Shipped Track Record
            </span>
            <p className="font-serif text-lg text-[#e6e2da] mb-1">
              {EXPERIENCE_TEXT}
            </p>
            <p className="text-xs text-[#7d8b99] leading-relaxed">
              Tested in live production on the Google Play Store, Vercel Edge networks, and high-intensity hackathons.
            </p>
          </div>

          {/* Workflow Pipeline */}
          <div className="p-5 bg-[#0b0d11] rounded-lg border border-[#1b2127] opacity-0 animate-fade-in-up animate-delay-650 transition-all duration-200 hover:border-[#2d3742] hover:shadow-lg">
            <span className="text-[11px] font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Work Methodology
            </span>
            <p className="text-xs sm:text-sm text-[#e6e2da] leading-relaxed mb-1 font-sans">
              {WORKFLOW_PIPELINE}
            </p>
            <p className="text-xs text-[#7d8b99] font-mono">
              Research → Synthesis → Clean Build
            </p>
          </div>
        </div>

        {/* Primary Call to Action */}
        <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animate-delay-650">
          <button
            onClick={onScrollToWork}
            className="px-6 py-3 text-xs font-mono font-medium uppercase tracking-wider text-[#090b0e] bg-[#e6e2da] hover:bg-white rounded transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>View Featured Work</span>
            <span>↓</span>
          </button>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Project%20Scope%20Inquiry%20%E2%80%94%20Turnkey%20Build`}
            className="px-6 py-3 text-xs font-mono font-medium uppercase tracking-wider text-[#e6e2da] bg-[#141a22] hover:bg-[#1c2430] border border-[#232c37] hover:border-[#384656] hover:text-white rounded transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Initiate Project via Email</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
