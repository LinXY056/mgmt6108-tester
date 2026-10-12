import React, { useState, useEffect } from 'react';
import { Article, ArticleComment, ThemeMode } from '../types';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  MessageSquare, 
  ThumbsUp, 
  Check, 
  Type, 
  Maximize2 
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  comments: ArticleComment[];
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onOpenLightbox: (imageUrl: string, caption: string, credit: string) => void;
  allArticles: Article[];
  onAddComment: (articleId: string, text: string, author: string, location: string) => void;
  onUpvoteComment: (articleId: string, commentId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  comments,
  isSaved,
  onToggleSave,
  onBack,
  onSelectArticle,
  onOpenLightbox,
  allArticles,
  onAddComment,
  onUpvoteComment
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(15);
  const [audioPlaybackRate, setAudioPlaybackRate] = useState<number>(1);
  const [fontSizeIndex, setFontSizeIndex] = useState<number>(1); // 0: sm, 1: base, 2: lg
  const [commentFilter, setCommentFilter] = useState<'all' | 'staff'>('all');
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Simulated audio progress timer when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 800 / audioPlaybackRate);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioPlaybackRate]);

  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    onAddComment(
      article.id,
      newCommentText.trim(),
      newCommentAuthor.trim() || 'Reader in New York',
      'United States'
    );
    setNewCommentText('');
    setShowCommentForm(false);
  };

  const filteredComments = commentFilter === 'staff' 
    ? comments.filter((c) => c.isStaffPick)
    : comments;

  const fontSizes = [
    { label: 'A-', body: 'text-[14px] leading-[22px]' },
    { label: 'A', body: 'text-[16px] leading-[26px]' },
    { label: 'A+', body: 'text-[18px] leading-[30px]' }
  ];

  const relatedArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Reader Action Bar */}
      <nav aria-label="Article controls" className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#e2e2e2] px-4 py-2 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[12px] font-semibold text-[#121212] hover:text-neutral-600 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Front Page</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Audio Listen Button */}
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-sm transition cursor-pointer ${
              isPlayingAudio ? 'bg-[#121212] text-white' : 'bg-neutral-100 text-[#121212] hover:bg-neutral-200'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isPlayingAudio ? 'Playing' : 'Listen'}</span>
            <span className="hidden sm:inline text-neutral-400 font-normal">({article.audioDuration || '4:12'})</span>
          </button>

          {/* Text Size Control */}
          <button
            onClick={() => setFontSizeIndex((prev) => (prev + 1) % 3)}
            title="Adjust text size"
            className="p-1.5 text-[#121212] hover:bg-neutral-100 rounded-sm transition flex items-center gap-0.5 cursor-pointer text-[12px] font-bold"
          >
            <Type className="w-4 h-4" />
            <span className="text-[10px]">{fontSizes[fontSizeIndex].label}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleSave(article.id)}
            title={isSaved ? 'Remove from Saved' : 'Save Article'}
            className="p-1.5 text-[#121212] hover:bg-neutral-100 rounded-sm transition cursor-pointer"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#121212]' : ''}`} />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share article"
            className="p-1.5 text-[#121212] hover:bg-neutral-100 rounded-sm transition cursor-pointer relative"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Share feedback banner */}
      {copiedLink && (
        <div className="bg-[#121212] text-white text-[11px] font-medium py-1.5 text-center transition">
          Article link copied to clipboard.
        </div>
      )}

      {/* Audio narration bar if listening */}
      {isPlayingAudio && (
        <div className="bg-neutral-900 text-white px-4 py-3 border-b border-neutral-800">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-gray-300 font-medium">NYT Audio Narration</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAudioPlaybackRate((prev) => (prev === 1 ? 1.25 : prev === 1.25 ? 1.5 : 1))}
                className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-gray-300 hover:text-white cursor-pointer"
              >
                {audioPlaybackRate}x
              </button>
              <span className="text-gray-400">{article.audioDuration || '4:12'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="p-1.5 bg-white text-black rounded-full hover:bg-gray-200 cursor-pointer"
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="flex-1 bg-neutral-700 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-300"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <main className="px-4 py-6 max-w-prose mx-auto">
        {/* Category kicker */}
        <div className="flex items-center gap-2 mb-2">
          {article.isGreatRead ? (
            <span className="bg-[#121212] text-white text-[9.5px] font-bold tracking-wider px-2 py-0.5 rounded-xs uppercase">
              The Great Read
            </span>
          ) : (
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#727272]">
              {article.category || article.section}
            </span>
          )}
          <span className="text-[#a0a0a0] text-xs">·</span>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#727272]">
            {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-cheltenham text-[28px] sm:text-[34px] leading-[34px] sm:leading-[40px] font-bold text-[#121212] tracking-tight mb-3"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-body-nyt text-[16px] leading-[24px] text-[#545454] font-normal mb-4">
          {article.deck}
        </p>

        {/* Byline and Dateline */}
        <div className="border-y border-[#dfdfdf] py-3 my-4">
          <p className="font-sans-nyt text-[12.5px] font-bold text-[#121212]">
            {article.byline}
          </p>
          {article.authorRole && (
            <p className="font-sans-nyt text-[11px] text-[#727272] mb-1">
              {article.authorRole}
            </p>
          )}
          <time className="font-sans-nyt text-[11px] text-[#727272] block">
            {article.publishedDate}
          </time>
        </div>

        {/* Lead Image & Caption */}
        {article.image && (
          <figure className="my-6">
            <div className="relative group overflow-hidden bg-neutral-900 border border-[#e2e2e2] rounded-[2px]">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-auto object-cover max-h-[460px] cursor-pointer"
                onClick={() =>
                  onOpenLightbox(
                    article.image,
                    article.imageCaption || article.title,
                    article.photoCredit || 'The New York Times'
                  )
                }
              />
              <button
                onClick={() =>
                  onOpenLightbox(
                    article.image,
                    article.imageCaption || article.title,
                    article.photoCredit || 'The New York Times'
                  )
                }
                title="View full resolution photograph"
                className="absolute bottom-2.5 right-2.5 bg-black/70 hover:bg-black text-white p-1.5 rounded-sm transition cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            {article.imageCaption && (
              <figcaption className="mt-2 text-[12px] font-sans-nyt leading-[17px] text-[#545454]">
                {article.imageCaption}{' '}
                {article.photoCredit && (
                  <span className="text-[#888] font-normal">Credit: {article.photoCredit}</span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* Key Takeaways Box if available */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <aside className="my-6 p-4 bg-[#f8f8f8] border-l-2 border-[#121212] rounded-xs">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#121212] mb-2 font-sans-nyt">
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="text-[13.5px] leading-[20px] text-[#333] font-sans-nyt flex items-start gap-2">
                  <span className="text-[#121212] font-bold">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Body Paragraphs */}
        <div className={`space-y-4 ${fontSizes[fontSizeIndex].body} text-[#121212] font-body-nyt`}>
          {article.paragraphs.map((p, idx) => {
            if (idx === 0) {
              return (
                <p key={idx} className="drop-cap">
                  {p}
                </p>
              );
            }

            if (idx === 2 && article.pullQuote) {
              return (
                <React.Fragment key={idx}>
                  <p>{p}</p>
                  <blockquote className="my-6 py-4 border-y border-[#dfdfdf] text-center px-4">
                    <p className="font-cheltenham italic text-[19px] sm:text-[22px] leading-[28px] text-[#121212] mb-2">
                      “{article.pullQuote.text}”
                    </p>
                    <cite className="font-sans-nyt not-italic text-[11px] font-bold uppercase tracking-wider text-[#727272] block">
                      — {article.pullQuote.attribution}
                    </cite>
                  </blockquote>
                </React.Fragment>
              );
            }

            return <p key={idx}>{p}</p>;
          })}
        </div>

        {/* Comments Section */}
        <section className="mt-10 pt-6 border-t border-[#dfdfdf]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#121212]" />
              <h3 className="font-cheltenham text-[20px] font-bold text-[#121212]">
                Comments ({comments.length})
              </h3>
            </div>
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className="text-[11.5px] font-bold tracking-tight px-3 py-1 bg-[#121212] text-white rounded-sm hover:bg-neutral-800 transition cursor-pointer"
            >
              {showCommentForm ? 'Cancel' : 'Add Comment'}
            </button>
          </div>

          {/* Comment submission form */}
          {showCommentForm && (
            <form onSubmit={handleCommentSubmit} className="mb-6 p-3 bg-neutral-50 border border-[#e2e2e2] rounded-sm">
              <p className="text-[12px] font-bold text-[#121212] mb-2 font-sans-nyt">Join the Conversation</p>
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="What are your thoughts on this reporting? (NYT moderation guidelines apply)"
                rows={3}
                required
                className="w-full text-[13px] p-2 bg-white border border-[#ccc] rounded-sm focus:outline-none focus:border-[#121212] mb-2 font-sans-nyt"
              />
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <input
                  type="text"
                  value={newCommentAuthor}
                  onChange={(e) => setNewCommentAuthor(e.target.value)}
                  placeholder="Your Name / Handle"
                  className="text-[12px] p-1.5 bg-white border border-[#ccc] rounded-sm font-sans-nyt w-full sm:w-48"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#121212] text-white text-[11px] font-bold rounded-sm hover:bg-black transition cursor-pointer w-full sm:w-auto"
                >
                  Submit Comment
                </button>
              </div>
            </form>
          )}

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-4 text-[12px] font-sans-nyt border-b border-[#f0f0f0] pb-2">
            <button
              onClick={() => setCommentFilter('all')}
              className={`font-bold transition cursor-pointer ${
                commentFilter === 'all' ? 'text-[#121212] underline underline-offset-4' : 'text-[#727272] hover:text-[#121212]'
              }`}
            >
              All Comments ({comments.length})
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setCommentFilter('staff')}
              className={`font-bold transition cursor-pointer ${
                commentFilter === 'staff' ? 'text-[#121212] underline underline-offset-4' : 'text-[#727272] hover:text-[#121212]'
              }`}
            >
              NYT Staff Picks ({comments.filter((c) => c.isStaffPick).length})
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {filteredComments.map((comment) => (
              <div key={comment.id} className="border-b border-[#f0f0f0] pb-3.5">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#121212]">{comment.author}</span>
                    <span className="text-[#727272]">{comment.location}</span>
                    {comment.isStaffPick && (
                      <span className="bg-[#eef2f6] text-[#2c537d] text-[9px] font-bold px-1.5 py-0.2 rounded-xs">
                        NYT Pick
                      </span>
                    )}
                  </div>
                  <span className="text-[#888]">{comment.timeAgo}</span>
                </div>
                <p className="text-[13px] leading-[19px] text-[#333] font-sans-nyt mb-2">
                  {comment.text}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#727272]">
                  <button
                    onClick={() => onUpvoteComment(article.id, comment.id)}
                    className="flex items-center gap-1 hover:text-[#121212] transition cursor-pointer"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Recommend ({comment.upvotes})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Read Next Section */}
        <section className="mt-12 pt-6 border-t border-[#dfdfdf]">
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#121212] mb-4">
            More Stories To Explore
          </h3>
          <div className="space-y-4">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="flex items-start gap-3 border-b border-[#f0f0f0] pb-3 cursor-pointer group"
              >
                <div className="flex-1">
                  <h4 className="font-cheltenham text-[16px] leading-[20px] font-bold text-[#121212] group-hover:text-neutral-600 transition mb-1">
                    {rel.title}
                  </h4>
                  <p className="font-body-nyt text-[12px] leading-[16px] text-[#666] line-clamp-2 mb-1">
                    {rel.deck}
                  </p>
                  <span className="text-[10px] font-bold text-[#727272] uppercase">
                    {rel.readTime}
                  </span>
                </div>
                {rel.image && (
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-16 h-16 object-cover rounded-xs border border-[#eee]"
                  />
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="text-center mt-8">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-[#121212] text-[12px] font-bold text-[#121212] hover:bg-black hover:text-white transition rounded-sm cursor-pointer"
          >
            Return to Top Stories
          </button>
        </div>
      </main>
    </div>
  );
};
