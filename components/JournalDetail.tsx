/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../constants';
import EditorialImage from './EditorialImage';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalDetail: React.FC<JournalDetailProps> = ({
  article,
  onBack,
  onSelectArticle,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const currentIndex = JOURNAL_ARTICLES.findIndex(a => a.id === article.id);
  const nextArticle = currentIndex < JOURNAL_ARTICLES.length - 1 ? JOURNAL_ARTICLES[currentIndex + 1] : JOURNAL_ARTICLES[0];

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32 max-w-4xl mx-auto px-6 animate-fade-in-up">
      {/* Top Nav Back */}
      <div className="flex items-center justify-between py-4 border-b border-[#E8E4DC] mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono text-[#524E48] hover:text-[#171717] transition-colors"
        >
          <span>←</span>
          <span>Return to Monographs</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275]">
          <span>Monograph 0{article.id}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#736E65] mb-4">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>By Elena Rostova</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#171717] tracking-tight leading-[1.12] [text-wrap:balance] mb-6">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#524E48] font-sans leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Hero Still */}
      <div className="rounded-lg overflow-hidden border border-[#E0DBD0] shadow-sm mb-12">
        <EditorialImage
          src={article.image}
          alt={article.title}
          aspectClass="aspect-[16/9]"
          title={article.title}
          subtitle={article.category}
        />
      </div>

      {/* Pull Quote (if available) - subtle surface without thick border */}
      {article.pullQuote && (
        <div className="p-8 my-10 bg-[#F0ECE4] rounded-lg border border-[#DDD8CE] text-center">
          <p className="font-serif italic text-xl md:text-2xl text-[#24221F] leading-relaxed">
            &ldquo;{article.pullQuote}&rdquo;
          </p>
          <span className="block mt-3 text-xs font-mono text-[#736E65]">
            — Aura Studio Monograph Archive
          </span>
        </div>
      )}

      {/* Main Prose Content */}
      <div className="prose prose-neutral max-w-none text-base sm:text-lg leading-relaxed text-[#3D3A35] font-sans mb-16">
        {article.content}
      </div>

      {/* Article Footer & Next Monograph */}
      <div className="pt-10 border-t border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#8C8275] block mb-1">Published by</span>
          <span className="font-serif text-base text-[#171717]">Aura Research &amp; Monograph Editions, Zurich</span>
        </div>

        <button
          onClick={() => onSelectArticle(nextArticle)}
          className="p-4 rounded-lg border border-[#DDD8CE] hover:border-[#171717] bg-[#F8F7F4] text-left transition-all max-w-sm"
        >
          <span className="text-[11px] font-mono text-[#8C8275] block mb-1">Next Monograph →</span>
          <span className="font-serif text-sm font-normal text-[#171717] line-clamp-1">
            {nextArticle.title}
          </span>
        </button>
      </div>
    </article>
  );
};

export default JournalDetail;
