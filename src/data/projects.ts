import type { ProjectData } from '../types';

export const projects: ProjectData[] = [  
  {
    name: "自宅サーバー環境",
    description: "自宅サーバー。Proxmoxで仮想化後、k8sクラスタを構築。Terraform + AnsibleでIaC、GitOpsを実践。",
    image: "infra.webp",
    url: [
      {
        name: "GitHub",
        url: "https://github.com/seigo2016/infra",
      }
    ],
    tags: ["Proxmox", "Kubernetes", "GitOps", "Terraform", "Ansible"],
    featured: true,
    category: 'professional',
    challenge: "本番環境相当のインフラ技術習得、IaCによる再現可能な環境構築、GitOpsによる宣言的な運用の実現",
    role: "個人開発(インフラ設計・構築・運用すべて)",
    architecture: "Proxmox VE上にKubernetesクラスタ(CRI-O + Flannel CNI)。Terraformでノード構築、AnsibleでK8sセットアップ自動化。Flux CDでGitOps運用、Longhorn分散ストレージ、HashiCorp Vaultでシークレット管理",
    outcome: "本番環境レベルのk8s運用経験を獲得。完全なIaC化により環境の再現性を担保。GitOpsによる宣言的管理で運用を効率化。実践的なインフラスキルを証明"
  },
  {
    name: "EC2 → App Runner 移行プロジェクト",
    description: "ハッカソンプラットフォームのインフラをEC2+DockerからAWS App Runnerに移行。運用負荷削減とCI/CD自動化を実現。",
    image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F311807%2F77a9cf26-1910-419e-8804-a751184f87a3.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=aae2cf1b1812d84be5accdb8ec4e9323",
    url: [
      { name: "技術記事", url: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892" }
    ],
    tags: ["AWS", "App Runner", "Terraform", "CI/CD", "GitHub Actions"],
    featured: true,
    category: 'professional',
    challenge: "手動SSH接続によるSQLマイグレーション、分散した秘密情報管理、不安定なデプロイフローが課題",
    role: "CoPaletteでのバックエンド・インフラエンジニア",
    architecture: "App Runner + ECR + RDS(VPC内) + NAT Gateway構成。Terraformでインフラコード化、GitHub ActionsでCI/CD自動化、Systems Manager Parameter Storeで秘密情報を集約管理",
    outcome: "デプロイを完全自動化、運用負荷を大幅削減、マイグレーション安定性向上、CloudWatch中心の監視体制確立",
    detailUrl: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892"
  },
  {
    name: "Coding-Remote",
    description: "Claude CodeとDiscordを統合したリモートツール承認・セッション管理システム。Discord経由でファイル編集やコマンド実行を承認可能。",
    image: "https://raw.githubusercontent.com/seigo2016/Coding-Remote/main/docs/images/overview.png",
    url: [
      { name: "GitHub", url: "https://github.com/seigo2016/Coding-Remote" }
    ],
    tags: ["TypeScript", "Node.js", "Discord.js", "VSCode Extension"],
    featured: true,
    category: 'professional',
    challenge: "VSCode外でのClaude Codeセッション継続、モバイルデバイスからのリモートコーディング実現",
    role: "個人開発(企画・設計・実装すべて)",
    architecture: "VSCode拡張からHTTP API経由でPreToolUseフックをトリガー。Discord BotがStream-JSON形式でセッション管理。プロジェクト別スレッド管理機能を実装",
    outcome: "複数プラットフォーム統合アーキテクチャ実現。リアルタイムセッション管理とDiscord UIによる承認フロー構築。MITライセンスでOSS公開"
  },
  {
    name: "糸かけシミュレーター",
    description: "糸かけ曼荼羅の制作を支援するソフトウェア。配色や形状の細かなシミュレーションが可能。",
    image: "itokake.webp",
    url: [
      { name: "Webアプリ", url: "https://itokake.seigo2016.com" }
    ],
    tags: ["TypeScript", "Cloudflare Pages", "PWA"],
    featured: true,
    category: 'professional',
    challenge: "複雑な幾何学パターンの描画パフォーマンス最適化、直感的なUI/UX設計",
    role: "個人開発(企画・設計・実装すべて)",
    architecture: "TypeScriptでCanvas APIを使用した描画エンジン実装。PWA対応でオフライン動作可能。Cloudflare Pagesでホスティング",
    outcome: "U22プログラミングコンテスト2019 入賞・日本事務器賞受賞。商用レベルのUI/UX品質を達成"
  },
  {
    name: "2434Units.com",
    description: "VTuberグループにじさんじのユニットの最新情報を提供するサイト",
    image: "2434units.webp",
    url: [],
    tags: ["TypeScript", "Vue.js", "Python (FastAPI)", "MariaDB", "Cloudflare Pages", "Twitter API v2", "YouTube API"],
    featured: false,
    category: 'hobby',
    challenge: "複数APIからのリアルタイムデータ収集と自動更新、複雑なリレーショナルデータ設計",
    role: "個人開発(約2.5週間で開発・ローンチ)",
    architecture: "Frontend: Vue.js 3 + TypeScript + Tailwind CSS (Cloudflare Pages)。Backend: FastAPI + SQLAlchemy + MariaDB (自己ホスト)。Twitter Filtered Stream APIでリアルタイムコンテンツ収集",
    outcome: "開発期間2.5週間でローンチ。REST APIとSwagger自動生成。Google Forms + App Scriptでデータ検証パイプライン構築",
    detailUrl: "https://blog.seigo2016.com/posts/a57ec43eo"
  },
  {
    name: "Digital Sigange v3",
    description: "Raspberry PiとDropbox/Google Driveを使用して，掲示板をデジタル化したデジタルサイネージ。",
    image: "digital-signage.webp",
    url: [],
    tags: ["Python", "Raspberry Pi", "Dropbox API"],
    category: 'hobby'
  },
  {
    name: "Image2PDF",
    description: "Webサイト上で複数の写真を1つのPDFファイルに結合し変換するWebアプリケーション",
    image: "img2pdf.webp",
    url: [
      { name: "Webアプリ", url: "https://img2pdf.seigo2016.com" }
    ],
    tags: ["TypeScript", "Python", "Fast API", "Cloudflare Pages"],
    featured: false,
    category: 'hobby'
  },
  {
    name: "EnigmaPi",
    description: "暗号機エニグマをRaspberry Piを使用して，再現したもの",
    image: "enigma.webp",
    url: [
      {
        name: "スライド",
        url: "https://www.slideshare.net/seigo2016/raspberry-pi-x-enigma/1"
      },
      {
        name: "動画",
        url: "https://youtu.be/QfIU4Iw-8Hs"
      }
    ],
    tags: ["Python", "Raspberry Pi Zero WH"],
    category: 'hobby'
  },
  {
    name: "EnigmaPi v2",
    description: "EnigmaPi v2",
    image: "EnigmaPi-v2.webp",
    url: [
      {
        name: "Make: Faire Tokyo 2022",
        url: "https://makezine.jp/event/makers-mft2022/m0043/"
      }
    ],
    tags: ["Python", "Raspberry Pi Pico"],
    featured: true,
    category: 'hobby'
  },
  {
    name: "スマートロック with Raspberry Pi",
    description: "既存のドアの鍵の開け閉めをスマートフォンから操作できる「スマートロック」にするシステム。",
    image: "smartlock.webp",
    url: [
      {
      name: "動画",
      url: "https://youtu.be/BHFAZTuZBGE"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "Presentation Support System",
    description: "プレゼンテーションを更に面白く，便利に行うためのツール。スライド上にリアルタイムでコメントを流すシステムを実装。",
    image: "pss-min.webp",
    url: [],
    tags: ["Python", "Electron"],
    category: 'hobby'
  },
  {
    name: "PS2JPC-BOT",
    description: "PCゲーム PlanetSide2の非公式JPコミュニティで2017年より運用中の管理Bot。役職管理やゲーム内イベント告知，サーバー管理等の機能を実装。",
    image: "ps2jpcbot.webp",
    url: [],
    tags: ["Python (v1.0 / v3.0)", "Go (v2.0)"],
    category: 'hobby'
  },
  {
    name: "戦車プラモデルのラジコン化",
    description: "タミヤの1/35戦車プラモデルにRaspberryPi Zero WHを搭載。Xboxコントローラーで操作できる。砲塔の旋回も可能。",
    image: "tank-min.webp",
    url: [
      {
        name: "動画",
        url: "https://youtu.be/zETG8R2qTDw"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "球体ロボット",
    description: "プラスチック球の中にRaspberryPi Zero WHなどを搭載した，Xboxコントローラーで操作できる球体ロボット。Xboxコントローラーで操作可能。",
    image: "sphere-min.webp",
    url: [
      {
        name: "動画",
        url: "https://youtu.be/9oHtzbt6FJ4"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "殺虫剤遠隔噴霧車",
    description: "遠隔操作で殺虫剤を噴霧するロボット(?)。",
    image: "spray.webp",
    url: [
      {
        name: "動画",
        url: "https://youtu.be/Zq57kEpYekE"
      }
    ],
    tags: ["micro:bit"],
    category: 'hobby'
  }
];
