/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ACCOLADES, STUDIO_TEAM, CLIENT_LOGOS } from '../constants';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  // Real-time world studio clocks
  const [times, setTimes] = useState({
    zurich: '',
    tokyo: '',
    newyork: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        zurich: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
        newyork: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="studio" className="py-20 md:py-28 max-w-[1440px] mx-auto px-6 md:px-12 border-b border-[#E8E4DC]">
      {/* Studio Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] uppercase tracking-wider mb-2">
            <span>The Practice</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2019</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#171717] tracking-tight leading-[1.12]">
            Restraint as a Form of Resistance.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#524E48] leading-relaxed">
          <p>
            Aura was founded in Zurich in 2019 on a solitary thesis: in an era saturated with ephemeral digital clamor and disposable interfaces, true value resides in things that age with slow, tectonic dignity.
          </p>
          <p>
            We operate intentionally as a compact, partner-led studio. Every project—whether an architectural pavilion in Germany, an 18-weight variable typeface in Tokyo, or a 35mm film in Paris—is directed personally from first sketch to final installation by our founding partners.
          </p>
        </div>
      </div>

      {/* World Studio Presences with Live Clocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE]">
          <div className="flex items-center justify-between text-xs font-mono text-[#736E65] mb-4">
            <span>Zurich Studio</span>
            <span className="tabular-nums text-[#171717]">{times.zurich || '11:42'} CET</span>
          </div>
          <h3 className="font-serif text-xl text-[#171717] mb-2">Neugasse 29, Kreis 5</h3>
          <p className="text-xs text-[#524E48] leading-relaxed">
            Primary workshop for material research, acoustic casting, and spatial modeling.
          </p>
        </div>

        <div className="p-6 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE]">
          <div className="flex items-center justify-between text-xs font-mono text-[#736E65] mb-4">
            <span>Tokyo Atelier</span>
            <span className="tabular-nums text-[#171717]">{times.tokyo || '19:42'} JST</span>
          </div>
          <h3 className="font-serif text-xl text-[#171717] mb-2">Minami-Aoyama, Minato-ku</h3>
          <p className="text-xs text-[#524E48] leading-relaxed">
            Typography foundry, book arts curation, and Japanese joinery dialogue.
          </p>
        </div>

        <div className="p-6 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE]">
          <div className="flex items-center justify-between text-xs font-mono text-[#736E65] mb-4">
            <span>New York Project Room</span>
            <span className="tabular-nums text-[#171717]">{times.newyork || '05:42'} EST</span>
          </div>
          <h3 className="font-serif text-xl text-[#171717] mb-2">Franklin Street, Tribeca</h3>
          <p className="text-xs text-[#524E48] leading-relaxed">
            Curatorial commissions, cinema direction, and international brand partnerships.
          </p>
        </div>
      </div>

      {/* Studio Leadership & Partners */}
      <div className="mb-24">
        <div className="pb-4 border-b border-[#E8E4DC] mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-serif font-normal text-[#171717]">
            Founding Partners &amp; Direction
          </h3>
          <span className="text-xs font-mono text-[#736E65]">Partner-Led Practice</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_TEAM.map((member, idx) => (
            <div key={idx} className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E0DBD0] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#8C8275] block mb-1">
                  0{idx + 1} · {member.location}
                </span>
                <h4 className="font-serif text-xl font-normal text-[#171717] mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-[#736E65] mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-[#524E48] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accolades & Recognition Archive */}
      <div id="accolades" className="mb-24">
        <div className="pb-4 border-b border-[#E8E4DC] mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-[#736E65] uppercase tracking-wider block mb-1">
              Peer Recognition
            </span>
            <h3 className="text-2xl font-serif font-normal text-[#171717]">
              Awards &amp; Institutional Distinctions
            </h3>
          </div>
          <span className="text-xs font-mono text-[#736E65] tabular-nums">
            {ACCOLADES.length} Selected Honors
          </span>
        </div>

        <div className="divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
          {ACCOLADES.map((item, idx) => (
            <div key={idx} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline text-xs font-mono">
              <span className="md:col-span-1 text-[#8C8275] tabular-nums">{item.year}</span>
              <span className="md:col-span-4 text-sm font-serif font-medium text-[#171717]">{item.title}</span>
              <span className="md:col-span-3 text-[#524E48]">{item.institution}</span>
              <span className="md:col-span-3 text-[#736E65] italic font-serif text-xs">{item.project}</span>
              <span className="md:col-span-1 text-[#8C8275] text-right hidden md:block">{item.location}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Patrons & Museum Collaborators */}
      <div>
        <span className="text-xs font-mono uppercase text-[#736E65] tracking-wider block mb-6 text-center">
          Selected Patrons &amp; Institutional Collaborators
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 border-y border-[#E8E4DC] text-sm md:text-base font-serif text-[#38352F]">
          {CLIENT_LOGOS.map((client, idx) => (
            <span key={idx} className="hover:text-[#171717] transition-colors">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;