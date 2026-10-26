/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import EditorialImage from './EditorialImage';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onOpenInquiry: (initialScope?: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption?: string) => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  project,
  onBack,
  onSelectProject,
  onOpenInquiry,
  onOpenLightbox,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find next and previous projects
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32 max-w-[1440px] mx-auto px-6 md:px-12 animate-fade-in-up">
      {/* Top Navigation Bar for Case Study */}
      <div className="flex items-center justify-between py-4 border-b border-[#E8E4DC] mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono text-[#524E48] hover:text-[#171717] transition-colors"
        >
          <span>←</span>
          <span>Return to Portfolio</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-mono text-[#8C8275]">
          <span>Archive Ref: {project.id}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>
      </div>

      {/* Case Study Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-8">
          {/* Unboxed Metadata (Zero-Pill) */}
          <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm font-mono text-[#736E65] mb-4">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#171717] tracking-tight leading-[1.08] [text-wrap:balance] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#524E48] font-sans leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        {/* Project Snapshot Specs */}
        <div className="lg:col-span-4 bg-[#F0ECE4] p-6 rounded-lg border border-[#DDD8CE] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#736E65] tracking-wider block mb-1">Commission Client</span>
              <span className="text-sm font-medium text-[#171717]">{project.client}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-[#736E65] tracking-wider block mb-1">Disciplines</span>
              <div className="text-sm text-[#38352F] space-y-0.5">
                {project.disciplines.map((d, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-[#8C8275]">·</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-[#736E65] tracking-wider block mb-1">Project Duration</span>
              <span className="text-sm text-[#171717]">{project.duration}</span>
            </div>
            {project.award && (
              <div>
                <span className="text-[11px] font-mono uppercase text-[#736E65] tracking-wider block mb-1">Recognition</span>
                <span className="text-xs font-mono text-[#171717] bg-[#E3DDD2] px-2 py-1 rounded inline-block">
                  {project.award}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => onOpenInquiry(`Inquiry inspired by ${project.title} (${project.client})`)}
            className="mt-6 w-full py-2.5 text-xs font-mono text-center text-[#F8F7F4] bg-[#171717] rounded hover:bg-[#33312C] transition-colors uppercase tracking-wider"
          >
            Inquire Commission ↗
          </button>
        </div>
      </div>

      {/* Main Hero Visual Showcase */}
      <div className="relative rounded-lg overflow-hidden border border-[#E0DBD0] shadow-sm mb-16">
        <EditorialImage
          src={project.imageUrl}
          alt={project.title}
          aspectClass="aspect-[16/9]"
          title={project.title}
          subtitle={project.client}
          onClick={() => onOpenLightbox(project.imageUrl, project.title, project.subtitle)}
          showExpandHint={true}
        />
        <div className="p-4 bg-[#F8F7F4] border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#736E65]">
          <span>{project.gallery[0]?.caption || 'Central architectural exhibition view.'}</span>
          <button
            onClick={() => onOpenLightbox(project.imageUrl, project.title, project.subtitle)}
            className="font-mono text-[#171717] hover:underline"
          >
            Full View [↗]
          </button>
        </div>
      </div>

      {/* Quantitative Impact Metric Strip */}
      <div className="mb-20 py-8 border-y border-[#E8E4DC] grid grid-cols-1 md:grid-cols-3 gap-8">
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-serif text-3xl font-normal text-[#171717] tabular-nums tracking-tight">
              {metric.value}
            </span>
            <span className="text-xs font-mono text-[#736E65] mt-1 uppercase tracking-wider">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* The Narrative & Architectural Design Process */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-serif font-normal text-[#171717] mb-4">
              The Curatorial Architecture
            </h2>
            <p className="text-base sm:text-lg text-[#47433E] leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E4DC]">
            <div>
              <h3 className="text-xs font-mono uppercase text-[#736E65] tracking-wider mb-2">The Challenge</h3>
              <p className="text-sm sm:text-base text-[#47433E] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase text-[#736E65] tracking-wider mb-2">The Aura Solution</h3>
              <p className="text-sm sm:text-base text-[#47433E] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Testimonial Callout (Zero thick border; subtle hairline surface) */}
          {project.testimonial && (
            <div className="p-8 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE] my-10">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#24221F] leading-relaxed mb-6">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-xs font-mono text-[#524E48]">
                <span className="font-medium text-[#171717]">{project.testimonial.author}</span>
                <span className="mx-2 text-[#8C8275]">·</span>
                <span>{project.testimonial.role}</span>
                <span className="mx-2 text-[#8C8275]">·</span>
                <span className="text-[#8C8275]">{project.testimonial.organization}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Materiality & Palette Palette */}
        <div className="lg:col-span-4 space-y-8">
          {/* Material Palette */}
          <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E0DBD0]">
            <h3 className="text-xs font-mono uppercase text-[#736E65] tracking-wider mb-4">
              Materiality &amp; Specimen
            </h3>
            <ul className="space-y-3">
              {project.materials.map((mat, i) => (
                <li key={i} className="text-xs font-mono text-[#38352F] flex items-center justify-between py-1.5 border-b border-[#EAE6DF] last:border-0">
                  <span>{mat}</span>
                  <span className="text-[#8C8275]">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Palette Samples */}
          <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E0DBD0]">
            <h3 className="text-xs font-mono uppercase text-[#736E65] tracking-wider mb-4">
              Atmospheric Color Register
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {project.palette.map((color, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 rounded bg-[#EFEBE3]">
                  <div
                    className="w-5 h-5 rounded-sm border border-black/10 shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-medium text-[#171717] truncate">{color.name}</span>
                    <span className="block text-[10px] font-mono text-[#8C8275]">{color.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photographic EXIF Sheet */}
          <div className="p-6 bg-[#F8F7F4] rounded-lg border border-[#E0DBD0] text-xs font-mono text-[#736E65] space-y-2">
            <h3 className="uppercase tracking-wider text-[#171717] mb-3">Documentation EXIF</h3>
            <div className="flex justify-between">
              <span>Medium:</span>
              <span className="text-[#171717]">{project.exifData.medium}</span>
            </div>
            <div className="flex justify-between">
              <span>Camera:</span>
              <span className="text-[#171717]">{project.exifData.camera}</span>
            </div>
            <div className="flex justify-between">
              <span>Location:</span>
              <span className="text-[#171717]">{project.exifData.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-angle Secondary Gallery */}
      {project.gallery.length > 1 && (
        <section className="mb-24">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC] mb-8">
            <h2 className="text-2xl font-serif font-normal text-[#171717]">
              Field Documentation &amp; Artifact Details
            </h2>
            <span className="text-xs font-mono text-[#736E65]">
              {project.gallery.length} Stills Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden border border-[#E5E0D8] bg-[#F8F7F4]">
                <EditorialImage
                  src={item.url}
                  alt={item.caption}
                  aspectClass={item.aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                  title={project.title}
                  subtitle={item.caption}
                  onClick={() => onOpenLightbox(item.url, project.title, item.caption)}
                  showExpandHint={true}
                />
                <div className="p-4 bg-[#F8F7F4] border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#524E48]">
                  <p className="line-clamp-1">{item.caption}</p>
                  <span className="text-xs font-mono text-[#8C8275] shrink-0 ml-4">Plate 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Project Switcher Navigation */}
      <div className="pt-12 border-t border-[#E8E4DC] grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => onSelectProject(prevProject)}
          className="group text-left p-6 rounded-lg border border-[#E0DBD0] hover:border-[#171717] bg-[#F8F7F4] transition-all"
        >
          <span className="text-xs font-mono text-[#8C8275] block mb-1">← Previous Commission</span>
          <span className="font-serif text-lg text-[#171717] group-hover:text-[#524E48] transition-colors block">
            {prevProject.title}
          </span>
          <span className="text-xs text-[#736E65]">{prevProject.client}</span>
        </button>

        <button
          onClick={() => onSelectProject(nextProject)}
          className="group text-right p-6 rounded-lg border border-[#E0DBD0] hover:border-[#171717] bg-[#F8F7F4] transition-all"
        >
          <span className="text-xs font-mono text-[#8C8275] block mb-1">Next Commission →</span>
          <span className="font-serif text-lg text-[#171717] group-hover:text-[#524E48] transition-colors block">
            {nextProject.title}
          </span>
          <span className="text-xs text-[#736E65]">{nextProject.client}</span>
        </button>
      </div>
    </article>
  );
};

export default CaseStudyDetail;
