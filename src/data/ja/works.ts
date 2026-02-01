import type { WorksData } from '../../types';

export const works: WorksData[] = [
  {
    companyName: "ファストドクター株式会社",
    dateRanges: [
      { since: new Date("2024-11-01") },
    ],
    role: "Backend Engineer / AI Engineer",
    responsibilities: [
      "AIエージェントの開発",
      "医療×LLMのPoC開発・評価基盤構築"
    ],
    achievements: [
      "カルテ書き起こしのPoC・評価基盤の作成",
      "医療機関の医療事務領域における新規AIエージェントPoC及び現場導入",
      "LLMフレームワーク(Mastra/LangGraph)の比較評価・技術選定"
    ],
    technologies: ["TypeScript", "AWS", "Lambda", "DynamoDB", "LLM", "Mastra", "LangGraph"]
  },
  {
    companyName: "株式会社Armoris",
    dateRanges: [
      { since: new Date("2020-10-01"), until: new Date("2021-03-31") },
      { since: new Date("2022-10-01") },
    ],
    role: "Security Research Intern",
    responsibilities: [
      "脆弱性・セキュリティツール検証",
      "脅威インテリジェンス分析",
    ],
    achievements: [
      "金融機関標的フィッシング攻撃の分析(94 URLsを分析、攻撃インフラをマッピング)",
      "ECサイト改ざんインシデント解析",
      "AiTM攻撃・フィッシングフレームワーク(Evilgophish/Evilginx)の検証",
      "SSH脆弱性スキャナー(SSHamble)の検証"
    ],
    technologies: ["Python", "Go", "Docker", "AWS", "GeoIP分析", "JavaScript forensics", "Evilginx", "Gophish"]
  },
  {
    companyName: "株式会社meing",
    dateRanges: [
      { since: new Date("2023-10-01") },
    ],
    role: "Backend Engineer / Infrastructure Engineer",
    responsibilities: [
      "バックエンドAPI実装",
      "インフラ構築・リアーキテクト"
    ],
    achievements: [
      "AWS CDKによるインフラ構築",
      "Salesforce/Stripe連携",
      "依存の単純化や責務分離による追加開発・機能改善を容易にするためのリアーキテクト"
    ],
    technologies: ["TypeScript", "NestJS", "Prisma", "AWS CDK", "EC2", "Lambda", "SQS", "Aurora Serverless v2", "Stripe", "Salesforce", "GitHub Actions", "CodeBuild"]
  },
  {
    companyName: "株式会社CoPalette",
    dateRanges: [
      { since: new Date("2024-10-15") },
    ],
    role: "Backend Engineer / Infrastructure Engineer",
    responsibilities: [
      "インフラ移行・CI/CD整備",
      "バックエンド機能実装"
    ],
    achievements: [
      "レコメンド機能・主催者機能の実装",
      "EC2 → App Runner への移行(詳細は技術記事参照)",
      "CI/CDパイプライン整備"
    ],
    technologies: ["Go", "sqlx", "App Runner", "Lambda", "SQS", "SendGrid", "Auth0", "GitHub Actions", "CodeBuild", "Amazon Aurora PostgreSQL"]
  },
  {
    companyName: "トゥギャッター株式会社",
    dateRanges: [
      { since: new Date("2022-10-01"), until: new Date("2024-03-31") },
    ],
    role: "Backend Engineer",
    responsibilities: [
      "既存サービスの保守開発"
    ],
    achievements: [
      "バックエンド機能追加・バグ修正"
    ],
    technologies: ["PHP"]
  },
  {
    companyName: "株式会社NewBizz",
    dateRanges: [
      { since: new Date("2023-02-01") },
    ],
  },
  {
    companyName: "株式会社Prokids",
    dateRanges: [
      { since: new Date("2019-10-01"), until: new Date("2021-03-31") },
      { since: new Date("2022-03-01"), until: new Date("2022-11-30") },
    ],
  },
];

export const otherWorks: WorksData[] = [
  {
    companyName: "Sansan株式会社 (就業型インターン)",
    dateRanges: [
      { since: new Date("2024-09-16"), until: new Date("2024-09-27") },
      { since: new Date("2025-02-13"), until: new Date("2025-03-28") },
    ],
  },
  {
    companyName: "株式会社リクルート RED TEAM(就業型インターン)",
    dateRanges: [
      { since: new Date("2024-10-03"), until: new Date("2024-11-01") },
    ],
  },
  {
    companyName: "日経電子版インターン",
    dateRanges: [
      { since: new Date("2022-08-15"), until: new Date("2022-08-19") },
    ],
  },
  {
    companyName: "LINE株式会社 ハッカソンインターン",
    dateRanges: [
      { since: new Date("2023-08-16"), until: new Date("2023-09-01") },
    ],
  },
  {
    companyName: "STORES Tech Camp (短期インターン)",
    dateRanges: [
      { since: new Date("2023-09-04"), until: new Date("2023-09-15") },
    ],
  },
];
