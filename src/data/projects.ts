import type { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    name: "糸かけシミュレーター",
    description: "糸かけ曼荼羅の制作を支援するソフトウェア。配色や形状の細かなシミュレーションが可能。",
    image: "itokake.webp",
    url: [
      { name: "Webアプリ", url: "https://itokake.seigo2016.com" }
    ],
    tags: ["TypeScript", "Cloudflare Pages", "PWA"],
    featured: true
  },
  {
    name: "Digital Sigange v3",
    description: "Raspberry PiとDropbox/Google Driveを使用して，掲示板をデジタル化したデジタルサイネージ。",
    image: "digital-signage.webp",
    url: [],
    tags: ["Python", "Raspberry Pi", "Dropbox API"]
  },
  // {
  //   name: "試薬一括検索サイト",
  //   description: "複数の試薬販売メーカーのサイトから目的の試薬を一括で検索できるサイト",
  //   image: "reagent.webp",
  //   url: [],
  //   tags: ["Python", "Selenium", "HTML5", "CSS3"]
  // },
  {
    name: "Image2PDF",
    description: "Webサイト上で複数の写真を1つのPDFファイルに結合し変換するWebアプリケーション",
    image: "img2pdf.webp",
    url: [
      { name: "Webアプリ", url: "https://img2pdf.seigo2016.com" }
    ],
    tags: ["TypeScript", "Python", "Fast API", "Cloudflare Pages"],
    featured: false
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
    tags: ["Python", "Raspberry Pi Zero WH"]
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
    featured: true
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
    tags: ["Python", "Raspberry Pi"]
  },
  {
    name: "2434Units.com",
    description: "VTuberグループにじさんじのユニットの最新情報を提供するサイト",
    image: "2434units.webp",
    url: [],
    tags: ["TypeScript", "Vue.js", "Python (FastAPI)", "MariaDB", "Cloudflare Pages", "Twitter API v2", "YouTube API"]
  },
  // {
  //   name: "スタレック | Study Record",
  //   description: "シンプルな勉強記録アプリ",
  //   image: "StudyRecord.webp",
  //   url: [],
  //   tags: ["React Native"]
  // },
  {
    name: "Presentation Support System",
    description: "プレゼンテーションを更に面白く，便利に行うためのツール。スライド上にリアルタイムでコメントを流すシステムを実装。",
    image: "pss-min.webp",
    url: [],
    tags: ["Python", "Electron"]
  },
  {
    name: "PS2JPC-BOT",
    description: "PCゲーム PlanetSide2の非公式JPコミュニティで2017年より運用中の管理Bot。役職管理やゲーム内イベント告知，サーバー管理等の機能を実装。",
    image: "ps2jpcbot.webp",
    url: [],
    tags: ["Python (v1.0 / v3.0)", "Go (v2.0)"]
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
    tags: ["Python", "Raspberry Pi"]
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
    tags: ["Python", "Raspberry Pi"]
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
    tags: ["micro:bit"]
  },
  // {
  //   name: "BFV LeadrerBoard",
  //   description: "FPSゲームBFVのAPIから情報を取得し，いくつかの情報をピックアップして表示するサイト。",
  //   image: "preview.webp",
  //   url: [],
  //   tags: ["Vue.js"]
  // }
  {
    name: "自宅サーバー環境",
    description: "自宅にあるサーバー。Proxmoxで仮想化後、k8sクラスタを構築。Terraform + AnsibleでIaC、GitOpsを実践。",
    image: "server.webp",
    url: [
      {
      name: "GitHub",
      url: "https://github.com/seigo2016/infra",
      }
    ],
    tags: ["Proxmox", "Kubernetes", "GitOps", "Terraform", "Ansible"],
    featured: true
  }
];
