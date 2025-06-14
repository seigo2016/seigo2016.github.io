import type { SkillData, SkillAbstract } from '../types';

export const skills: SkillData[] = [
  {
    name: 'Python',
    description: 'APIなどのサーバー側の処理やスクレイピング,画像処理など幅広く使用. \
    ちょっとしたツールやプロトタイプはとりあえずPythonで制作. ',
    year: '8年以上',
    icon: 'python.svg'
  },
  {
    name:'Go',
    description:'個人制作のデジタルサイネージv2やWebアプリのバックエンドや、株式会社NewBizzでのバックエンド開発でも利用',
    year:'',
    icon:'Go-Logo_Blue.svg'
  },
  {
    name:'TypeScript',
    description:'糸かけシミュレーターや2434units.comなどのWebアプリのフロントの開発に使用. Nest.JSやPrismaなどを用いたバックエンドの開発にも利用.',
    year:' ',
    icon:'ts-logo-256.svg'
  },
  {
    name:'PHP',
    description:'バックエンドの開発に利用. ',
    year:'',
    icon:'php-logo.png'
  },
  {
    name:'docker',
    description:'開発環境の構築やデプロイに利用',
    year:'',
    icon:'docker.webp'
  },
  {
    name: 'AWS',
    description: 'AWS CDKを用いて、ECS/Aurora Serverless/ECR/S3などを利用したインフラの構築や運用',
    year: '',
    icon: 'aws.svg'
  },
];

export const skillAbstract : SkillAbstract[] = [  
  {
    name: 'Proxmox',
    icon: 'proxmox.webp'
  },
  {
    name: 'Nginx',
    icon: 'nginx.png'
  },
  {
    name: 'NestJS',
    icon: 'nestjs.svg'
  },
  {
    name: 'MariaDB',
    icon: 'mariadb.svg'
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql.svg'
  },
  {
    name: 'Prisma',
    icon: 'prisma.svg'
  },
  {
    name: 'Raspberry Pi',
    icon: 'raspberrypi.png'
  }
];