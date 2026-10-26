/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OPERATIONAL_STANDARDS } from '../constants';
import ScrollReveal from './ScrollReveal';

export const OperationalStandards: React.FC = () => {
  return (
    <section id="standards" className="py-20 md:py-28 max-w-[1200px] mx-auto px-6 md:px-10 border-b border-[#1b222c]">
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal distance={20} duration={0.6}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1b222c] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7d8b99] uppercase tracking-wider mb-2">
              <span>Operating Principles</span>
              <span aria-hidden="true">·</span>
              <span>Client Engagement Rules</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#e6e2da] tracking-tight">
              Operational Standards
            </h2>
          </div>
          <p className="text-sm text-[#7d8b99] max-w-md font-sans">
            A disciplined, predictable framework designed to respect both client timeline and builder focus.
          </p>
        </div>
      </ScrollReveal>

      {/* Clean 4-Item Minimalist Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {OPERATIONAL_STANDARDS.map((std, idx) => (
          <ScrollReveal
            key={std.id}
            distance={20}
            duration={0.6}
            delay={idx * 120} // Staggered delay (0ms, 120ms, 240ms, 360ms)
          >
            <div
              className="p-8 bg-[#0b0d11] rounded-lg border border-[#1b2127] flex flex-col justify-between h-full transition-all duration-300 hover:border-[#2d3742] hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                {/* Number and Rule Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#7d8b99] mb-4">
                  <span className="text-[#e6e2da] font-semibold">0{idx + 1}.</span>
                  <span className="uppercase tracking-wider">Standard</span>
                </div>

                {/* Standard Title */}
                <h3 className="text-2xl font-serif font-normal text-[#e6e2da] mb-3">
                  {std.title}
                </h3>

                {/* Exact Required Standard Copy */}
                <p className="text-base text-[#e6e2da] font-medium leading-relaxed mb-4">
                  {std.description}
                </p>
              </div>

              {/* Context / Subtext */}
              <p className="text-xs text-[#7d8b99] leading-relaxed pt-4 border-t border-[#1b2127] font-sans">
                {std.subtext}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default OperationalStandards;
