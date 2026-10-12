import React, { useState } from 'react';
import { Article, ArticleComment, ThemeMode } from './types';
import { ARTICLES, INITIAL_COMMENTS } from './data/articles';
import { Header } from './components/Header';
import { LeadArticle } from './components/LeadArticle';
import { SecondaryArticle } from './components/SecondaryArticle';
import { MoreNewsSection } from './components/MoreNewsSection';
import { ArticleView } from './components/ArticleView';
import { SectionsDrawer } from './components/SectionsDrawer';
import { ProfileModal } from './components/ProfileModal';
import { SubscribeModal } from './components/SubscribeModal';
import { PhotoLightbox } from './components/PhotoLightbox';
import { Footer } from './components/Footer';
import { Smartphone, Monitor, Sparkles, Filter, X } from 'lucide-react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['great-read-tundra']);
  const [commentsData, setCommentsData] = useState<Record<string, ArticleComment[]>>(INITIAL_COMMENTS);
  const [activeSection, setActiveSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [isMobileFrameView, setIsMobileFrameView] = useState<boolean>(true);
  const [useWireframeGraphic, setUseWireframeGraphic] = useState<boolean>(false);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    url: string;
    caption: string;
    credit: string;
  }>({
    isOpen: false,
    url: '',
    caption: '',
    credit: ''
  });

  const leadArticle = ARTICLES.find((a) => a.isLead) || ARTICLES[0];
  const secondaryArticle = ARTICLES.find((a) => a.id === 'saudi-ambitions') || ARTICLES[1];

  const handleToggleSave = (articleId: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const handleOpenLightbox = (url: string, caption: string, credit: string) => {
    setLightboxData({
      isOpen: true,
      url,
      caption,
      credit
    });
  };

  const handleAddComment = (
    articleId: string,
    text: string,
    author: string,
    location: string
  ) => {
    const newComment: ArticleComment = {
      id: `user-${Date.now()}`,
      author,
      location,
      timeAgo: 'Just now',
      text,
      upvotes: 0
    };
    setCommentsData((prev) => ({
      ...prev,
      [articleId]: [newComment, ...(prev[articleId] || [])]
    }));
  };

  const handleUpvoteComment = (articleId: string, commentId: string) => {
    setCommentsData((prev) => {
      const list = prev[articleId] || [];
      return {
        ...prev,
        [articleId]: list.map((c) =>
          c.id === commentId ? { ...c, upvotes: c.upvotes + 1 } : c
        )
      };
    });
  };

  // Filter articles based on section or search query
  const filteredArticles = ARTICLES.filter((art) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        art.title.toLowerCase().includes(q) ||
        art.deck.toLowerCase().includes(q) ||
        art.paragraphs.some((p) => p.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (activeSection === 'all') return true;
    if (activeSection === 'world') return art.section === 'World';
    if (activeSection === 'great-read') return art.isGreatRead;
    if (activeSection === 'magazine') return art.section === 'Magazine';
    return true;
  });

  const themeClass =
    themeMode === 'sepia'
      ? 'theme-sepia'
      : themeMode === 'dark'
      ? 'theme-dark'
      : 'bg-white text-[#121212]';

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-[#181818]' : 'bg-[#f4f4f4]'} text-[#121212] font-sans-nyt transition-colors duration-200`}>
      {/* Viewport & Display Control Ribbon */}
      <aside aria-label="Viewer display controls" className="bg-[#121212] text-white px-4 py-1.5 flex flex-wrap items-center justify-between text-[11px] font-sans-nyt border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-neutral-200">The New York Times</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400">Front Page Reader</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Wireframe vs Editorial Photo Switcher */}
          <button
            onClick={() => setUseWireframeGraphic(!useWireframeGraphic)}
            className="flex items-center gap-1 text-neutral-300 hover:text-white transition cursor-pointer"
            title="Toggle between documentary photo and HTML SVG placeholder"
          >
            <span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
              {useWireframeGraphic ? 'Wireframe Mode' : 'Photojournalism Mode'}
            </span>
          </button>

          {/* Viewport Width Switcher */}
          <div className="flex items-center gap-1 bg-neutral-800 p-0.5 rounded border border-neutral-700">
            <button
              onClick={() => setIsMobileFrameView(true)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium transition cursor-pointer ${
                isMobileFrameView ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
              }`}
              title="Mobile Device View (430px) as seen in mockup"
            >
              <Smartphone className="w-3 h-3" />
              <span>Mobile Frame</span>
            </button>
            <button
              onClick={() => setIsMobileFrameView(false)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium transition cursor-pointer ${
                !isMobileFrameView ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
              }`}
              title="Full Responsive View"
            >
              <Monitor className="w-3 h-3" />
              <span>Full View</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div
        className={`mx-auto min-h-screen transition-all duration-300 ${
          isMobileFrameView
            ? 'max-w-[430px] bg-white border-x border-[#e2e2e2] shadow-xl my-0 sm:my-4'
            : 'max-w-4xl bg-white border-x border-[#e2e2e2] shadow-sm my-0'
        } ${themeClass}`}
      >
        {selectedArticle ? (
          /* Article Detail Screen */
          <ArticleView
            article={selectedArticle}
            comments={commentsData[selectedArticle.id] || []}
            isSaved={savedArticleIds.includes(selectedArticle.id)}
            onToggleSave={handleToggleSave}
            onBack={() => setSelectedArticle(null)}
            onSelectArticle={(art) => setSelectedArticle(art)}
            onOpenLightbox={handleOpenLightbox}
            allArticles={ARTICLES}
            onAddComment={handleAddComment}
            onUpvoteComment={handleUpvoteComment}
          />
        ) : (
          /* Front Page Edition (Exact Mockup Match) */
          <>
            <Header
              onOpenMenu={() => setIsMenuOpen(true)}
              onOpenProfile={() => setIsProfileOpen(true)}
              onSubscribeClick={() => setIsSubscribeOpen(true)}
              isSubscribed={isSubscribed}
              savedCount={savedArticleIds.length}
              onViewSaved={() => setIsProfileOpen(true)}
            />

            {/* Filter / Search Query Banner if active */}
            {(activeSection !== 'all' || searchQuery) && (
              <div className="bg-neutral-100 px-4 py-2 border-b border-[#e2e2e2] flex items-center justify-between text-[12px] font-sans-nyt">
                <div className="flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-neutral-500" />
                  <span>
                    Showing:{' '}
                    <strong>
                      {searchQuery ? `"${searchQuery}"` : activeSection.toUpperCase()}
                    </strong>
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveSection('all');
                    setSearchQuery('');
                  }}
                  className="text-neutral-500 hover:text-black flex items-center gap-1 font-bold cursor-pointer"
                >
                  <X className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              </div>
            )}

            <main className="px-4 pt-3">
              {/* Free To Read Header Banner */}
              <div className="text-center pt-2 pb-3.5">
                <p className="text-[14px] text-[#121212] font-sans-nyt">
                  These top stories are <span className="font-bold">free to read.</span>
                </p>
                <div className="w-16 h-[1.5px] bg-[#326891] mx-auto mt-2"></div>
              </div>

              {/* Lead Article Block */}
              {leadArticle && (
                <LeadArticle
                  article={leadArticle}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onOpenLightbox={handleOpenLightbox}
                  useWireframeGraphic={useWireframeGraphic}
                />
              )}

              {/* Hairline Section Separator */}
              <div className="w-full border-t border-[#dfdfdf] my-5"></div>

              {/* Secondary Analysis Article */}
              {secondaryArticle && (
                <SecondaryArticle
                  article={secondaryArticle}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                />
              )}

              {/* Hairline Section Separator */}
              <div className="w-full border-t border-[#dfdfdf] my-5"></div>

              {/* More News Section */}
              <MoreNewsSection
                articles={ARTICLES}
                onSelectArticle={(art) => setSelectedArticle(art)}
              />
            </main>

            {/* Footer */}
            <Footer
              onLegalClick={(title) => {
                // If legal link clicked, can open profile or info
                setIsProfileOpen(true);
              }}
            />
          </>
        )}
      </div>

      {/* Sections Drawer (Hamburger Menu) */}
      <SectionsDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={(secId) => {
          setActiveSection(secId);
          setSelectedArticle(null);
        }}
        activeSection={activeSection}
        onSearchQuery={(query) => {
          setSearchQuery(query);
          setSelectedArticle(null);
        }}
      />

      {/* Profile & Saved Articles Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        savedArticleIds={savedArticleIds}
        allArticles={ARTICLES}
        onSelectArticle={(art) => {
          setSelectedArticle(art);
          setIsProfileOpen(false);
        }}
        onRemoveSaved={handleToggleSave}
        isSubscribed={isSubscribed}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        themeMode={themeMode}
        onThemeChange={(th) => setThemeMode(th)}
      />

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSubscribeConfirm={() => setIsSubscribed(true)}
      />

      {/* Photojournalism Lightbox */}
      <PhotoLightbox
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.url}
        caption={lightboxData.caption}
        credit={lightboxData.credit}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
