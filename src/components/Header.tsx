import React from 'react';
import { Bookmark, Check } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenProfile: () => void;
  onSubscribeClick: () => void;
  isSubscribed: boolean;
  savedCount: number;
  onViewSaved: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenProfile,
  onSubscribeClick,
  isSubscribed,
  savedCount,
  onViewSaved
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e2e2e2]">
      {/* Top Bar: Menu, Masthead, Profile */}
      <div className="flex items-center justify-between px-4 py-2.5">
        {/* Hamburger Menu */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="p-1 -ml-1 text-[#121212] hover:bg-neutral-100 rounded transition focus:outline-none cursor-pointer"
          type="button"
        >
          <svg className="w-6 h-6 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </button>

        {/* NYT Iconic Masthead Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center pt-0.5 cursor-pointer"
          aria-label="The New York Times Home"
        >
          <svg aria-label="The New York Times" className="h-6 w-auto fill-current text-[#121212]" viewBox="0 0 450 60">
            <text
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="44"
              fontWeight="900"
              letterSpacing="-1.5"
              textAnchor="middle"
              x="50%"
              y="45"
            >
              The New York Times
            </text>
          </svg>
        </a>

        {/* Actions: Saved Articles & User Profile */}
        <div className="flex items-center gap-1 -mr-1">
          {savedCount > 0 && (
            <button
              onClick={onViewSaved}
              aria-label={`View ${savedCount} saved articles`}
              className="p-1 text-[#121212] hover:bg-neutral-100 rounded transition relative cursor-pointer"
              title={`${savedCount} saved articles`}
            >
              <Bookmark className="w-5 h-5 fill-current text-[#121212]" />
              <span className="absolute -top-0.5 -right-0.5 bg-[#121212] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {savedCount}
              </span>
            </button>
          )}

          <button
            onClick={onOpenProfile}
            aria-label="User Account"
            className="p-1 text-[#121212] hover:bg-neutral-100 rounded transition focus:outline-none cursor-pointer"
            type="button"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM4 19.5C4 15.9101 7.58172 13 12 13C16.4183 13 20 15.9101 20 19.5V20H4V19.5Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Date and Subscribe Subheader */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-[#f0f0f0]">
        {/* Current Edition Date */}
        <time className="text-[11.5px] font-semibold text-[#121212] tracking-tight">
          Monday, October 12, 2026
        </time>

        {/* Subscription Call to Action */}
        {isSubscribed ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10.5px] font-bold tracking-tight text-neutral-800 bg-neutral-100 rounded-sm">
            <Check className="w-3 h-3 text-neutral-800 stroke-[3]" />
            Subscriber Edition
          </span>
        ) : (
          <button
            onClick={onSubscribeClick}
            className="px-2.5 py-1 text-[11px] font-bold tracking-tight text-[#121212] border border-[#121212] rounded-sm hover:bg-black hover:text-white transition duration-150 cursor-pointer"
          >
            Subscribe for $1/week
          </button>
        )}
      </div>
    </header>
  );
};
