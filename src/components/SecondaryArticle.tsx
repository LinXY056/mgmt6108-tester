import React from 'react';
import { Article } from '../types';

interface SecondaryArticleProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
}

export const SecondaryArticle: React.FC<SecondaryArticleProps> = ({
  article,
  onSelectArticle
}) => {
  return (
    <article className="pb-1">
      {/* Topic Label */}
      <span className="text-[11px] font-bold tracking-wider uppercase text-[#727272] block mb-1">
        {article.category || 'Analysis'}
      </span>

      {/* Secondary Headline */}
      <h2
        onClick={() => onSelectArticle(article)}
        className="font-cheltenham text-[20px] leading-[24px] font-bold text-[#121212] tracking-tight mb-2 hover:text-neutral-600 transition cursor-pointer"
        style={{ textWrap: 'balance' }}
      >
        {article.title}
      </h2>

      {/* Secondary Summary */}
      <p
        onClick={() => onSelectArticle(article)}
        className="font-body-nyt text-[13.5px] leading-[19px] text-[#545454] mb-2 cursor-pointer"
      >
        {article.deck}
      </p>

      {/* Read time meta */}
      <span className="text-[10px] tracking-widest font-bold text-[#727272] uppercase block">
        {article.readTime}
      </span>
    </article>
  );
};
