/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BUILDER_NAME,
  BUILDER_TITLE,
  CONTACT_EMAIL,
  CONTACT_NOTE,
  GOOGLE_PLAY_DEV_URL,
  AVAILABILITY_STATUS,
} from '../constants';
import ScrollReveal from './ScrollReveal';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#090b0e] text-[#e6e2da] pt-20 pb-12 border-t border-[#1b222c]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Main Contact Section with Scroll Reveal */}
        <ScrollReveal distance={20} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1b222c]">
            {/* Left Column: Heading and Core Note */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7d8b99]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#e6e2da]">{AVAILABILITY_STATUS}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#e6e2da] tracking-tight leading-tight [text-wrap:balance]">
                Have a project in mind? Let’s build without friction.
              </h2>

              {/* Required exact note */}
              <p className="text-sm sm:text-base text-[#7d8b99] font-sans leading-relaxed max-w-xl">
                {CONTACT_NOTE}
              </p>

              {/* Direct Mailto Action & Copy Button with High-Visibility Hover States */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-6 py-3.5 text-xs font-mono font-medium text-[#090b0e] bg-[#e6e2da] hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 rounded transition-all duration-200 uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>{CONTACT_EMAIL}</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] border border-[#232c37] hover:border-[#384656] hover:bg-[#1c2430] rounded bg-[#141a22] transition-all duration-200 cursor-pointer active:scale-[0.99]"
                >
                  {copied ? 'Copied to Clipboard' : 'Copy Email Address'}
                </button>
              </div>
            </div>

            {/* Right Column: Google Play Dev Profile & Links */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-8 bg-[#0b0d11] p-8 rounded-lg border border-[#1b2127] transition-all hover:border-[#2d3742]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#7d8b99] block mb-2">
                  Google Play Presence
                </span>
                <h3 className="font-serif text-xl text-[#e6e2da] mb-2">
                  Android Developer Profile
                </h3>
                <p className="text-xs text-[#7d8b99] leading-relaxed mb-4 font-sans">
                  View all published offline-first applications, logic suites, and sensory regulation tools on Google Play.
                </p>

                {/* Small secondary link to Google Play Developer Profile with visible hover */}
                <a
                  href={GOOGLE_PLAY_DEV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] hover:translate-x-1 underline underline-offset-4 transition-all duration-200 cursor-pointer"
                >
                  <span>Google Play Developer Profile (Nook Studio &amp; Co.)</span>
                  <span>↗</span>
                </a>
              </div>

            <div className="pt-6 border-t border-[#1b2127] text-xs font-mono text-[#7d8b99] space-y-2">
              <div className="flex justify-between">
                <span>Workflow:</span>
                <span className="text-[#e6e2da]">Asynchronous via Email</span>
              </div>
              <div className="flex justify-between">
                <span>Turnaround:</span>
                <span className="text-[#e6e2da]">4–5 Days Turnkey</span>
              </div>
              <div className="flex justify-between">
                <span>Deployment:</span>
                <span className="text-[#e6e2da]">Vercel Edge / Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7d8b99]">
          <div>
            <span className="text-[#e6e2da] font-semibold">{BUILDER_NAME}</span>
            <span className="mx-2">·</span>
            <span>{BUILDER_TITLE}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Sensory-Conscious · High Performance · Zero Noise</span>
            <button
              onClick={scrollToTop}
              className="text-[#7d8b99] hover:text-[#e6e2da] transition-colors flex items-center gap-1 cursor-pointer"
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

export default ContactFooter;
