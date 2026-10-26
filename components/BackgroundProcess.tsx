/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  EDUCATION_TEXT,
  EXPERIENCE_TEXT,
  WORKFLOW_PIPELINE,
  BACKGROUND_STATS,
  CONTACT_EMAIL,
} from '../constants';
import ScrollReveal from './ScrollReveal';

export const BackgroundProcess: React.FC = () => {
  const [projectType, setProjectType] = useState('3-5 Page Turnkey Business Site');
  const [timeline, setTimeline] = useState('4–5 Days Turnkey');
  const [notes, setNotes] = useState('');

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Scope Brief: ${projectType}`);
    const body = encodeURIComponent(
      `Hi Nook Studio & Co.,\n\nI am reaching out regarding a ${projectType}.\nTarget Timeline: ${timeline}\n\nProject Scope & Context:\n${notes || '[Please describe your business and site requirements here]'}\n\nThank you!`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="approach" className="py-12 max-w-[1200px] mx-auto px-6 md:px-10 border-b border-[#1b222c]">
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal distance={20} duration={0.6}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1b222c] mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7d8b99] uppercase tracking-wider mb-2">
              <span>Methodology &amp; Background</span>
              <span aria-hidden="true">·</span>
              <span>Disciplined Delivery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#e6e2da] tracking-tight">
              Background &amp; Layered Pipeline
            </h2>
          </div>
          <p className="text-sm text-[#7d8b99] max-w-md font-sans">
            Grounding interface design in human psychology, attention economics, and structured AI acceleration.
          </p>
        </div>
      </ScrollReveal>

      {/* 2-Column Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Left Column: Education & Experience Narrative */}
        <div className="lg:col-span-7 space-y-5">
          {/* Behavioral Foundation */}
          <div className="p-6 lg:p-7 bg-[#0b0d11] rounded-lg border border-[#1b2127]">
            <span className="text-xs font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Behavioral &amp; Cognitive Foundation
            </span>
            <h3 className="text-xl font-serif text-[#e6e2da] mb-3">
              Education: {EDUCATION_TEXT}
            </h3>
            <p className="text-sm sm:text-base text-[#7d8b99] leading-relaxed mb-4">
              Formal studies in sociology and psychology deeply inform every interface decision: how visual hierarchy guides cognitive processing, why sensory overstimulation causes user abandonment, and how to structure content to produce immediate trust and action.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#7d8b99]">
              <span className="px-2.5 py-1 bg-[#141a22] border border-[#232c37] rounded">Cognitive Load Minimization</span>
              <span className="px-2.5 py-1 bg-[#141a22] border border-[#232c37] rounded">Attention Economics</span>
              <span className="px-2.5 py-1 bg-[#141a22] border border-[#232c37] rounded">Sensory Ergonomics</span>
            </div>
          </div>

          {/* Shipped Experience */}
          <div className="p-6 lg:p-7 bg-[#0b0d11] rounded-lg border border-[#1b2127]">
            <span className="text-xs font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Shipped Production Experience
            </span>
            <h3 className="text-xl font-serif text-[#e6e2da] mb-3">
              Experience: {EXPERIENCE_TEXT}
            </h3>
            <p className="text-sm sm:text-base text-[#7d8b99] leading-relaxed mb-4">
              Real-world execution tested across live environments: shipping commercial wholesale platforms to production, publishing standalone logic engines to Google Play, and rapidly testing interface hypotheses under strict 24–48 hour hackathon time limits.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1b2127] text-xs font-mono text-[#7d8b99]">
              <div>
                <span className="text-[#e6e2da] font-semibold block text-sm">2 Live Apps</span>
                <span>Google Play Store (Offline-first)</span>
              </div>
              <div>
                <span className="text-[#e6e2da] font-semibold block text-sm">1 Live Platform</span>
                <span>The Vanaspati Co. (Direct B2B)</span>
              </div>
            </div>
          </div>

          {/* Layered AI Pipeline Explanation */}
          <div className="p-6 lg:p-7 bg-[#0b0d11] rounded-lg border border-[#1b2127]">
            <span className="text-xs font-mono uppercase text-[#7d8b99] tracking-wider block mb-2">
              Workflow Architecture
            </span>
            <h3 className="text-xl font-serif text-[#e6e2da] mb-3">
              The Layered AI-Assisted Work Pipeline
            </h3>
            <p className="text-sm sm:text-base text-[#e6e2da] font-medium leading-relaxed mb-4">
              &ldquo;{WORKFLOW_PIPELINE}&rdquo;
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-[#7d8b99] font-sans">
              <li className="flex items-start gap-3">
                <span className="font-mono text-[#e6e2da] font-semibold">01.</span>
                <span><strong className="text-[#e6e2da]">Deep Research &amp; Scope Comprehension</strong>: Unpacking your domain, customer psychology, and core objective in writing before touching code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-[#e6e2da] font-semibold">02.</span>
                <span><strong className="text-[#e6e2da]">Layered Architectural Synthesis</strong>: Utilizing fine-tuned AI prompts for boilerplate generation, data structuring, and edge-case testing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-[#e6e2da] font-semibold">03.</span>
                <span><strong className="text-[#e6e2da]">Manual Craft &amp; Typography Polish</strong>: Meticulously refining CSS, layout math, accessibility, and offline state persistence by hand.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-[#e6e2da] font-semibold">04.</span>
                <span><strong className="text-[#e6e2da]">Zero-Bloat Edge Deployment</strong>: Delivering a lightweight, static build with instantaneous TTFB and zero telemetry luggage.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Column: Turnkey Scope Initiator Box */}
        <div className="lg:col-span-5 bg-[#0b0d11] p-5 md:p-6 rounded-lg border border-[#1b2127] h-fit self-start">
          <div className="flex items-center justify-between text-xs font-mono text-[#7d8b99] mb-4">
            <span>Quick Scope Builder</span>
            <span>Turnkey</span>
          </div>

          <h3 className="text-2xl font-serif text-[#e6e2da] mb-3">
            Prepare a Scope Brief
          </h3>
          <p className="text-xs text-[#7d8b99] leading-relaxed mb-6 font-sans">
            Select your requirements below to instantly format a clear, structured email inquiry directly to <code className="text-[#e6e2da] font-mono bg-[#141a22] px-1 py-0.5 rounded border border-[#232c37]">{CONTACT_EMAIL}</code>.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#7d8b99] mb-1.5">
                Project Type
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full text-xs font-sans bg-[#141a22] text-[#e6e2da] p-3 rounded border border-[#232c37] focus:outline-none focus:border-[#384656]"
              >
                <option value="3-5 Page Turnkey Business Site">3 to 5 Page Turnkey Business Website (4–5 Days)</option>
                <option value="Offline-First Mobile Application">Offline-First Mobile Application / Companion</option>
                <option value="B2B Wholesale / Direct Routing Platform">B2B Wholesale / Direct Routing Platform</option>
                <option value="Interface Audit & Performance Restructure">Interface Audit &amp; Performance Restructure</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#7d8b99] mb-1.5">
                Target Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full text-xs font-sans bg-[#141a22] text-[#e6e2da] p-3 rounded border border-[#232c37] focus:outline-none focus:border-[#384656]"
              >
                <option value="4–5 Days Turnkey (Standard)">4–5 Days Turnkey (Standard)</option>
                <option value="Within 2 Weeks">Within 2 Weeks</option>
                <option value="Flexible / Asynchronous">Flexible / Asynchronous</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#7d8b99] mb-1.5">
                Brief Context Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Nursery platform, clinic booking, portfolio, or link to your Notion/Google Doc..."
                className="w-full text-xs font-sans bg-[#141a22] text-[#e6e2da] placeholder-[#7d8b99] p-3 rounded border border-[#232c37] focus:outline-none focus:border-[#384656]"
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#1b2127]">
            <a
              href={generateMailto()}
              className="w-full py-3 px-4 text-xs font-mono font-medium text-[#090b0e] bg-[#e6e2da] hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 rounded flex items-center justify-center gap-2 transition-all duration-200 uppercase tracking-wider text-center cursor-pointer"
            >
              <span>Draft Scope Email to Nook Studio &amp; Co.</span>
              <span>↗</span>
            </a>
            <p className="font-mono text-[10px] text-[#637282] mt-2 text-center">
              Responses sent within 24 hours with an initial scope assessment.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Quantitative Metrics with Scroll Reveal */}
      <ScrollReveal distance={20} duration={0.6} delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#1b2127]">
          {BACKGROUND_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl font-normal text-[#e6e2da] tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-mono font-medium text-[#e6e2da] mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#7d8b99] mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BackgroundProcess;
