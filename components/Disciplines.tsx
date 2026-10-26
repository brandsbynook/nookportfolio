/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DISCIPLINES } from '../constants';

interface DisciplinesProps {
  onOpenInquiry: (disciplineName?: string) => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState(DISCIPLINES[0].id);

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeTab) || DISCIPLINES[0];

  return (
    <section id="disciplines" className="py-20 md:py-28 bg-[#EFEBE3] border-b border-[#E0DBD0]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DDD8CE] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] uppercase tracking-wider mb-2">
              <span>Capabilities &amp; Practice</span>
              <span aria-hidden="true">·</span>
              <span>Methodology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#171717] tracking-tight">
              Disciplines &amp; Creative Modalities
            </h2>
          </div>
          <p className="text-sm text-[#524E48] max-w-md font-sans">
            Every Aura commission is approached from raw physical principles: texture before geometry, acoustics before optics, emotional stillness before novelty.
          </p>
        </div>

        {/* 4-Chapter Tab Selection */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {DISCIPLINES.map((discipline) => {
            const isSelected = discipline.id === activeTab;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveTab(discipline.id)}
                className={`text-left p-6 rounded-lg transition-all border ${
                  isSelected
                    ? 'bg-[#F8F7F4] border-[#171717] shadow-sm'
                    : 'bg-[#F4F0E8] border-[#DDD8CE] hover:border-[#CCC7BC] hover:bg-[#F8F7F4]/60'
                }`}
              >
                <span className="font-mono text-xs text-[#8C8275] block mb-2">
                  Chapter {discipline.number}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#171717] leading-snug mb-1">
                  {discipline.title}
                </h3>
                <p className="text-xs text-[#736E65] line-clamp-1">
                  {discipline.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Detailed Breakdown */}
        <div className="bg-[#F8F7F4] rounded-lg border border-[#DDD8CE] p-8 md:p-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-[#8C8275] uppercase tracking-wider block mb-2">
                Chapter {activeDiscipline.number} · {activeDiscipline.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#171717] mb-6">
                {activeDiscipline.title}
              </h3>
              <p className="text-base text-[#47433E] leading-relaxed mb-8">
                {activeDiscipline.description}
              </p>

              {/* Selected Clients */}
              <div className="pt-6 border-t border-[#E8E4DC]">
                <span className="text-xs font-mono uppercase text-[#736E65] tracking-wider block mb-3">
                  Selected Commission Patrons:
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#24221F]">
                  {activeDiscipline.selectedClients.map((client, idx) => (
                    <span key={idx} className="bg-[#ECE8E1] px-3 py-1.5 rounded text-neutral-800">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverable Pillars */}
            <div className="lg:col-span-5 bg-[#F0ECE4] p-6 rounded-lg border border-[#DDD8CE]">
              <h4 className="text-xs font-mono uppercase text-[#736E65] tracking-wider mb-4">
                Core Deliverable Pillars
              </h4>
              <ul className="space-y-3 mb-8">
                {activeDiscipline.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#38352F]">
                    <span className="text-[#8C8275] font-mono mt-0.5">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenInquiry(`Inquiry regarding ${activeDiscipline.title}`)}
                className="w-full py-2.5 text-xs font-mono uppercase text-center text-[#F8F7F4] bg-[#171717] rounded hover:bg-[#33312C] transition-colors"
              >
                Inquire This Discipline ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
