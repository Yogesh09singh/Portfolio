export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  impactMetric: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: 'AI/ML' | 'Full-Stack' | 'Web Apps';
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl: string;
  summary: string;
  keyMetrics: string[];
  detailedHighlights: string[];
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialBadge: string;
  skills: string[];
}

export interface SkillCardCategory {
  categoryName: string;
  description: string;
  skills: { name: string; iconName?: string; tag: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yogesh Singh",
    title: "Full Stack Developer & Machine Learning Engineer",
    subTitle: "Building AI Powered Products",
    shortBio: "Building intelligent AI applications & scalable full-stack web products with React, Python, Flask, and FastAPI.",
    objective: "Full-Stack Developer with hands-on Machine Learning experience, having built and deployed 3+ AI-powered applications in NLP, computer vision, and predictive analytics. Skilled in Python, JavaScript, React.js, and Flask, with 2 internships delivering 5+ production-ready web projects. Seeking to apply full-stack and ML expertise to build scalable, data-driven products.",
    email: "yogeshsingh1425@gmail.com",
    phone: "+91 9369116960",
    location: "India (Uttar Pradesh / Mumbai)",
    linkedin: "https://linkedin.com/in/yogeshsinghdev",
    github: "https://github.com/Yogesh09singh",
    statusBadge: "Open To Work • India • Available for Internship",
    profilePhoto: "/assets/yogesh_profile.jpg"
  },

  stats: [
    { label: "AI-Powered Apps", value: 3, suffix: "+" },
    { label: "Industry Internships", value: 2, suffix: "" },
    { label: "Production Web Projects", value: 5, suffix: "+" },
    { label: "Industry Certifications", value: 4, suffix: "" },
  ],

  education: {
    institution: "Noida Institute of Engineering and Technology (NIET)",
    degree: "B.Tech in Computer Science",
    specialization: "Cloud Computing",
    period: "July 2023 – May 2027",
    location: "Uttar Pradesh, India",
    cgpa: "7.87 / 10",
    highlights: [
      "Specialized in Cloud Computing architectures and distributed systems",
      "Consistent academic performance with CGPA 7.87/10",
      "Hands-on technical project development alongside rigorous CS curriculum"
    ]
  },

  experiences: [
    {
      id: "prodigy-infotech",
      company: "Prodigy Infotech",
      role: "Web Development Intern",
      period: "Jul 2025 – Present",
      location: "Mumbai, MH",
      highlights: [
        "Developed 4+ responsive web applications using HTML, CSS, and JavaScript, improving UI/UX quality through dynamic components and real-time functionality.",
        "Built 3 interactive frontend projects (Tic Tac Toe, API-based weather app, real-time stopwatch), reducing average page load time by 30% through optimized event handling."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "UI/UX Design"],
      impactMetric: "30% Page Load Speedup"
    },
    {
      id: "codsoft",
      company: "Codsoft",
      role: "Web Development Intern",
      period: "Jun 2024 – Jul 2024",
      location: "Mumbai, MH",
      highlights: [
        "Delivered 5+ full-stack web projects involving frontend and backend workflows, gaining hands-on exposure to modern frameworks and reusable component modules.",
        "Reduced code review cycles by 40% by enforcing structured debugging and collaborative coding practices across team projects."
      ],
      technologies: ["JavaScript", "React.js", "Full-Stack Workflows", "Modular Architecture"],
      impactMetric: "40% Faster Review Cycles"
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "multimodal-search",
      title: "AI-Based Multimodal Search Engine",
      year: "2025",
      category: "AI/ML",
      techStack: ["Python", "NLP", "Computer Vision", "Flask"],
      githubUrl: "https://github.com/Yogesh09singh",
      imageUrl: "/assets/project_multimodal_search.png",
      summary: "Intelligent search engine handling 3 query modalities (text, voice, image) using NLP and computer vision, improving query accuracy by 35% over keyword-only search.",
      keyMetrics: ["35% Query Accuracy Boost", "Sub-2s Average Latency", "3 Query Modalities"],
      detailedHighlights: [
        "Built multi-modal search engine handling text, voice waveform, and image inputs.",
        "Integrated semantic search with voice recognition and OpenCV image processing pipelines.",
        "Achieved sub-2s average response time across all search modalities."
      ],
      featured: true
    },
    {
      id: "voice-recognition",
      title: "Real-Time Voice Recognition System",
      year: "2025",
      category: "AI/ML",
      techStack: ["Python", "Deep Learning", "NLP", "Audio Processing"],
      githubUrl: "https://github.com/Yogesh09singh",
      imageUrl: "/assets/project_voice_recognition.png",
      summary: "Real-time speech-to-text engine using deep learning, achieving <1s transcription latency with 92%+ accuracy on noisy audio inputs.",
      keyMetrics: ["<1s Transcription Latency", "92%+ Accuracy on Noisy Audio", "60% Noise Reduction"],
      detailedHighlights: [
        "Reduced background noise by 60% using spectral subtraction and Wiener filtering.",
        "Integrated NLP for contextual post-processing and adaptive learning.",
        "Delivered sub-second real-time voice-to-text stream processing."
      ],
      featured: true
    },
    {
      id: "github-dashboard",
      title: "GitHub Repository Intelligence Dashboard",
      year: "2026",
      category: "Full-Stack",
      techStack: ["React", "FastAPI", "MongoDB", "Gemini AI", "Docker", "ReportLab", "Recharts"],
      githubUrl: "https://github.com/Yogesh09singh",
      imageUrl: "/assets/project_github_dashboard.png",
      summary: "Full-stack AI-powered dashboard analyzing public GitHub repositories — fetching contributor stats, language distribution, and generating narrative summaries using Google Gemini AI.",
      keyMetrics: ["4 Gemini Model Fallbacks", "1-Click PDF Report Export", "JWT Authentication"],
      detailedHighlights: [
        "Fetches contributor stats, language distribution, and commit activity via GitHub API.",
        "Generates narrative repository summaries using Google Gemini AI with automatic model fallback across 4 Gemini versions.",
        "Implemented JWT-based authentication, side-by-side repo comparison with grouped bar charts (Recharts), live trending repos feed, and ReportLab PDF export.",
        "Containerized with Docker Compose for seamless zero-config deployment."
      ],
      featured: true
    }
  ] as ProjectItem[],

  skillCardCategories: [
    {
      categoryName: "Languages",
      description: "Core programming languages powering frontend & backend systems",
      skills: [
        { name: "Python", tag: "Advanced" },
        { name: "JavaScript", tag: "Advanced" },
        { name: "Java", tag: "Proficient" },
        { name: "C", tag: "Intermediate" },
        { name: "HTML5 / CSS3", tag: "Expert" }
      ]
    },
    {
      categoryName: "Frontend & UI",
      description: "Crafting modern, responsive user interfaces & design systems",
      skills: [
        { name: "React.js", tag: "Advanced" },
        { name: "Tailwind CSS", tag: "Expert" },
        { name: "TypeScript", tag: "Proficient" },
        { name: "Framer Motion", tag: "Proficient" }
      ]
    },
    {
      categoryName: "Backend & Web APIs",
      description: "Building resilient RESTful services & microservices",
      skills: [
        { name: "Flask", tag: "Advanced" },
        { name: "FastAPI", tag: "Advanced" },
        { name: "RESTful APIs", tag: "Expert" },
        { name: "JWT Auth", tag: "Proficient" }
      ]
    },
    {
      categoryName: "AI / ML & Computer Vision",
      description: "Deep learning, natural language processing & computer vision models",
      skills: [
        { name: "Machine Learning", tag: "Advanced" },
        { name: "Deep Learning", tag: "Proficient" },
        { name: "NLP", tag: "Advanced" },
        { name: "Computer Vision", tag: "Proficient" },
        { name: "OpenCV", tag: "Advanced" },
        { name: "Scikit-Learn", tag: "Advanced" },
        { name: "NumPy & Pandas", tag: "Expert" }
      ]
    },
    {
      categoryName: "Databases & Storage",
      description: "Relational & NoSQL database management and optimization",
      skills: [
        { name: "MongoDB", tag: "Advanced" },
        { name: "MySQL", tag: "Proficient" }
      ]
    },
    {
      categoryName: "Cloud & Developer Tools",
      description: "Cloud architecting, containerization & version control",
      skills: [
        { name: "AWS (Cloud Architecting)", tag: "Certified" },
        { name: "Docker", tag: "Proficient" },
        { name: "Git & GitHub", tag: "Expert" },
        { name: "Postman", tag: "Advanced" }
      ]
    }
  ] as SkillCardCategory[],

  certifications: [
    {
      id: "aws-cloud",
      name: "AWS Academy Graduate – Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      date: "Nov 2025",
      credentialBadge: "AWS Certified",
      skills: ["Cloud Computing", "AWS Infrastructure", "Architecting", "Security & Storage"]
    },
    {
      id: "cisco-network",
      name: "Network Technician Career Path",
      issuer: "Cisco",
      date: "Nov 2025",
      credentialBadge: "Cisco Verified",
      skills: ["Networking Protocols", "Routing & Switching", "Network Security", "TCP/IP"]
    },
    {
      id: "infosys-java",
      name: "Programming using Java",
      issuer: "Infosys Springboard",
      date: "Apr 2025",
      credentialBadge: "Infosys Certified",
      skills: ["Core Java", "OOP Principles", "Data Structures", "Java Collections"]
    },
    {
      id: "hackerrank-sql",
      name: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Feb 2025",
      credentialBadge: "HackerRank Verified",
      skills: ["Complex Queries", "Joins & Subqueries", "Database Indexing", "Performance Tuning"]
    }
  ] as CertificationItem[],

  achievements: [
    "Completed 2 industry internships (Prodigy Infotech & Codsoft), delivering 5+ production-ready web projects.",
    "Earned 4 industry certifications from AWS, Cisco, Infosys Springboard, and HackerRank within 12 months.",
    "B.Tech Computer Science (Cloud Computing) at NIET with 7.87/10 CGPA."
  ],

  languages: [
    { name: "English", proficiency: "Professional Proficiency" },
    { name: "Hindi", proficiency: "Native / Fluent" }
  ]
};
