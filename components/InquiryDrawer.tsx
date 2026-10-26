/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

const DISCIPLINES_LIST = [
  'Spatial Scenography & Pavilions',
  'Brand Architecture & Typography',
  'Cinema, Movement & Sound Direction',
  'Physical Artifacts & Industrial Sculpture',
  'Full Practice Creative Direction',
];

const TIMELINES = [
  'Immediate / Q3 2026',
  'Autumn / Q4 2026',
  'First Half 2027',
  'Cultural Biennial / Exploratory',
];

const BUDGET_RANGES = [
  '€50,000 – €100,000',
  '€100,000 – €250,000',
  '€250,000 – €500,000+',
  'Institutional Grant / Cultural Commission',
];

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialScope = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    organization: '',
    discipline: DISCIPLINES_LIST[0],
    timeline: TIMELINES[1],
    budgetRange: BUDGET_RANGES[1],
    projectScope: initialScope,
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  useEffect(() => {
    if (initialScope) {
      setFormData(prev => ({ ...prev, projectScope: initialScope }));
    }
  }, [initialScope]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `AURA-INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRef(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      discipline: DISCIPLINES_LIST[0],
      timeline: TIMELINES[1],
      budgetRange: BUDGET_RANGES[1],
      projectScope: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0C0B0A]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-[#F8F7F4] shadow-2xl flex flex-col z-10 animate-fade-in-up border-l border-[#E5E0D8]">
        {/* Drawer Header */}
        <div className="p-6 md:p-8 border-b border-[#E8E4DC] flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#736E65] tracking-wider block mb-1">
              Commission Registry
            </span>
            <h2 className="text-2xl font-serif font-normal text-[#171717]">
              Studio Inquiries &amp; Briefs
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#736E65] hover:text-[#171717] rounded-md transition-colors font-mono text-xs"
            aria-label="Close inquiry drawer"
          >
            [Close ✕]
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-[#524E48] leading-relaxed">
                We accept a strictly limited number of commissions per calendar year. Please outline the parameters of your project below; our partners review all submissions within 48 hours.
              </p>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elena Rostova"
                    className="w-full text-sm font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.com"
                    className="w-full text-sm font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                  Organization / Cultural Patron
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Vitra Design Museum, Sony, Fondation Cartier"
                  className="w-full text-sm font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>

              {/* Discipline */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                  Primary Modality
                </label>
                <select
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                  className="w-full text-sm font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                >
                  {DISCIPLINES_LIST.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline & Budget Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                    Target Timeframe
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full text-xs font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full text-xs font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Scope / Description */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#736E65] mb-2">
                  Project Brief &amp; Curatorial Ambition *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Describe the architectural site, brand challenge, or exhibition premise..."
                  className="w-full text-sm font-sans bg-[#F0ECE4] border border-[#DDD8CE] rounded p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold text-[#F8F7F4] bg-[#171717] rounded hover:bg-[#33312C] transition-all tracking-wider uppercase"
              >
                Transmit Commission Inquiry →
              </button>
            </form>
          ) : (
            /* Submission Confirmation State */
            <div className="py-8 space-y-6 animate-fade-in-up">
              <div className="w-12 h-12 rounded-full bg-[#E8E4DC] flex items-center justify-center text-[#171717] text-xl font-serif">
                ✓
              </div>

              <div>
                <span className="text-xs font-mono text-[#8C8275] block mb-1">
                  Inquiry Dispatched Successfully
                </span>
                <h3 className="text-2xl font-serif text-[#171717]">
                  Thank You, {formData.name}.
                </h3>
              </div>

              <div className="p-6 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE] text-xs font-mono space-y-3">
                <div className="flex justify-between border-b border-[#E0DBD0] pb-2">
                  <span className="text-[#736E65]">Archival Reference:</span>
                  <span className="text-[#171717] font-semibold">{inquiryRef}</span>
                </div>
                <div className="flex justify-between border-b border-[#E0DBD0] pb-2">
                  <span className="text-[#736E65]">Modality:</span>
                  <span className="text-[#171717]">{formData.discipline}</span>
                </div>
                <div className="flex justify-between border-b border-[#E0DBD0] pb-2">
                  <span className="text-[#736E65]">Timeframe:</span>
                  <span className="text-[#171717]">{formData.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736E65]">Partner Response Window:</span>
                  <span className="text-[#171717]">Within 48 Hours</span>
                </div>
              </div>

              <p className="text-sm text-[#524E48] leading-relaxed">
                A confirmation email has been logged to <strong className="text-[#171717]">{formData.email}</strong>. Elena Rostova and the studio partners will review the brief alongside current workshop commitments.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-xs font-mono text-[#171717] border border-[#171717] rounded hover:bg-[#171717] hover:text-[#F8F7F4] transition-colors"
                >
                  Done / Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Contact */}
        <div className="p-6 bg-[#F0ECE4] border-t border-[#E8E4DC] text-xs font-mono text-[#736E65] flex items-center justify-between">
          <span>Zurich · Tokyo · NYC</span>
          <span>direct@aurastudio.design</span>
        </div>
      </div>
    </div>
  );
};

export default InquiryDrawer;
