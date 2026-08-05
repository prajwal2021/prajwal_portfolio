import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/** Home skills section: 7 + 6 + 5 icons (3 rows). */
export const SKILL_ICON_ROW_1 = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: ".NET",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: ".NET Core",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
] as const;

export const SKILL_ICON_ROW_2 = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

export const SKILL_ICON_ROW_3 = [
  {
    skill_name: "AWS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "Instagram",
  //   icon: RxInstagramLogo,
  //   link: "https://instagram.com",
  // },
  // {
  //   name: "Facebook",
  //   icon: FaFacebook,
  //   link: "https://facebook.com",
  // },
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://twitter.com",
  // },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/prajwals2108/",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/prajwal2021",
  },
] as const;

/** Full skills page (`/skills`) — grouped by area. */
export type SkillCategory = {
  title: string;
  items: readonly string[];
};

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      ".NET",
      ".NET Core",
      "FastAPI",
      "Python",
      "C#",
      "REST API",
      "SOAP API",
    ],
  },
  {
    title: "Database",
    items: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MongoDB",
      "Schema design & migrations",
    ],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Hosting",
    items: ["AWS", "Azure", "Vercel"],
  },
  {
    title: "Testing",
    items: [
      "Unit testing",
      "Integration testing",
      "Karma",
      "Jasmine",
      "Jest",
    ],
  },
  {
    title: "CI/CD",
    items: ["Git", "GitHub", "Bitbucket", "Azure DevOps"],
  },
  {
    title: "AI",
    items: [
      "RAG systems",
      "Pinecone",
      "FAISS",
      "Ollama",
      "AI agents",
      "Embeddings",
      "LangChain",
      "LLMs",
    ],
  },
  {
    title: "Programming languages",
    items: ["TypeScript", "JavaScript", "Python", "C#"],
  },
] as const;

//export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
//   {
//     skill_name: "Docker",
//     image: "docker.png",
//     width: 70,
//     height: 70,
//   },

//   {
//     skill_name: "Figma",
//     image: "figma.png",
//     width: 50,
//     height: 50,
//   },
// ] as const;

// export const OTHER_SKILL = [
//   {
//     skill_name: "Go",
//     image: "go.png",
//     width: 60,
//     height: 60,
//   },
// ] as const;

/** Shared Gemini artwork for project cards (MSSQL + Venmo use their own assets). */
export const PROJECT_CARD_DEFAULT_IMAGE =
  "/projects/Gemini_Generated_Image_6dwbgu6dwbgu6dwb.png";

export const PROJECTS = [
  {
    title: "MSSQl to PostgreSQL Migration",
    slug: "mssql-to-postgresql-migration",
    description:
      "Led the seamless migration of critical databases from Microsoft SQL Server to PostgreSQL. Handled schema translation, data type mapping, stored procedures, and performance optimization to ensure smooth transition with zero data loss and minimal downtime.",
    image: "/projects/project_1.png",
    link: "https://example.com",
  },
  {
    title: "Venmo Integration",
    slug: "venmo-integration",
    description:
      "Integrated Venmo as a payment option into an enterprise-grade financial platform at CSG. Worked on securely invoking the Venmo SDK, handling tokenization, iframe modals, and API communication for a smooth and secure user experience.",
    image: "/projects/project_2.png",
    link: "https://example.com",
  },
  {
    title: "Fortress",
    slug: "fortress",
    description:
      "Privacy-focused password manager and identity gateway with email aliasing, ASP.NET Core backend, Next.js frontend, and Chrome extension.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
  {
    title: "Promptify AI",
    slug: "promptify",
    description:
      "Chrome extension that turns selected text into structured prompts using Gemini AI, with a secure Node.js Express backend.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
  {
    title: "Countdown",
    slug: "countdown",
    description:
      "Next.js app for personalized countdown timers with NextAuth.js (Google) and a date calculator.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
  {
    title: "Cloudflare AI Website Security Analyzer",
    slug: "security-analyser",
    description:
      "AI-powered security analyzer on Cloudflare Workers AI with Durable Objects for session state and contextual chat.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
  {
    title: "ClearBill",
    slug: "clearbill",
    description:
      "AI tool that helps patients understand and challenge medical bills with fairness scoring and dispute letter generation.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
  {
    title: "Ash — AI-Powered Personal OS",
    slug: "ash",
    description:
      "Serverless PWA for managing academic deadlines, tasks, finances, and grades with Gemini and Supabase sync.",
    image: PROJECT_CARD_DEFAULT_IMAGE,
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
