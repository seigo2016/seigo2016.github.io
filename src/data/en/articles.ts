export interface ArticleData {
  url: string;
  title?: string;
  description?: string;
  image?: string;
}

export const articles: ArticleData[] = [
  {
    url: "https://zenn.dev/fastdoctor/articles/0b61398578951a",
    title: "Comparing Mastra and LangGraph: Graph Construction and State Management Approaches",
    description: "A comparison of Mastra and LangGraph focusing on their approaches to graph construction and state management, explaining their characteristics and use cases."
  },
  {
    url: "https://qiita.com/seigo2016/items/b91a0ef8364816371de3",
    title: "Building a ChatGPT x Healthcare Web Service at a Hackathon [pyてょん3.0]",
    description: "A developer's experience building a healthcare web service using ChatGPT during a hackathon event at Tokyo Tech."
  },
  {
    url: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892",
    title: "Migrating EC2 + Docker to App Runner: Reducing Operational Overhead",
    description: "A practical guide on migrating a hackathon platform's API backend from EC2-based Docker containers to AWS App Runner, including architectural decisions and lessons learned."
  },
  {
    url: "https://blog.seigo2016.com/posts/u-h63m00yhm9",
    title: "How I Passed the Registered Information Security Specialist Examination",
    description: "Sharing study methods and preparation experience after passing the autumn 2023 RISS examination."
  },
  {
    url: "https://blog.seigo2016.com/posts/h-blxsnew_s",
    title: "Setting Up Nextcloud with Docker",
    description: "A guide to deploying Nextcloud as a Docker-based cloud storage solution with SSL encryption, accessible both locally and remotely."
  },
  {
    url: "https://blog.seigo2016.com/posts/a57ec43eo",
    title: "Building a Website for Nijisanji VTuber Units",
    description: "Building a site that delivers the latest information about units within the Nijisanji VTuber group."
  },
  {
    url: "https://blog.seigo2016.com/posts/skdw6qd0mzq",
    title: "Setting Up a Proxmox Environment",
    description: "Installing and configuring Proxmox virtualization platform and running Debian virtual machines."
  },
];
