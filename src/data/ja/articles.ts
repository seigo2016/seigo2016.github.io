export interface ArticleData {
  url: string;
  title?: string;
  description?: string;
  image?: string;
}

export const articles: ArticleData[] = [
  {
    url: "https://zenn.dev/fastdoctor/articles/0b61398578951a",
    title: "グラフ構築と状態管理の実装アプローチから見るMastraとLanggraphの比較",
    description: "MastraとLanggraphのグラフ構築と状態管理の実装アプローチを比較し、それぞれの特徴と使い分けを解説します。"
  },
  {
    url: "https://qiita.com/seigo2016/items/b91a0ef8364816371de3",
    title: "HackathonでChatGPT×医療のウェブサービスを開発した話[pyてょん3.0]",
    description: "東京工業大学でのハッカソンイベントにてChatGPTを活用した医療ウェブサービスを開発した経験をまとめた記事。"
  },
  {
    url: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892",
    title: "EC2 + Docker 運用を App Runner に移行した話 〜運用負荷削減と構成整理の実践例〜",
    description: "ハッカソンプラットフォームのAPIバックエンドをEC2上のDockerコンテナからAWS App Runnerへ移行した実践的な解説。アーキテクチャ選定の判断や得られた知見を共有。"
  },
  {
    url: "https://blog.seigo2016.com/posts/u-h63m00yhm9",
    title: "情報処理安全確保支援士試験に合格した話",
    description: "2023年秋期の情報処理安全確保支援士試験に合格した際の学習方法や準備の経験を共有。"
  },
  {
    url: "https://blog.seigo2016.com/posts/h-blxsnew_s",
    title: "NextcloudをDockerで構築してみたメモ",
    description: "Dockerを利用したクラウドストレージとしてNextcloudを構築し、SSL暗号化によりローカル・リモートの両方からアクセスできるようにする手順の紹介。"
  },
  {
    url: "https://blog.seigo2016.com/posts/a57ec43eo",
    title: "にじさんじのユニットについてのサイトを作った話",
    description: "VTuberグループ「にじさんじ」のユニットに関する最新情報を配信するサイトを構築した記録。"
  },
  {
    url: "https://blog.seigo2016.com/posts/skdw6qd0mzq",
    title: "Proxmox環境の構築",
    description: "Proxmox仮想化プラットフォームのインストール・構築とDebian仮想マシンの稼働手順を解説。"
  },
];
