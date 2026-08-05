export const SAAS_PRODUCT_DETAILS: Record<string, {
  title: string;
  points: string[];
  description: string;
  structuredContent?: {
    sections: Array<{
      title: string;
      content: string[];
      image?: string;
      images?: string[];
    }>;
    gallery?: string[];
  };
  links?: {
    frontend?: string;
    backend?: string;
    github?: string;
  };
}> = {
  fortress: {
    title: "Fortress",
    description: "Privacy-focused password manager and identity gateway with email aliasing capabilities, built with ASP.NET Core backend, Next.js frontend, and Chrome extension.",
    points: [
      "Built a privacy-focused password manager and identity gateway that securely generates, stores, and auto-fills credentials across websites.",
      "Architected a full-stack system using Clean Architecture principles with ASP.NET Core 9 REST API backend, Next.js frontend dashboard, and Chrome/Edge browser extension.",
      "Implemented secure credential storage with AES-GCM encryption and Argon2id password hashing, ensuring all cryptographic operations occur exclusively on the backend.",
      "Designed email aliasing functionality to prevent identity leakage by generating unique email addresses for each online service.",
      "Created a browser extension that detects login forms and securely auto-fills credentials using JWT-authenticated API calls.",
    ],
    links: {
      github: "https://github.com/prajwal2021/Fortress",
    },
    structuredContent: {
      sections: [
        {
          title: "Project Overview",
          content: [
            "I built Fortress, a privacy-focused password manager and identity gateway designed to securely generate, store, and auto-fill credentials.",
            "The system includes email aliasing capabilities to prevent identity leakage and protect users from data tracking and spam.",
            "Fortress is built as a full-stack application with three main components: an ASP.NET Core REST API backend, a Next.js frontend dashboard, and a Chrome/Edge browser extension.",
          ],
        },
        {
          title: "Problem Statement",
          content: [
            "Users need a secure way to manage passwords and identities across multiple online services without exposing their real email addresses.",
            "Traditional password managers lack identity isolation features, making users vulnerable to data breaches and identity tracking.",
            "Browser-based credential management requires seamless integration with websites while maintaining strict security standards.",
            "Cryptographic operations must be performed securely on the backend to prevent exposure of encryption keys and sensitive logic to client applications.",
          ],
        },
        {
          title: "Technology Stack Used",
          content: [
            "Backend: ASP.NET Core 9, Entity Framework Core, PostgreSQL",
            "Frontend: Next.js,",
            "Browser Extension: Chrome Extension APIs, JavaScript",
            "Security: JWT authentication, Argon2id password hashing, AES-GCM encryption",
            "Database: PostgreSQL with encrypted data storage",
            "Architecture: Clean Architecture pattern with API, Application, Domain, and Infrastructure layers",
          ],
        },
        {
          title: "System Architecture",
          content: [
            "I architected the backend using Clean Architecture principles, organizing code into four distinct layers: API layer for controllers, Application layer for use cases and business logic, Domain layer for entities, and Infrastructure layer for data access and security.",
            "The client layer consists of a Next.js frontend dashboard for managing credentials and identities, and a Chrome/Edge browser extension for password generation and auto-fill functionality.",
            "All client applications communicate with the backend using HTTPS and JWT-secured REST APIs, ensuring authenticated and encrypted communication.",
            "The Infrastructure layer handles Entity Framework Core with PostgreSQL provider for data persistence, AES-GCM encryption key management for credential encryption, Argon2id password hashing for user authentication, and JWT validation for identity context management.",
            "PostgreSQL serves as the primary database, storing encrypted credential data and user information securely.",
          ],
          images: [
            "/fortress-architecture-full.png",
            "/fortress-architecture-infra.png",
          ],
        },
        {
          title: "Key Features",
          content: [
            "Secure password generation with customizable complexity requirements",
            "Email alias generation for identity isolation across different online services",
            "Encrypted credential storage using AES-GCM encryption",
            "Browser-based auto-fill functionality that detects login forms and injects credentials securely",
            "Central dashboard for managing identities, credentials, and email aliases",
            "JWT-based authentication with secure token management",
            "One-click identity generation directly from browser extension on any website",
          ],
        },
        {
          title: "Implementation Details",
          content: [
            "I implemented the backend as an ASP.NET Core 9 REST API following Clean Architecture, with clear separation between API controllers, application use cases, domain entities, and infrastructure concerns.",
            "The Application layer orchestrates business logic for password generation, email alias creation, credential storage, and retrieval operations.",
            "I used Entity Framework Core as the ORM for database interactions, configuring it with PostgreSQL provider and implementing database migrations for schema management.",
            "The Infrastructure layer encapsulates all security operations, including Argon2id password hashing, AES-GCM encryption for stored credentials, and JWT token generation and validation.",
            "I built the Next.js frontend dashboard to provide a user interface for managing credentials, viewing email aliases, and configuring identity settings.",
            "The Chrome/Edge browser extension detects login forms on web pages, communicates with the backend API using JWT tokens, and securely injects generated credentials into form fields.",
            "All cryptographic operations, including password hashing and credential encryption, are performed exclusively on the backend to ensure encryption keys and sensitive logic are never exposed to client applications.",
          ],
        },
        {
          title: "Security & Data Protection",
          content: [
            "I implemented JWT-based authentication where tokens are securely generated on the backend and transmitted to clients for subsequent API requests.",
            "User passwords are hashed using Argon2id algorithm before storage, providing strong protection against brute-force attacks.",
            "Stored credentials are encrypted using AES-GCM encryption, with encryption keys managed securely on the backend infrastructure layer.",
            "All API communication between clients and backend is secured using HTTPS, and JWT tokens are required for authenticated requests.",
            "I ensured that no encryption keys, hashing algorithms, or sensitive cryptographic logic are exposed to the frontend or browser extension.",
            "The Infrastructure layer handles all security operations, including JWT validation and identity context management, ensuring consistent security enforcement across the application.",
            "PostgreSQL database stores encrypted data, and Entity Framework Core manages secure database connections and transactions.",
          ],
        },
      ],
    },
  },
  promptify: {
    title: "Promptify AI",
    description: "Chrome Extension-based AI tool that transforms selected text into structured prompts using Gemini AI.",
    points: [
      "Built a Chrome Extension with three-component architecture: popup.js for authentication, content.js for text selection and UI injection, and background.js for secure API communication.",
      "Architected a Node.js Express REST API backend that handles authentication, prompt generation, and AI requests with JWT-secured endpoints.",
      "Integrated MongoDB Atlas for secure user authentication data storage and Gemini AI API for generating explanations, summaries, and structured prompts.",
      "Implemented security-first design ensuring API keys and sensitive logic remain server-side, with all client-server communication secured via JWT tokens.",
    ],
    links: {
      github: "https://github.com/prajwal2021/promptify_ai",
    },
    structuredContent: {
      sections: [
        {
          title: "Project Overview",
          content: [
            "I built Promptify AI, a Chrome Extension that enables users to transform selected text into structured AI prompts.",
            "The application runs entirely within the user's browser as a Chrome Extension and communicates with a secure backend to leverage Gemini AI for generating explanations, summaries, comparisons, and structured prompts.",
          ],
        },
        {
          title: "Problem Statement",
          content: [
            "Users often struggle to craft effective prompts when working with AI tools.",
            "Raw text selections need to be transformed into structured, context-aware prompts that produce high-quality AI responses.",
            "This requires both a seamless user experience within the browser and secure handling of AI API interactions.",
          ],
        },
        {
          title: "System Architecture",
          content: [
            "The application runs as a Chrome Extension inside the user's browser, split into three components: popup.js/popup.html handles authentication and user status, content.js detects selected text and injects UI elements, and background.js serves as a service worker that securely handles API communication.",
            "The extension communicates with a Node.js Express backend using HTTP requests secured with JWT tokens.",
            "The backend exposes REST APIs for authentication, prompt generation, and AI requests.",
            "MongoDB Atlas stores user authentication data securely, and the backend integrates with the Gemini AI API to generate explanations, summaries, comparisons, and structured prompts.",
            "All API keys and sensitive logic remain server-side and are never exposed to the client.",
          ],
          image: "/promptify-architecture.png",
        },
        {
          title: "Technology Stack",
          content: [
            "Frontend: Chrome Extension APIs, Vanilla JavaScript (ES6+), HTML, CSS",
            "Backend: Node.js, Express.js, REST APIs",
            "Database: MongoDB Atlas, Mongoose",
            "Authentication: JWT, bcrypt",
            "AI Integration: Gemini API",
            "Deployment: Vercel",
          ],
        },
        {
          title: "Implementation Details",
          content: [
            "I implemented the Chrome Extension using Manifest V3 architecture with separate components for UI, content interaction, and background processing.",
            "The content.js script uses DOM manipulation to detect text selections and injects a floating UI that appears contextually on web pages.",
            "The background.js service worker handles all API communication, ensuring that sensitive operations never run in the content script context.",
            "I designed the backend Express API with RESTful endpoints for authentication, user management, and AI prompt generation.",
            "I integrated MongoDB Atlas using Mongoose for schema management and implemented JWT-based authentication with bcrypt for password hashing.",
            "The Gemini AI API integration processes user-selected text and generates structured prompts with appropriate context and formatting.",
          ],
        },
        {
          title: "Security & Authentication",
          content: [
            "I implemented JWT-based authentication where tokens are securely stored and transmitted with each API request.",
            "All authentication endpoints use bcrypt for password hashing, and user credentials are stored securely in MongoDB Atlas.",
            "API keys for Gemini AI are stored exclusively on the backend server and never exposed to the client.",
            "The background.js service worker ensures that all API calls are made from a secure context, preventing exposure of sensitive credentials.",
            "All HTTP communication between the extension and backend is secured with JWT tokens, and I implemented proper error handling to prevent information leakage.",
          ],
        },
      ],
    },
  },
  countdown: {
    title: "Countdown",
    description: "A Next.js application that enables users to create and manage personalized countdown timers with secure authentication and an interactive interface.",
    points: [
      "Built a Next.js application bootstrapped with create-next-app, enabling users to create and manage personalized countdown timers for tracking important upcoming moments with precise countdowns.",
      "Implemented user authentication powered by NextAuth.js, utilizing the Google Provider to secure and personalize user experiences, ensuring each user's countdowns are private and accessible only to them.",
      "Designed a dynamic and interactive interface leveraging the latest features of Next.js to provide a seamless and engaging platform for creating, viewing, and managing multiple countdown timers.",
      "Developed a date calculator functionality that allows users to calculate days between dates and add extra days to calculations, enhancing the countdown experience with flexible date management.",
    ],
    links: {
      github: "https://github.com/prajwal2021/countdown/tree/main/countdown",
      frontend: "https://countdown-omega-amber.vercel.app/",
    },
  },
  "security-analyser": {
    title: "Cloudflare AI Website Security Analyzer",
    description: "AI-powered website security analyzer built entirely on Cloudflare's serverless platform, combining real infrastructure, AI, and state management.",
    points: [
      "Built an AI-powered website security analyzer that analyzes HTTP headers and provides security-focused insights using Cloudflare Workers AI (Llama 3.3).",
      "Implemented session-based state management using Durable Objects to store analyzed URLs, security headers, AI-generated reports, and chat history for context-aware conversations.",
      "Architected the full-stack application using Cloudflare Worker as the backend coordinator, handling URL validation, header fetching, prompt construction, AI calls, and CORS handling.",
      "Created a conversational chat interface where users can ask follow-up questions like 'What is CSP?', 'How serious is this issue?', and 'How can I fix this?' with AI responses that maintain full context from the analysis.",
      "Deployed frontend on Cloudflare Pages and backend API on Cloudflare Workers, running entirely on Cloudflare's free tier with no external backend services required.",
      "The system fetches website HTTP response headers, extracts security-relevant headers, generates plain-English security analysis via Workers AI, and stores everything in Durable Objects for persistent, contextual conversations.",
    ],
    links: {
      frontend: "https://security-analyzer.pages.dev/",
      backend: "https://cf-ai-security-analyzer-worker.prajw81020.workers.dev",
      github: "https://github.com/prajwal2021/cloudflare-ai-security-analyzer",
    },
  },
  clearbill: {
    title: "ClearBill",
    description: "AI tool that helps patients understand and challenge medical bills, turning confusing medical bills into clarity, confidence, and action.",
    points: [
      "Built an AI-powered tool that helps patients understand and challenge medical bills by uploading bills and extracting charges within seconds.",
      "Implemented a Fairness Score system that summarizes how clean the bill is, providing transparent and explainable scoring that reflects 'worth reviewing' rather than correctness.",
      "Created visual highlighting system (red and yellow) that identifies potential issues like duplicate charges, vague descriptions, temporal inconsistencies, and place-of-service inconsistencies.",
      "Developed an interactive Q&A feature where users can ask ClearBill why something was flagged, receiving clear explanations in plain language with full context.",
      "Implemented one-click dispute letter generation that creates professional, neutral-toned letters requesting clarification or itemization, including user guidance on who typically receives the letter.",
      "Architected the full-stack application using Next.js 14, TypeScript, Tailwind CSS, Supabase (Postgres + Storage), and Gemini (text + vision) for OCR and analysis, deployed on Vercel.",
    ],
    links: {
      github: "https://github.com/prajwal2021/ClearBill",
      frontend: "https://clear-bill-phi.vercel.app/",
    },
  },
  ash: {
    title: "Ash — AI-Powered Personal OS for Graduate Students",
    description: "A serverless progressive web app that replaces five separate tools with one AI assistant — managing academic deadlines, tasks, finances, and grades through voice and text conversation.",
    points: [
      "Built a personal productivity system entirely from scratch to solve real problem of juggling coursework deadlines, grad assistant work, personal tasks, and finances across multiple devices with no unified system.",
      "Architected the entire application to ship as a single HTML file with no build step, no framework, and no backend server — yet supports real-time cross-device sync, AI conversation, voice input, live Canvas LMS integration, and persistent cloud storage.",
      "Engineered zero-dependency architecture using Vanilla JS, HTML/CSS with no npm or bundler, running as a Progressive Web App installable directly from the browser on any device.",
      "Implemented AI layer using Gemini API to power a context-aware assistant that knows current deadlines, pending todos, monthly spending, and GPA projections — providing personalized answers instead of generic responses.",
      "Designed and built iCal feed parsing from scratch to integrate with Canvas LMS, created multi-proxy CORS fallback chain for reliability, and implemented automatic localStorage-to-cloud migration on first Supabase connect.",
      "Built QR-code device pairing system, integrated Web Speech API for voice input, and leveraged Supabase (PostgreSQL + real-time sync) for persistent cloud storage with automatic cross-device synchronization.",
    ],
    structuredContent: {
      sections: [
        {
          title: "Project Overview",
          content: [
            "Ash is a personal productivity system I designed and built entirely from scratch to solve a real problem — juggling coursework deadlines, grad assistant work, personal tasks, and finances across multiple devices with no unified system.",
            "Rather than using off-the-shelf apps, I built a custom solution that fits exactly how I work.",
            "The entire application ships as a single HTML file with no build step, no framework, and no backend server — yet supports real-time cross-device sync, AI conversation, voice input, live Canvas LMS integration, and persistent cloud storage.",
            "It runs as a Progressive Web App installable directly from the browser on any device.",
          ],
        },
        {
          title: "Problem Statement",
          content: [
            "Graduate students juggle multiple responsibilities: coursework deadlines, teaching assistant duties, personal tasks, and financial management — often across different devices without a unified system.",
            "Existing tools require switching between multiple apps (Google Calendar, Google Tasks, banking apps, LMS platforms) with no intelligent coordination.",
            "Users need a single, AI-powered assistant that understands their complete context and can provide personalized recommendations based on current deadlines, workload, finances, and academic performance.",
            "The system must work offline, sync seamlessly across devices, and integrate directly with academic platforms like Canvas.",
          ],
        },
        {
          title: "Technology Stack",
          content: [
            "Frontend: Vanilla JavaScript, HTML, CSS (zero-dependency, single HTML file)",
            "AI: Gemini 2.5 Flash API for context-aware conversational responses",
            "Backend & Storage: Supabase (PostgreSQL + real-time sync)",
            "LMS Integration: Canvas LMS iCal API for automatic deadline sync",
            "Voice: Web Speech API for voice input and natural conversation",
            "Deployment: GitHub Pages as static hosting",
            "Development: No build tools, no npm, no bundler",
          ],
          image: "/ash-architecture.svg",
        },
        {
          title: "System Architecture Diagram",
          content: [
            "The architecture is built around a single index.html file that serves as the entire application, eliminating the need for any backend server or build tools.",
            "Multiple client devices (iPhone, Laptop) connect to the central application, which maintains offline cache in localStorage for seamless offline functionality.",
            "GitHub Pages hosts the application as a static file, with no server-side processing required.",
            "The application integrates with three external APIs: Supabase for real-time cloud synchronization, Gemini API for AI-powered conversations, and Canvas iCal for automatic deadline fetching.",
            "Web Speech API enables voice interaction directly in the browser, while all services communicate securely and sync across devices in real-time.",
          ],
        },
        {
          title: "Key Architecture Decisions",
          content: [
            "Zero-dependency architecture: The entire app is a single HTML file with embedded JavaScript and CSS, requiring no npm dependencies, build step, or bundler. This ensures maximum portability and minimal deployment complexity.",
            "iCal feed parsing from scratch: Implemented custom iCal parser to pull deadlines directly from Canvas LMS without API authentication, making integration seamless and automatic.",
            "Multi-proxy CORS fallback chain: Built resilient proxy fallback system to handle CORS limitations when fetching external resources, ensuring reliability across different network environments.",
            "Automatic localStorage-to-cloud migration: On first Supabase connection, the app automatically migrates all locally stored data to cloud, enabling seamless offline-first experience that syncs when online.",
            "QR-code device pairing: Implemented secure device pairing using QR codes, allowing users to synchronize data across multiple devices without manual authentication.",
            "Progressive Web App capabilities: The app installs directly from the browser on any device (desktop, tablet, phone) and works offline with automatic sync when connectivity returns.",
          ],
        },
        {
          title: "Core Features",
          content: [
            "AI Conversational Assistant: Ask questions like 'what should I focus on today?' and receive personalized answers based on your complete context (deadlines, tasks, spending, GPA).",
            "Academic deadline tracking: Automatic integration with Canvas LMS via iCal feeds pulls course deadlines and assignment due dates in real-time.",
            "Task & Todo Management: Create, organize, and prioritize personal tasks with intelligent scheduling suggestions from the AI.",
            "Financial tracking: Log and categorize monthly spending, receive insights on spending patterns, and get AI-driven budget recommendations.",
            "GPA projection: Track grades across courses and receive AI-generated GPA projections based on current performance and course load.",
            "Voice interaction: Use Web Speech API for hands-free voice commands and natural conversation with the assistant.",
            "Cross-device synchronization: Real-time sync across all devices using Supabase subscriptions — changes on one device instantly appear on others.",
            "Offline-first experience: All data stored locally with automatic cloud sync, ensuring full functionality even without internet connectivity.",
          ],
          image: "/ash-features.svg",
        },
        {
          title: "Implementation Details",
          content: [
            "The application is built as a single HTML file that bootstraps immediately without any build process or external dependencies.",
            "Vanilla JavaScript handles all functionality: DOM manipulation, state management, API communication, local storage, and service worker registration for PWA capabilities.",
            "The iCal parser extracts events from Canvas LMS feeds by parsing the iCal format directly, extracting due dates, course names, and assignment titles.",
            "Supabase integration handles real-time data synchronization using PostgREST for data operations and Realtime subscriptions for live updates across devices.",
            "The Gemini API integration constructs rich context prompts that include the user's current deadlines, pending tasks, monthly spending totals, and GPA data — enabling the AI to provide genuinely personalized responses.",
            "Web Speech API enables voice input transcription and voice output for read-back of AI responses, creating a natural conversational interface.",
            "Service worker registration enables PWA installation and offline functionality, with automatic sync queuing for operations performed while offline.",
            "QR-code pairing implementation uses a unique device ID and verification code approach, allowing users to link new devices securely without sharing sensitive credentials.",
          ],
        },
        {
          title: "Real-World Usage",
          content: [
            "Ash is a real tool that I use daily as a graduate student, not just a class project or demo application.",
            "The system has been refined through months of actual use, solving genuine productivity problems that other tools don't address.",
            "Typical workflow: Open Ash on my phone/laptop each morning, voice-query 'prioritize my week', receive personalized recommendations based on deadlines and spending, update tasks as I complete them, and sync everything across all devices.",
            "The ability to ask context-aware questions (e.g., 'which assignment should I start first?') and get intelligent answers based on deadline proximity, difficulty, and current workload is the key differentiator.",
          ],
        },
      ],
    },
    links: {
      frontend: "https://prajwal2021.github.io/ash-dashboard",
      github: "https://github.com/prajwal2021/ash-dashboard",
    },
  },
};
