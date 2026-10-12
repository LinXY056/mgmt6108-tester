import React from 'react';
import { Article } from '../types';

interface MoreNewsSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const MoreNewsSection: React.FC<MoreNewsSectionProps> = ({
  articles,
  onSelectArticle
}) => {
  const electionStory = articles.find((a) => a.id === 'israeli-election');
  const greatReadStory = articles.find((a) => a.id === 'great-read-tundra');

  return (
    <section className="space-y-4">
      <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#121212] mb-3">
        More News
      </h3>

      {/* Feed Story Item 1: Israeli Election */}
      {electionStory && (
        <article
          onClick={() => onSelectArticle(electionStory)}
          className="flex justify-between items-start gap-3 border-b border-[#f0f0f0] pb-4 cursor-pointer group"
        >
          <div className="flex-1">
            <h4
              className="font-cheltenham text-[17px] leading-[21px] font-bold text-[#121212] mb-1.5 group-hover:text-neutral-600 transition"
              style={{ textWrap: 'balance' }}
            >
              {electionStory.title}
            </h4>
            <p className="font-body-nyt text-[12.5px] leading-[17px] text-[#666] line-clamp-2 mb-2">
              {electionStory.deck}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#727272]">
              <span className="font-bold">{electionStory.readTime}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <svg className="w-3 h-3 fill-current text-gray-500" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0H9v2h2V9zm4 0h-2v2h2V9z" />
                </svg>
                {electionStory.commentsCount || 54}
              </span>
            </div>
          </div>
        </article>
      )}

      {/* Feed Story Item 2: The Great Read Feature */}
      {greatReadStory && (
        <article
          onClick={() => onSelectArticle(greatReadStory)}
          className="border-b border-[#f0f0f0] pb-4 cursor-pointer group"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-[#121212] text-white text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-xs uppercase">
              The Great Read
            </span>
          </div>
          <h4
            className="font-cheltenham text-[18px] leading-[22px] font-bold text-[#121212] mb-1.5 group-hover:text-neutral-600 transition"
            style={{ textWrap: 'balance' }}
          >
            {greatReadStory.title}
          </h4>
          <p className="font-body-nyt text-[13px] leading-[18px] text-[#545454] mb-2">
            {greatReadStory.deck}
          </p>
          <span className="text-[10px] tracking-widest font-bold text-[#727272] uppercase block">
            {greatReadStory.readTime}
          </span>
        </article>
      )}
    </section>
  );
};
