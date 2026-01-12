export interface ProjectData {
  name: string;
  description: string;
  image: string;
  url: {
    name: string;
    url: string;
  }[];
  tags: string[];
  featured?: boolean;
  category?: 'professional' | 'hobby';
  challenge?: string;
  role?: string;
  architecture?: string;
  outcome?: string;
  detailUrl?: string;
}

export interface DateRange {
  since: Date;
  until?: Date;
}

export interface WorksData {
  companyName: string;
  dateRanges: DateRange[];
  role?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
}

export interface SkillData {
  name: string;
  description: string;
  year: string;
  icon: string;
}

export interface SkillAbstract {
  name: string;
  icon: string;
}

export interface AchievementsData {
  title: string;
  year?: string;
  description?: string;
  url?: string;
  category?: 'relevant' | 'other';
}

export interface OgpData {
  'og:title': string;
  'og:description': string | null;
  'og:url': string;
  'og:image': string | null;
}

export interface MediaOgpData {
  'og:title': string;
  'og:description': string | null;
  'og:url': string;
  'og:image': string | null;
}

export interface MediaItem {
  url: string;
  date: string;
  type: 'interview' | 'article' | 'podcast' | 'video';
  image?: string;
}