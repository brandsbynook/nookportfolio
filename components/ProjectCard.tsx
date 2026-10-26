/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Project } from '../types';
import EditorialImage from './EditorialImage';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onOpenLightbox?: (imageUrl: string, title: string, caption?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onOpenLightbox,
}) => {
  return (
    <div className="group flex flex-col bg-[#F8F7F4] border border-[#E5E0D8] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#CCC7BC] hover:shadow-md">
      {/* Media container */}
      <div className="relative overflow-hidden">
        <EditorialImage
          src={project.imageUrl}
          alt={project.title}
          aspectClass={project.gridSpan === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
          title={project.title}
          subtitle={project.client}
          onClick={() => onSelect(project)}
          showExpandHint={true}
        />

        {/* Quick Lightbox Action Button */}
        {onOpenLightbox && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(project.imageUrl, project.title, `${project.subtitle} (${project.client})`);
            }}
            className="absolute top-3 right-3 p-2 bg-[#171717]/80 hover:bg-[#171717] text-[#F8F7F4] rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-xs"
            title="Inspect media in fullscreen lightbox"
            aria-label="Inspect media"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Zero-Pill Metadata Discipline: Clean unboxed metadata with typographic separators */}
          <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#736E65] mb-3">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          {/* Project Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-xl md:text-2xl font-serif font-normal text-[#171717] hover:text-[#524E48] transition-colors cursor-pointer tracking-tight leading-snug mb-2"
          >
            {project.title}
          </h3>

          {/* Subtitle / Excerpt */}
          <p className="text-sm text-[#524E48] leading-relaxed mb-4 line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Footer Area: Award note or Location + Case Study CTA */}
        <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-xs">
          <span className="font-mono text-[#8C8275] truncate max-w-[200px]">
            {project.award ? project.award.split('·')[0].trim() : project.location}
          </span>

          <button
            onClick={() => onSelect(project)}
            className="font-mono text-[#171717] group-hover:translate-x-0.5 transition-transform font-medium flex items-center gap-1"
          >
            <span>Case Study</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
