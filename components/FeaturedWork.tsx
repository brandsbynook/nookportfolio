/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { PortfolioProject } from '../types';
import ScrollReveal from './ScrollReveal';

const VANASPATI_SLIDES = [
  { src: '/assets/Vanaspati-home.png', label: 'Storefront & Catalog' },
  { src: '/assets/Vanaspati-indent.png', label: 'Indent Document Upload' },
  { src: '/assets/vanaspati-journal.png', label: 'Editorial Field Notes' },
  { src: '/assets/vanaspati-scale.png', label: 'Commercial Infrastructure' },
  { src: '/assets/Vanaspati-transit.png', label: 'Logistics & Transit Routing' },
];

export const FeaturedWork: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopyLink = (project: PortfolioProject) => {
    navigator.clipboard.writeText(project.link);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-20 md:py-28 max-w-[1200px] mx-auto px-6 md:px-10 border-b border-[#1b222c]">
      {/* Keyframe animations for slide-up entrance and seamless infinite marquee */}
      <style>{`
        @keyframes overlaySlideUp {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes vanaspatiMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-vanaspati-marquee {
          animation: vanaspatiMarquee 75s linear infinite;
        }

        .animate-vanaspati-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header with Scroll Reveal */}
      <ScrollReveal distance={12} duration={0.25} threshold={0.05} rootMargin="0px 0px -50px 0px">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1b222c] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7d8b99] uppercase tracking-wider mb-2">
              <span>Shipped Work</span>
              <span aria-hidden="true">·</span>
              <span>Live Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#e6e2da] tracking-tight">
              Featured Projects &amp; Applications
            </h2>
          </div>
          <p className="text-sm text-[#7d8b99] max-w-md font-sans">
            Production applications and commercial platforms built with sensory-conscious aesthetics, high performance, and zero noise.
          </p>
        </div>
      </ScrollReveal>

      {/* Projects Grid: 3 Clean Structured Cards with Snappy Scroll-Reveal */}
      <div className="space-y-8">
        {FEATURED_PROJECTS.map((project, idx) => {
          const isExpanded = expandedId === project.id;
          const isCopied = copiedId === project.id;
          const isVanaspati = project.id === 'vanaspati-co';
          const isGames = project.id === 'nook-games';
          const isSanctuary = project.id === 'nook-sanctuary';

          return (
            <ScrollReveal
              key={project.id}
              distance={12}
              duration={0.25}
              threshold={0.05}
              rootMargin="0px 0px -50px 0px"
              delay={0}
              className="will-change-transform"
            >
              {isVanaspati ? (
                /* Card 01: The Vanaspati Co. - Expanded 5-Asset Filmstrip + Compact Static Text Base */
                <div
                  className="relative bg-[#0b0d11] border border-[#1b2127] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#2d3742] hover:shadow-xl will-change-transform"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Top Showcase Gallery Container: Expanded Height */}
                  <div className="relative h-[380px] lg:h-[420px] w-full overflow-hidden bg-[#07090c] p-5 flex items-center border-b border-[#1b2127] group">
                    {/* Subtle edge gradient vignette fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#07090c] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#07090c] to-transparent z-10 pointer-events-none" />

                    {/* Continuous horizontal marquee track with all 5 assets */}
                    <div
                      className="flex gap-4 h-full items-center shrink-0 animate-vanaspati-marquee group-hover:[animation-play-state:paused]"
                      style={{ animationDuration: '75s' }}
                    >
                      {[...VANASPATI_SLIDES, ...VANASPATI_SLIDES].map((slide, sIdx) => (
                        <div
                          key={sIdx}
                          className="h-full aspect-[16/9] shrink-0 rounded-lg overflow-hidden border border-[#1f2730] bg-[#0c0e12] flex items-center justify-center"
                        >
                          <img
                            src={slide.src}
                            alt={slide.label}
                            className="w-full h-full object-contain block"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section: Compact Static Details Base */}
                  <div className="px-8 py-5 lg:px-10 lg:py-6 space-y-4">
                    <div className="space-y-2.5">
                      {/* Tag */}
                      <div className="text-xs font-mono text-[#7d8b99]">
                        01 · B2B Web Platform · Live · vanaspati-co.vercel.app
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#F8F7F4] tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#C2C8D0] leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Feature pills */}
                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono text-[#A0AEC0] bg-[#141920]/80 backdrop-blur-sm px-3 py-1 rounded border border-[#212a33]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action row */}
                    <div className="pt-1 flex flex-wrap items-center gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#0b0d11] bg-[#F8F7F4] hover:bg-white rounded transition-colors duration-200 tracking-wider uppercase cursor-pointer"
                      >
                        <span>VISIT LIVE PLATFORM ↗</span>
                      </a>

                      <button
                        onClick={() => handleCopyLink(project)}
                        className="inline-flex items-center justify-center py-3 px-4 text-xs font-mono text-[#A0AEC0] hover:text-[#F8F7F4] bg-[#141920]/80 hover:bg-[#1b2127] rounded border border-[#212a33] transition-colors duration-200 cursor-pointer"
                      >
                        {isCopied ? 'Link Copied' : 'Copy Direct URL'}
                      </button>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[11px] font-mono text-[#7d8b99] hover:text-[#F8F7F4] hover:underline transition-colors duration-200 cursor-pointer py-2 px-1"
                      >
                        {isExpanded ? 'Hide Architecture Notes ↑' : 'View Architecture Notes ↓'}
                      </button>
                    </div>

                    {/* Collapsible Architecture Notes */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded bg-[#141920]/90 backdrop-blur-sm border border-[#212a33] text-xs leading-relaxed text-[#A0AEC0] space-y-2 font-sans">
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#7d8b99] uppercase">
                          <span>Technical Architecture Review</span>
                          <span>Ref: {project.id}</span>
                        </div>
                        <p>
                          Built specifically for agricultural wholesale operators. Replaces legacy PDF and phone-call inventory friction with an instantaneous digital indent capture system. Client indent uploads are verified client-side and routed straight to regional WhatsApp dispatch desks with zero friction.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : isGames ? (
                /* Card 02: nook games - Background Image with Left Overlay Text Block */
                <div
                  className="relative overflow-hidden rounded-xl border border-[#1b2127] min-h-[520px] md:min-h-[580px] bg-[#090b0e] transition-all duration-300 hover:border-[#2d3742] hover:shadow-xl will-change-transform"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Full-card background image with left-side dark linear gradient overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/Games-hero-2.jpeg"
                      alt="nook games preview"
                      className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e]/95 via-[#090b0e]/85 to-transparent sm:from-[#090b0e]/90 sm:via-[#090b0e]/75 sm:to-transparent" />
                  </div>

                  {/* Overlay Content Block Positioned on the Left */}
                  <div
                    className="absolute inset-0 flex flex-col justify-center max-w-xl p-8 lg:p-12 z-10 space-y-4 will-change-transform"
                    style={{ animation: 'overlaySlideUp 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards', willChange: 'transform, opacity' }}
                  >
                    {/* Tag */}
                    <div className="text-xs font-mono text-[#7d8b99]">
                      02 · Android Application · Google Play · Google Play Store
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#F8F7F4] tracking-tight">
                      nook games
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#C2C8D0] leading-relaxed">
                      A quiet, ad-free collection of 20 offline logic and strategy puzzles (Chess, Sudoku, Nonogram, Slitherlink, 2048). Designed with an OLED dark palette, zero notifications, and offline-first state persistence.
                    </p>

                    {/* Feature pills */}
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono text-[#A0AEC0] bg-[#141920]/80 backdrop-blur-sm px-3 py-1 rounded border border-[#212a33]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action row */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=app.nook.games"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#0b0d11] bg-[#F8F7F4] hover:bg-white rounded transition-colors duration-200 tracking-wider uppercase cursor-pointer"
                      >
                        <span>OPEN IN GOOGLE PLAY ↗</span>
                      </a>

                      <button
                        onClick={() => handleCopyLink(project)}
                        className="inline-flex items-center justify-center py-3 px-4 text-xs font-mono text-[#A0AEC0] hover:text-[#F8F7F4] bg-[#141920]/80 hover:bg-[#1b2127] rounded border border-[#212a33] transition-colors duration-200 cursor-pointer"
                      >
                        {isCopied ? 'Link Copied' : 'Copy Direct URL'}
                      </button>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[11px] font-mono text-[#7d8b99] hover:text-[#F8F7F4] hover:underline transition-colors duration-200 cursor-pointer py-2 px-1"
                      >
                        {isExpanded ? 'Hide Architecture Notes ↑' : 'View Architecture Notes ↓'}
                      </button>
                    </div>

                    {/* Collapsible Architecture Notes */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded bg-[#141920]/90 backdrop-blur-sm border border-[#212a33] text-xs leading-relaxed text-[#A0AEC0] space-y-2 font-sans">
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#7d8b99] uppercase">
                          <span>Technical Architecture Review</span>
                          <span>Ref: {project.id}</span>
                        </div>
                        <p>
                          Engineered as an anti-dopamine utility. Complete absence of in-app purchases, advertisements, tracking telemetry, and push notifications. Designed with true #000000 OLED background surfaces for minimum battery draw and zero visual overstimulation.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Card 03: nook sanctuary - Background Image with Left Overlay Text Block */
                <div
                  className="relative overflow-hidden rounded-xl border border-[#1b2127] min-h-[520px] md:min-h-[580px] bg-[#090b0e] transition-all duration-300 hover:border-[#2d3742] hover:shadow-xl will-change-transform"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Full-card background image with left-side dark linear gradient overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src="/assets/sanctuary-stone.jpeg"
                      alt="nook sanctuary stone preview"
                      className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e]/95 via-[#090b0e]/85 to-transparent sm:from-[#090b0e]/90 sm:via-[#090b0e]/75 sm:to-transparent" />
                  </div>

                  {/* Overlay Content Block Positioned on the Left */}
                  <div
                    className="absolute inset-0 flex flex-col justify-center max-w-xl p-8 lg:p-12 z-10 space-y-4 will-change-transform"
                    style={{ animation: 'overlaySlideUp 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards', willChange: 'transform, opacity' }}
                  >
                    {/* Tag */}
                    <div className="text-xs font-mono text-[#7d8b99]">
                      03 · Android Application · Sensory Regulation · Google Play
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#F8F7F4] tracking-tight">
                      nook sanctuary
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#C2C8D0] leading-relaxed">
                      A low-stimulation digital companion providing tactile timers, unformatted brain-dumping, and ambient soundscapes engineered for focus and sensory regulation.
                    </p>

                    {/* Feature pills */}
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono text-[#A0AEC0] bg-[#141920]/80 backdrop-blur-sm px-3 py-1 rounded border border-[#212a33]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action row */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=app.vercel.nook_sanctuary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#0b0d11] bg-[#F8F7F4] hover:bg-white rounded transition-colors duration-200 tracking-wider uppercase cursor-pointer"
                      >
                        <span>OPEN IN GOOGLE PLAY ↗</span>
                      </a>

                      <button
                        onClick={() => handleCopyLink(project)}
                        className="inline-flex items-center justify-center py-3 px-4 text-xs font-mono text-[#A0AEC0] hover:text-[#F8F7F4] bg-[#141920]/80 hover:bg-[#1b2127] rounded border border-[#212a33] transition-colors duration-200 cursor-pointer"
                      >
                        {isCopied ? 'Link Copied' : 'Copy Direct URL'}
                      </button>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[11px] font-mono text-[#7d8b99] hover:text-[#F8F7F4] hover:underline transition-colors duration-200 cursor-pointer py-2 px-1"
                      >
                        {isExpanded ? 'Hide Architecture Notes ↑' : 'View Architecture Notes ↓'}
                      </button>
                    </div>

                    {/* Collapsible Architecture Notes */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded bg-[#141920]/90 backdrop-blur-sm border border-[#212a33] text-xs leading-relaxed text-[#A0AEC0] space-y-2 font-sans">
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#7d8b99] uppercase">
                          <span>Technical Architecture Review</span>
                          <span>Ref: {project.id}</span>
                        </div>
                        <p>
                          Rooted in psychology and sensory regulation research. Features tactile haptic timing rhythms, unformatted raw note capturing to prevent executive-dysfunction paralysis, and acoustic loops mixed specifically to eliminate high-frequency tinnitus triggers.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWork;
