import type { Lang } from '../i18n/config';
import type { WorksData, ProjectData, SkillData, SkillAbstract, AchievementsData, MediaItem } from '../types';

// Japanese data
import { works as worksJa, otherWorks as otherWorksJa } from './ja/works';
import { projects as projectsJa } from './ja/projects';
import { skills as skillsJa, skillAbstract as skillAbstractJa } from './ja/skills';
import { certs as certsJa, awards as awardsJa } from './ja/achievements';
import { articles as articlesJa, type ArticleData } from './ja/articles';
import { mediaItems as mediaItemsJa } from './ja/media';

// English data
import { works as worksEn, otherWorks as otherWorksEn } from './en/works';
import { projects as projectsEn } from './en/projects';
import { skills as skillsEn, skillAbstract as skillAbstractEn } from './en/skills';
import { certs as certsEn, awards as awardsEn } from './en/achievements';
import { articles as articlesEn } from './en/articles';
import { mediaItems as mediaItemsEn } from './en/media';

const dataMap = {
  ja: {
    works: worksJa,
    otherWorks: otherWorksJa,
    projects: projectsJa,
    skills: skillsJa,
    skillAbstract: skillAbstractJa,
    certs: certsJa,
    awards: awardsJa,
    articles: articlesJa,
    mediaItems: mediaItemsJa,
  },
  en: {
    works: worksEn,
    otherWorks: otherWorksEn,
    projects: projectsEn,
    skills: skillsEn,
    skillAbstract: skillAbstractEn,
    certs: certsEn,
    awards: awardsEn,
    articles: articlesEn,
    mediaItems: mediaItemsEn,
  },
} as const;

export function getWorksData(lang: Lang): { works: WorksData[]; otherWorks: WorksData[] } {
  return {
    works: dataMap[lang].works,
    otherWorks: dataMap[lang].otherWorks,
  };
}

export function getProjectsData(lang: Lang): ProjectData[] {
  return dataMap[lang].projects;
}

export function getSkillsData(lang: Lang): { skills: SkillData[]; skillAbstract: SkillAbstract[] } {
  return {
    skills: dataMap[lang].skills,
    skillAbstract: dataMap[lang].skillAbstract,
  };
}

export function getAchievementsData(lang: Lang): { certs: AchievementsData[]; awards: AchievementsData[] } {
  return {
    certs: dataMap[lang].certs,
    awards: dataMap[lang].awards,
  };
}

export function getArticlesData(lang: Lang): ArticleData[] {
  return dataMap[lang].articles;
}

export function getMediaData(lang: Lang): MediaItem[] {
  return dataMap[lang].mediaItems;
}

export type { ArticleData };
