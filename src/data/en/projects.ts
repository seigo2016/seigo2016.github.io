import type { ProjectData } from '../../types';

export const projects: ProjectData[] = [
  {
    name: "Home Server Infrastructure",
    description: "Personal home server setup. Built Kubernetes cluster on Proxmox virtualization. Practicing IaC and GitOps with Terraform + Ansible.",
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
    challenge: "Acquiring production-grade infrastructure skills, building reproducible environments with IaC, achieving declarative operations with GitOps",
    role: "Solo project (all infrastructure design, implementation, and operations)",
    architecture: "Kubernetes cluster (CRI-O + Flannel CNI) on Proxmox VE. Node provisioning with Terraform, K8s setup automation with Ansible. GitOps with Flux CD, Longhorn distributed storage, secret management with HashiCorp Vault",
    outcome: "Gained production-level Kubernetes operational experience. Ensured environment reproducibility through complete IaC. Streamlined operations with declarative GitOps management."
  },
  {
    name: "EC2 to App Runner Migration Project",
    description: "Migrated hackathon platform infrastructure from EC2+Docker to AWS App Runner. Achieved reduced operational overhead and CI/CD automation.",
    image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F311807%2F77a9cf26-1910-419e-8804-a751184f87a3.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=aae2cf1b1812d84be5accdb8ec4e9323",
    url: [
      { name: "Tech Article", url: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892" }
    ],
    tags: ["AWS", "App Runner", "Terraform", "CI/CD", "GitHub Actions"],
    featured: true,
    category: 'professional',
    challenge: "Manual SSH-based SQL migrations, scattered secret management, unstable deployment flow",
    role: "Backend & Infrastructure Engineer at CoPalette",
    architecture: "App Runner + ECR + RDS (within VPC) + NAT Gateway configuration. Infrastructure as Code with Terraform, CI/CD automation with GitHub Actions, centralized secret management with Systems Manager Parameter Store",
    outcome: "Fully automated deployments, significantly reduced operational overhead, improved migration stability, established CloudWatch-centric monitoring",
    detailUrl: "https://qiita.com/seigo2016/items/15b5b7dac784d4de3892"
  },
  {
    name: "Coding-Remote",
    description: "Remote tool approval and session management system integrating Claude Code with Discord. Enables file editing and command execution approval via Discord.",
    image: "https://raw.githubusercontent.com/seigo2016/Coding-Remote/main/docs/images/overview.png",
    url: [
      { name: "GitHub", url: "https://github.com/seigo2016/Coding-Remote" }
    ],
    tags: ["TypeScript", "Node.js", "Discord.js", "VSCode Extension"],
    featured: true,
    category: 'professional',
    challenge: "Continuing Claude Code sessions outside VSCode, enabling remote coding from mobile devices",
    role: "Solo project (planning, design, and implementation)",
    architecture: "VSCode extension triggers PreToolUse hooks via HTTP API. Discord Bot manages sessions in Stream-JSON format. Implemented project-specific thread management",
    outcome: "Built session management and Discord UI-based approval workflow. Released as OSS under MIT license"
  },
  {
    name: "String Art Simulator",
    description: "Software for creating string art mandala designs. Enables detailed simulation of color schemes and patterns.",
    image: "itokake.webp",
    url: [
      { name: "Web App", url: "https://itokake.seigo2016.com" }
    ],
    tags: ["TypeScript", "Cloudflare Pages", "PWA"],
    featured: true,
    category: 'professional',
    challenge: "Performance optimization for complex geometric pattern rendering, intuitive UI/UX design",
    role: "Solo project (planning, design, and implementation)",
    architecture: "Drawing engine implementation using Canvas API with TypeScript. PWA-enabled for offline functionality. Hosted on Cloudflare Pages",
    outcome: "Won U-22 Programming Contest 2019 Award and NJK Award"
  },
  {
    name: "2434Units.com",
    description: "Website providing the latest information about VTuber group Nijisanji's units",
    image: "2434units.webp",
    url: [],
    tags: ["TypeScript", "Vue.js", "Python (FastAPI)", "MariaDB", "Cloudflare Pages", "Twitter API v2", "YouTube API"],
    featured: false,
    category: 'hobby',
    challenge: "Real-time data collection and auto-updates from multiple APIs, complex relational data design",
    role: "Solo project (developed and launched in ~2.5 weeks)",
    architecture: "Frontend: Vue.js 3 + TypeScript + Tailwind CSS (Cloudflare Pages). Backend: FastAPI + SQLAlchemy + MariaDB (self-hosted). Real-time content collection via Twitter Filtered Stream API",
    outcome: "Launched within 2.5 weeks of development. REST API with auto-generated Swagger docs. Built data validation pipeline with Google Forms + Apps Script",
    detailUrl: "https://blog.seigo2016.com/posts/a57ec43eo"
  },
  {
    name: "Digital Signage v3",
    description: "Digital signage system using Raspberry Pi with Dropbox/Google Drive integration to digitize bulletin boards.",
    image: "digital-signage.webp",
    url: [],
    tags: ["Python", "Raspberry Pi", "Dropbox API"],
    category: 'hobby'
  },
  {
    name: "Image2PDF",
    description: "Web application for combining and converting multiple images into a single PDF file",
    image: "img2pdf.webp",
    url: [
      { name: "Web App", url: "https://img2pdf.seigo2016.com" }
    ],
    tags: ["TypeScript", "Python", "Fast API", "Cloudflare Pages"],
    featured: false,
    category: 'hobby'
  },
  {
    name: "EnigmaPi",
    description: "Recreation of the Enigma cipher machine using Raspberry Pi",
    image: "enigma.webp",
    url: [
      {
        name: "Slides",
        url: "https://www.slideshare.net/seigo2016/raspberry-pi-x-enigma/1"
      },
      {
        name: "Video",
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
        name: "Maker Faire Tokyo 2022",
        url: "https://makezine.jp/event/makers-mft2022/m0043/"
      }
    ],
    tags: ["Python", "Raspberry Pi Pico"],
    featured: true,
    category: 'hobby'
  },
  {
    name: "Smart Lock with Raspberry Pi",
    description: "System to convert existing door locks into smartphone-controllable smart locks.",
    image: "smartlock.webp",
    url: [
      {
        name: "Video",
        url: "https://youtu.be/BHFAZTuZBGE"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "Presentation Support System",
    description: "Tool for making presentations more engaging and convenient. Implemented real-time comment streaming overlay on slides.",
    image: "pss-min.webp",
    url: [],
    tags: ["Python", "Electron"],
    category: 'hobby'
  },
  {
    name: "PS2JPC-BOT",
    description: "Management bot for the unofficial Japanese community of PC game PlanetSide2, running since 2017. Implements role management, in-game event announcements, server administration, and more.",
    image: "ps2jpcbot.webp",
    url: [],
    tags: ["Python (v1.0 / v3.0)", "Go (v2.0)"],
    category: 'hobby'
  },
  {
    name: "RC Tank Model Conversion",
    description: "Tamiya 1/35 scale tank model equipped with Raspberry Pi Zero WH. Controllable via Xbox controller with turret rotation capability.",
    image: "tank-min.webp",
    url: [
      {
        name: "Video",
        url: "https://youtu.be/zETG8R2qTDw"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "Spherical Robot",
    description: "Spherical robot with Raspberry Pi Zero WH housed inside a plastic sphere. Controllable via Xbox controller.",
    image: "sphere-min.webp",
    url: [
      {
        name: "Video",
        url: "https://youtu.be/9oHtzbt6FJ4"
      }
    ],
    tags: ["Python", "Raspberry Pi"],
    category: 'hobby'
  },
  {
    name: "Remote Insecticide Spray Vehicle",
    description: "Remote-controlled robot (?) for spraying insecticide.",
    image: "spray.webp",
    url: [
      {
        name: "Video",
        url: "https://youtu.be/Zq57kEpYekE"
      }
    ],
    tags: ["micro:bit"],
    category: 'hobby'
  }
];
