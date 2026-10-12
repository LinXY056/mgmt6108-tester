export interface Article {
  id: string;
  title: string;
  deck: string;
  readTime: string;
  readTimeMinutes: number;
  publishedDate: string;
  location?: string;
  category?: string;
  isLead?: boolean;
  isGreatRead?: boolean;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  photoCredit?: string;
  byline: string;
  authorRole?: string;
  commentsCount?: number;
  paragraphs: string[];
  keyTakeaways?: string[];
  pullQuote?: {
    text: string;
    attribution: string;
  };
  audioDuration?: string;
  section: string;
}

export interface ArticleComment {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  text: string;
  upvotes: number;
  isStaffPick?: boolean;
}

export type ViewMode = 'mobile' | 'responsive';
export type ThemeMode = 'light' | 'sepia' | 'dark';
