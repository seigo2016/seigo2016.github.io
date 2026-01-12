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
  { url: "https://qiita.com/seigo2016/items/b91a0ef8364816371de3" },
  { url: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892" },
  { url: "https://blog.seigo2016.com/posts/u-h63m00yhm9" },
  { url: "https://blog.seigo2016.com/posts/h-blxsnew_s" },
  { url: "https://blog.seigo2016.com/posts/a57ec43eo" },
  { url: "https://blog.seigo2016.com/posts/skdw6qd0mzq" },
];
