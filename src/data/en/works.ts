import type { WorksData } from '../../types';

export const works: WorksData[] = [
  {
    companyName: "FastDOCTOR, Inc.",
    dateRanges: [
      { since: new Date("2024-11-01") },
    ],
    role: "Backend Engineer / AI Engineer",
    responsibilities: [
      "AI agent development",
      "Healthcare x LLM PoC development & evaluation framework"
    ],
    achievements: [
      "Built medical record transcription PoC and evaluation framework",
      "Developed and deployed AI agent PoC for medical administration",
      "Technical evaluation and selection of LLM frameworks (Mastra/LangGraph)"
    ],
    technologies: ["TypeScript", "AWS", "Lambda", "DynamoDB", "LLM", "Mastra", "LangGraph"]
  },
  {
    companyName: "Armoris Inc.",
    dateRanges: [
      { since: new Date("2020-10-01"), until: new Date("2021-03-31") },
      { since: new Date("2022-10-01") },
    ],
    role: "Security Research Intern",
    responsibilities: [
      "Vulnerability & security tool assessment",
      "Threat intelligence analysis",
    ],
    achievements: [
      "Analyzed phishing campaigns targeting financial institutions (94 URLs analyzed, mapped attack infrastructure)",
      "E-commerce site defacement incident analysis",
      "AiTM attack & phishing framework (Evilgophish/Evilginx) validation",
      "SSH vulnerability scanner (SSHamble) assessment"
    ],
    technologies: ["Python", "Go", "Docker", "AWS", "GeoIP Analysis", "JavaScript Forensics", "Evilginx", "Gophish"]
  },
  {
    companyName: "meing Inc.",
    dateRanges: [
      { since: new Date("2023-10-01") },
    ],
    role: "Backend Engineer / Infrastructure Engineer",
    responsibilities: [
      "Backend API development",
      "Infrastructure design & re-architecture"
    ],
    achievements: [
      "Infrastructure setup using AWS CDK",
      "Salesforce/Stripe integration",
      "Re-architecture for improved maintainability through dependency simplification and separation of concerns"
    ],
    technologies: ["TypeScript", "NestJS", "Prisma", "AWS CDK", "EC2", "Lambda", "SQS", "Aurora Serverless v2", "Stripe", "Salesforce", "GitHub Actions", "CodeBuild"]
  },
  {
    companyName: "CoPalette Inc.",
    dateRanges: [
      { since: new Date("2024-10-15") },
    ],
    role: "Backend Engineer / Infrastructure Engineer",
    responsibilities: [
      "Infrastructure migration & CI/CD setup",
      "Backend feature development"
    ],
    achievements: [
      "Implemented recommendation and organizer features",
      "EC2 to App Runner migration (see tech article for details)",
      "CI/CD pipeline setup"
    ],
    technologies: ["Go", "sqlx", "App Runner", "Lambda", "SQS", "SendGrid", "Auth0", "GitHub Actions", "CodeBuild", "Amazon Aurora PostgreSQL"]
  },
  {
    companyName: "Togetter Inc.",
    dateRanges: [
      { since: new Date("2022-10-01"), until: new Date("2024-03-31") },
    ],
    role: "Backend Engineer",
    responsibilities: [
      "Maintenance and development of existing services"
    ],
    achievements: [
      "Backend feature additions and bug fixes"
    ],
    technologies: ["PHP"]
  },
  {
    companyName: "NewBizz Inc.",
    dateRanges: [
      { since: new Date("2023-02-01") },
    ],
  },
  {
    companyName: "Prokids Inc.",
    dateRanges: [
      { since: new Date("2019-10-01"), until: new Date("2021-03-31") },
      { since: new Date("2022-03-01"), until: new Date("2022-11-30") },
    ],
  },
];

export const otherWorks: WorksData[] = [
  {
    companyName: "Sansan, Inc. (On-site Internship)",
    dateRanges: [
      { since: new Date("2024-09-16"), until: new Date("2024-09-27") },
      { since: new Date("2025-02-13"), until: new Date("2025-03-28") },
    ],
  },
  {
    companyName: "Recruit Co., Ltd. RED TEAM (On-site Internship)",
    dateRanges: [
      { since: new Date("2024-10-03"), until: new Date("2024-11-01") },
    ],
  },
  {
    companyName: "Nikkei Digital Edition Internship",
    dateRanges: [
      { since: new Date("2022-08-15"), until: new Date("2022-08-19") },
    ],
  },
  {
    companyName: "LINE Corporation Hackathon Internship",
    dateRanges: [
      { since: new Date("2023-08-16"), until: new Date("2023-09-01") },
    ],
  },
  {
    companyName: "STORES Tech Camp (Short-term Internship)",
    dateRanges: [
      { since: new Date("2023-09-04"), until: new Date("2023-09-15") },
    ],
  },
];
