import React, { useState } from 'react';
import { X, Bookmark, Clock, Settings, Trash2, ExternalLink, Check, Sun, Moon, Coffee } from 'lucide-react';
import { Article, ThemeMode } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticleIds: string[];
  allArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
  isSubscribed: boolean;
  onOpenSubscribe: () => void;
  themeMode: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  savedArticleIds,
  allArticles,
  onSelectArticle,
  onRemoveSaved,
  isSubscribed,
  onOpenSubscribe,
  themeMode,
  onThemeChange
}) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'settings'>('saved');

  if (!isOpen) return null;

  const savedArticles = allArticles.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-xs shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden border border-[#dfdfdf]">
        {/* Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center font-bold text-sm">
              LX
            </div>
            <div>
              <h3 className="font-cheltenham text-[16px] font-bold text-[#121212] leading-tight">
                Lin Xinyu
              </h3>
              <p className="text-[11px] text-neutral-500 font-sans-nyt">
                {isSubscribed ? 'All Access Digital Subscriber' : 'Standard Reader'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-black rounded hover:bg-neutral-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#e2e2e2] bg-white text-[12px] font-bold font-sans-nyt">
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 py-2.5 text-center transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'saved'
                ? 'border-b-2 border-[#121212] text-[#121212]'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Stories ({savedArticleIds.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-2.5 text-center transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'settings'
                ? 'border-b-2 border-[#121212] text-[#121212]'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Preferences</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto flex-1 font-sans-nyt">
          {activeTab === 'saved' ? (
            <div>
              {savedArticles.length === 0 ? (
                <div className="py-12 text-center text-neutral-500">
                  <Bookmark className="w-10 h-10 mx-auto stroke-1 text-neutral-400 mb-2" />
                  <p className="text-[14px] font-bold text-[#121212]">No saved articles yet</p>
                  <p className="text-[12px] text-neutral-500 mt-1 max-w-xs mx-auto">
                    Tap the bookmark icon on any story to save it to your personal reading list.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedArticles.map((art) => (
                    <div
                      key={art.id}
                      className="p-3 border border-[#e2e2e2] rounded-sm hover:border-[#121212] transition flex justify-between items-start gap-3 bg-neutral-50/50"
                    >
                      <div
                        onClick={() => {
                          onSelectArticle(art);
                          onClose();
                        }}
                        className="flex-1 cursor-pointer"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                          {art.category || art.section} · {art.readTime}
                        </span>
                        <h4 className="font-cheltenham text-[15px] font-bold text-[#121212] leading-snug line-clamp-2">
                          {art.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => onRemoveSaved(art.id)}
                        title="Remove from saved"
                        className="p-1 text-neutral-400 hover:text-red-600 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Subscription Status Card */}
              <div className="p-3.5 bg-neutral-100 rounded-sm border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                    Subscription
                  </span>
                  {isSubscribed ? (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-xs">
                      Active
                    </span>
                  ) : (
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-xs">
                      Limited Access
                    </span>
                  )}
                </div>
                <p className="text-[13px] font-medium text-[#121212] mb-3">
                  {isSubscribed
                    ? 'Unlimited access to News, Audio narrations, Cooking, Games & Wirecutter.'
                    : 'Subscribe today to get full access to international reporting and archives.'}
                </p>
                {!isSubscribed && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSubscribe();
                    }}
                    className="w-full py-1.5 bg-[#121212] text-white text-[11.5px] font-bold rounded-sm hover:bg-neutral-800 transition cursor-pointer"
                  >
                    Subscribe for $1/week
                  </button>
                )}
              </div>

              {/* Reader Theme Palette */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block mb-2">
                  Reading Palette
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onThemeChange('light')}
                    className={`p-2.5 rounded-sm border text-center transition flex flex-col items-center gap-1 cursor-pointer ${
                      themeMode === 'light'
                        ? 'border-[#121212] bg-white ring-1 ring-black'
                        : 'border-[#e2e2e2] bg-neutral-50 hover:bg-white'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span className="text-[11px] font-bold text-[#121212]">Light</span>
                  </button>

                  <button
                    onClick={() => onThemeChange('sepia')}
                    className={`p-2.5 rounded-sm border text-center transition flex flex-col items-center gap-1 cursor-pointer ${
                      themeMode === 'sepia'
                        ? 'border-[#78350f] bg-[#f7f4ee] ring-1 ring-[#78350f]'
                        : 'border-[#e2e2e2] bg-[#fbf9f5] hover:bg-[#f7f4ee]'
                    }`}
                  >
                    <Coffee className="w-4 h-4 text-[#78350f]" />
                    <span className="text-[11px] font-bold text-[#78350f]">Sepia</span>
                  </button>

                  <button
                    onClick={() => onThemeChange('dark')}
                    className={`p-2.5 rounded-sm border text-center transition flex flex-col items-center gap-1 cursor-pointer ${
                      themeMode === 'dark'
                        ? 'border-white bg-[#121212] text-white ring-1 ring-white'
                        : 'border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-neutral-300" />
                    <span className="text-[11px] font-bold">Dark</span>
                  </button>
                </div>
              </div>

              {/* Account details */}
              <div className="text-[11px] text-neutral-500 space-y-1">
                <p>Email: linxinyu09072002@gmail.com</p>
                <p>App Edition: Web Reader 2026.10</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
