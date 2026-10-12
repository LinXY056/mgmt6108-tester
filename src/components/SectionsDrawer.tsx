import React, { useState } from 'react';
import { X, Search, Globe, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { SECTIONS_LIST } from '../data/articles';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
  activeSection: string;
  onSearchQuery: (query: string) => void;
}

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  activeSection,
  onSearchQuery
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentEdition, setCurrentEdition] = useState('International');

  if (!isOpen) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchQuery(searchTerm);
    onClose();
  };

  const filteredSections = SECTIONS_LIST.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <svg aria-label="The New York Times" className="h-5 w-auto fill-current text-[#121212]" viewBox="0 0 450 60">
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
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-600 hover:text-black rounded-sm hover:bg-neutral-200 transition cursor-pointer"
            aria-label="Close sections drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Edition selector */}
        <div className="px-4 py-2.5 bg-neutral-100 border-b border-[#e2e2e2] flex items-center justify-between text-[11px] font-sans-nyt">
          <div className="flex items-center gap-1.5 text-neutral-600">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold">Edition:</span>
          </div>
          <div className="flex items-center gap-2">
            {['International', 'U.S.', 'Español'].map((edition) => (
              <button
                key={edition}
                onClick={() => setCurrentEdition(edition)}
                className={`font-bold transition cursor-pointer ${
                  currentEdition === edition
                    ? 'text-[#121212] underline underline-offset-2'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {edition}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Bar */}
        <form onSubmit={handleSearchSubmit} className="p-3 border-b border-[#e2e2e2]">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search news, topics, authors..."
              className="w-full pl-9 pr-3 py-1.5 text-[12.5px] bg-[#f5f5f5] border border-[#dfdfdf] rounded-sm focus:outline-none focus:border-[#121212] font-sans-nyt"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-2.5 top-2.5" />
          </div>
        </form>

        {/* Navigation Sections */}
        <div className="flex-1 py-2 overflow-y-auto">
          <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            News Sections
          </div>
          <ul className="divide-y divide-neutral-100 font-cheltenham">
            <li key="all">
              <button
                onClick={() => {
                  onSelectSection('all');
                  onClose();
                }}
                className={`w-full px-4 py-2.5 text-left text-[15px] font-bold flex items-center justify-between hover:bg-neutral-50 transition cursor-pointer ${
                  activeSection === 'all' ? 'text-black bg-neutral-100/70 font-black' : 'text-neutral-800'
                }`}
              >
                <span>Today's Top Stories</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </li>
            {filteredSections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => {
                    onSelectSection(sec.id);
                    onClose();
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[15px] font-medium flex items-center justify-between hover:bg-neutral-50 transition cursor-pointer ${
                    activeSection === sec.id ? 'text-black bg-neutral-100/70 font-bold' : 'text-neutral-800'
                  }`}
                >
                  <span>{sec.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-sans-nyt text-neutral-400 font-normal">
                      {sec.count}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-300" />
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Quick Features */}
          <div className="mt-4 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Features & Columns
          </div>
          <div className="p-4 space-y-2 font-sans-nyt text-[12.5px]">
            <div className="p-2.5 bg-neutral-50 rounded-sm border border-neutral-200 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition"
                 onClick={() => { onSelectSection('great-read'); onClose(); }}>
              <div>
                <p className="font-bold text-[#121212]">The Great Read</p>
                <p className="text-[11px] text-neutral-500">Immersive long-form storytelling</p>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </div>

            <div className="p-2.5 bg-neutral-50 rounded-sm border border-neutral-200 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition"
                 onClick={() => { onSelectSection('audio'); onClose(); }}>
              <div>
                <p className="font-bold text-[#121212]">The Daily & Audio</p>
                <p className="text-[11px] text-neutral-500">Daily podcast episodes and narrations</p>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-[#e2e2e2] bg-neutral-50 text-[11px] text-neutral-500 font-sans-nyt text-center">
          International Edition · October 12, 2026
        </div>
      </div>
    </div>
  );
};
