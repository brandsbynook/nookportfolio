/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../constants';
import EditorialImage from './EditorialImage';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

export const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="monographs" className="py-20 md:py-28 max-w-[1440px] mx-auto px-6 md:px-12 border-b border-[#E8E4DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E4DC] mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] uppercase tracking-wider mb-2">
            <span>Critical Writings</span>
            <span aria-hidden="true">·</span>
            <span>Theory &amp; Craft</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#171717] tracking-tight">
            Monographs &amp; Studio Essays
          </h2>
        </div>
        <p className="text-sm text-[#524E48] max-w-md font-sans">
          Reflections on neuro-aesthetics, tactile resistance, Japanese spatial philosophy, and cinematography in exhibition design.
        </p>
      </div>

      {/* Grid of Essays */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => onArticleClick(article)}
            className="group cursor-pointer flex flex-col bg-[#F8F7F4] border border-[#E5E0D8] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#CCC7BC] hover:shadow-md"
          >
            {/* Visual Header */}
            <div className="overflow-hidden">
              <EditorialImage
                src={article.image}
                alt={article.title}
                aspectClass="aspect-[16/10]"
                title={article.title}
                subtitle={article.category}
              />
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] mb-3">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#171717] group-hover:text-[#524E48] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-[#524E48] leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-xs font-mono text-[#171717]">
                <span className="text-[#8C8275]">Essay 0{article.id}</span>
                <span className="group-hover:translate-x-1 transition-transform font-medium">
                  Read Monograph →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Journal;
