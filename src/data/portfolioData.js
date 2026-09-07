export const portfolioData = {
  personal: {
    name: "Priyanshu Kumar",
    title: "Full-Stack & Generative AI Software Engineer",
    tagline: "Engineering real-time, interactive, and AI-powered web platforms.",
    email: "priyanshu886291@gmail.com",
    phone: "+91 6202763514",
    location: "India",
    github: "https://github.com/priyanshu886291kumar",
    linkedin: "https://www.linkedin.com/in/priyanshu-kumar-048a37258/",
    codolio: "https://codolio.com/profile/priyanshu8862",
    leetcode: "https://leetcode.com/u/priyanshu79033_coder/",
    bio: "Software Engineer with 6 months of production experience at MAQ Software and hands-on expertise in full-stack and Generative AI application development. Skilled in React.js, Node.js, FastAPI, WebSockets (Socket.IO), WebRTC, MongoDB, PostgreSQL, Docker, and LangChain with 600+ DSA problems solved.",
  },
  stats: {
    dsaSolved: "600+",
    experienceMonths: "6 Mos",
    college: "IIIT Guwahati '26",
    dsaBreakdown: {
      easy: 180,
      medium: 360,
      hard: 60,
    },
    achievements: [
      {
        title: "600+ DSA Problems Solved",
        desc: "Tracked across LeetCode & GeeksforGeeks on Codolio with 100-Day Coding Challenge badge.",
        highlight: "600+ Solved",
      },
      {
        title: "Flipkart GRID 6.0 & 7.0",
        desc: "Shortlisted in GRID 6.0 (Level 1.1) and cleared Coding Round 1 in GRID 7.0.",
        highlight: "Finalist & Rd 1",
      },
      {
        title: "JEE Mains All India Rank",
        desc: "Secured top 2% nationwide rank among 1,200,000+ candidates.",
        highlight: "AIR 26,373",
      },
    ]
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C / C++", "HTML5 / CSS3"],
    frontend: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive UI", "WebRTC", "Socket.IO Client"],
    backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Auth", "Stripe Webhooks"],
    aiml: ["Google Gemini API", "LangChain", "DeepFace", "Sentence Transformers (MiniLM)", "newspaper3k"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis (Caching & State)"],
    tools: ["Docker", "Redis", "Git / GitHub", "Vercel", "Render", "AWS Fundamentals", "VS Code", "IntelliJ IDEA"],
  },
  projects: [
    {
      id: "convocam",
      title: "ConvoCam — Real-Time Chat & Video Calling Platform",
      category: "realtime",
      date: "Jul 2025",
      featured: true,
      repo: "https://github.com/priyanshu886291kumar/ConvoCam",
      description: "Built a production-ready full-stack chat & video calling platform supporting peer-to-peer video via WebRTC, JWT authentication, friend requests, and real-time online presence tracking.",
      highlights: [
        { label: "WebSockets & WebRTC", text: "Low-latency Socket.IO room signaling, typing indicators, delivery receipts, and peer-to-peer streaming." },
        { label: "AI Smart Replies", text: "Integrated Google Gemini API for context-aware message replies and on-the-fly multi-language translations." },
        { label: "Media & Theming", text: "Cloudinary media uploads with file size validation, 30+ responsive themes, and infinite chat scrolling." },
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Gemini API", "Cloudinary"],
    },
    {
      id: "emotion-music",
      title: "Emotion-Based Music Player — AI-Driven Streaming App",
      category: "ai",
      date: "Jan 2025",
      featured: false,
      repo: "https://github.com/priyanshu886291kumar/emotion_based.music-player",
      description: "Developed a music streaming application with real-time facial emotion detection using DeepFace and Spotify API, dynamically mapping multiple facial emotions to personalized playlists.",
      highlights: [
        { label: "DeepFace & Vision", text: "Real-time webcam facial emotion recognition mapped to Spotify audio features." },
        { label: "Redis & PostgreSQL", text: "Redis caching for instant playlist retrieval and PostgreSQL schema for accounts & subscription tiers." },
        { label: "Docker & Stripe", text: "Containerized deployment with Docker and Stripe subscription billing with webhook verification." },
      ],
      tags: ["React.js", "Node.js", "Express.js", "DeepFace", "Spotify API", "Redis", "PostgreSQL", "Docker", "Stripe"],
    },
    {
      id: "ai-news-curator",
      title: "AI News Curator — Automated Pipeline & Translation Platform",
      category: "ai",
      date: "Jan 2026",
      featured: false,
      repo: "https://github.com/priyanshu886291kumar/AI-News-Curator",
      description: "Built a full-stack AI news platform for retrieval, semantic clustering, summarization, and translation across 7 categories, improving curation efficiency by 30%.",
      highlights: [
        { label: "2 LangChain Agents", text: "MiniLM sentence embeddings for semantic clustering and newspaper3k for automated content extraction." },
        { label: "Multi-lingual APIs", text: "Integrated NewsAPI, Google Gemini, Google Translate (5 languages), Company Enrich, and deployed on Render." },
      ],
      tags: ["React.js", "Python", "FastAPI", "LangChain", "Google Gemini", "NewsAPI", "Google Translate", "Render"],
    }
  ],
  experience: [
    {
      company: "MAQ Software",
      role: "Associate Software Engineer (Intern)",
      duration: "Jan 2026 – Jun 2026 (6 Months)",
      bullets: [
        "Enhanced production JavaScript web resources by introducing structured logging and Azure Application Insights integration, improving traceability and reducing diagnostic time.",
        "Validated changes end-to-end across 3 environments (Test, RB, and PPE) by triggering flows and confirming telemetry through KQL queries in Application Insights.",
        "Authored and executed test cases covering logging scenarios and edge cases to ensure reliability before production release."
      ],
      tags: ["JavaScript", "Dynamics 365", "Power Platform", "Azure Application Insights", "KQL"],
    }
  ],
  education: [
    {
      school: "Indian Institute of Information Technology (IIIT) Guwahati",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      score: "CGPA: 7.30",
      year: "2022 – 2026",
    },
    {
      school: "Gaya College",
      degree: "Class XII, Bihar Board",
      score: "85.8%",
      year: "2021 – 2022",
    },
    {
      school: "Gyan Bharti Public School",
      degree: "Class X, CBSE",
      score: "94.2%",
      year: "2019 – 2020",
    }
  ],
  certifications: [
    {
      title: "Data Structures & Algorithms Specialization",
      issuer: "Physics Wallah",
      desc: "Covering arrays, trees, graphs, dynamic programming, and algorithm optimization."
    },
    {
      title: "HTML, CSS, JavaScript, and TypeScript Certifications",
      issuer: "Verified Credentials",
      desc: "Modern frontend architecture, ES6+, responsive design, and asynchronous full-stack development."
    }
  ]
};
