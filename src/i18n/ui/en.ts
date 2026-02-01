import type { UiKey } from './ja';

export const uiEn: Record<UiKey, string> = {
  // Navigation
  'nav.home': 'Home',
  'nav.works': 'Works',
  'nav.projects': 'Projects',
  'nav.achievements': 'Achievements',
  'nav.articles': 'Articles',

  // Hero section
  'hero.title': 'Backend / Infrastructure / Security',
  'hero.skills.title': 'Technical Expertise',
  'hero.experience.title': 'Professional Experience',
  'hero.skills.backend': 'Backend: Python (FastAPI), TypeScript, Go, PHP',
  'hero.skills.infra': 'Infrastructure: AWS, Kubernetes, Terraform, Ansible',
  'hero.skills.security': 'Security: Vulnerability Assessment, Threat Analysis, Incident Response',
  'hero.exp.companies': 'Contract & internship experience at 7 companies',
  'hero.exp.apprunner': 'Led AWS App Runner migration project',
  'hero.exp.ai': 'AI Agent Development (Healthcare x LLM)',
  'hero.cta.works': 'View Works',
  'hero.cta.articles': 'Tech Articles',

  // Works section
  'works.title': 'Works',
  'works.responsibilities': 'Responsibilities',
  'works.achievements': 'Key Achievements',
  'works.technologies': 'Tech Stack',
  'works.shortterm': 'Short-term & On-site Internships',
  'works.present': 'Present',

  // Projects section
  'projects.title': 'Projects',
  'projects.challenge': 'Challenge',
  'projects.role': 'Role',
  'projects.outcome': 'Outcome',
  'projects.hobby.title': 'Hobby & Personal Projects',

  // Skills section
  'skills.title': 'Skills',

  // Achievements section
  'achievements.awards.title': 'Awards',
  'achievements.certs.title': 'Certifications',
  'achievements.certs.other': 'Other Certifications',

  // Articles section
  'articles.title': 'Articles',

  // Media section
  'media.title': 'Media',
  'media.type.interview': 'Interview',
  'media.type.article': 'Article',
  'media.type.podcast': 'Podcast',
  'media.type.video': 'Video',
  'media.fallback.title': 'Media Coverage',
  'media.fallback.desc': 'Media coverage information',

  // Language switcher
  'lang.switch': 'Language',
  'lang.ja': '日本語',
  'lang.en': 'English',
} as const;
