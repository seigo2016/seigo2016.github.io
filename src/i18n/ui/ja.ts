export const uiJa = {
  // Navigation
  'nav.home': 'Home',
  'nav.works': 'Works',
  'nav.projects': 'Projects',
  'nav.achievements': 'Achievements',
  'nav.articles': 'Articles',

  // Hero section
  'hero.title': 'Backend / Infrastructure / Security',
  'hero.skills.title': '技術領域',
  'hero.experience.title': '実務経験',
  'hero.skills.backend': 'Backend: Python (FastAPI), TypeScript, Go, PHP',
  'hero.skills.infra': 'Infrastructure: AWS, Kubernetes, Terraform, Ansible',
  'hero.skills.security': 'Security: 脆弱性診断、脅威分析、インシデント対応',
  'hero.exp.companies': '7社での業務委託・インターン経験',
  'hero.exp.apprunner': 'AWS App Runner移行プロジェクトリード',
  'hero.exp.ai': 'AIエージェント開発 (医療×LLM)',
  'hero.cta.works': 'Works 詳細',
  'hero.cta.articles': '技術記事',

  // Works section
  'works.title': 'Works',
  'works.responsibilities': '担当領域',
  'works.achievements': '主な成果',
  'works.technologies': '技術スタック',
  'works.shortterm': '短期・就業型インターン',
  'works.present': 'Present',

  // Projects section
  'projects.title': 'Projects',
  'projects.challenge': '課題',
  'projects.role': '役割',
  'projects.outcome': '成果',
  'projects.hobby.title': '趣味・個人制作プロジェクト',

  // Skills section
  'skills.title': 'Skills',

  // Achievements section
  'achievements.awards.title': 'Awards',
  'achievements.certs.title': 'Certifications',
  'achievements.certs.other': 'その他の資格',

  // Articles section
  'articles.title': 'Articles',

  // Media section
  'media.title': 'Media',
  'media.type.interview': 'インタビュー',
  'media.type.article': '記事',
  'media.type.podcast': 'ポッドキャスト',
  'media.type.video': '動画',
  'media.fallback.title': 'メディア掲載',
  'media.fallback.desc': 'メディア掲載情報',

  // Language switcher
  'lang.switch': '言語',
  'lang.ja': '日本語',
  'lang.en': 'English',
} as const;

export type UiKey = keyof typeof uiJa;
