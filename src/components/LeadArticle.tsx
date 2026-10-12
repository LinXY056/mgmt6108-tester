import React, { useState } from 'react';
import { Article } from '../types';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

interface LeadArticleProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  onOpenLightbox: (imageUrl: string, caption: string, credit: string) => void;
  useWireframeGraphic?: boolean;
}

export const LeadArticle: React.FC<LeadArticleProps> = ({
  article,
  onSelectArticle,
  onOpenLightbox,
  useWireframeGraphic = false
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // If wireframe graphic is explicitly chosen, use the gstatic SVG placeholder from the HTML, else the generated editorial photo
  const imageSource = useWireframeGraphic
    ? 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg'
    : (imageFailed ? 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg' : article.image);

  return (
    <article className="pt-1">
      {/* Lead Headline */}
      <h1
        onClick={() => onSelectArticle(article)}
        className="font-cheltenham text-[27px] leading-[32px] font-bold text-[#121212] tracking-tight mb-2.5 hover:text-neutral-600 transition cursor-pointer"
        style={{ textWrap: 'balance' }}
      >
        {article.title}
      </h1>

      {/* Lead Summary / Deck */}
      <p
        onClick={() => onSelectArticle(article)}
        className="font-body-nyt text-[14.5px] leading-[21px] text-[#545454] font-normal mb-2.5 cursor-pointer"
      >
        {article.deck}
      </p>

      {/* Reading Duration Info */}
      <div className="flex items-center gap-1.5 text-[10px] tracking-widest font-bold text-[#727272] uppercase mb-3.5">
        <span>{article.readTime}</span>
      </div>

      {/* Featured Media Section */}
      <div className="relative w-full overflow-hidden rounded-[2px] bg-neutral-900 border border-[#e2e2e2] group">
        <img
          alt={article.imageAlt || article.title}
          className="w-full h-auto object-cover object-center aspect-[4/5] block cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
          src={imageSource}
          onError={() => setImageFailed(true)}
          referrerPolicy="no-referrer"
          onClick={() => onSelectArticle(article)}
        />

        {/* Location & Date Overlay (Top Left) */}
        <div className="absolute top-3 left-3 text-white pointer-events-none drop-shadow-md">
          <p className="text-[12.5px] font-bold leading-tight font-sans-nyt text-white tracking-normal">
            {article.location || 'Riyadh, Saudi Arabia'}
          </p>
          <p className="text-[11.5px] font-medium text-gray-200">
            Oct. 11
          </p>
        </div>

        {/* NYT Watermark Logo (Top Right) */}
        <div className="absolute top-2.5 right-3 text-white pointer-events-none opacity-90 drop-shadow-md">
          <span className="font-cheltenham text-3xl font-extrabold italic font-serif">
            T
          </span>
        </div>

        {/* Expand / Gallery Icon Overlay (Bottom Right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox(
              article.image,
              article.imageCaption || article.title,
              article.photoCredit || 'The New York Times'
            );
          }}
          aria-label="Expand image"
          className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/90 text-white p-1 rounded-sm backdrop-blur-xs transition cursor-pointer z-10"
          type="button"
          title="Expand image"
        >
          <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Embedded Caption Box */}
        <div
          onClick={() => onSelectArticle(article)}
          className="absolute bottom-3 left-3 right-12 bg-white/95 backdrop-blur-sm p-2.5 shadow-sm rounded-[2px] cursor-pointer hover:bg-white transition"
        >
          <p className="font-sans-nyt text-[12.5px] font-bold leading-[16px] text-[#121212]">
            {article.imageCaption || article.title}
          </p>
        </div>
      </div>
    </article>
  );
};
