// Mock data based on GitHub profile analysis
export const portfolioData = {
  profile: {
    name: "Yugansh",
    username: "yugansh25",
    tagline: "LemonQuote#73",
    bio: "Software Developer | Data Science Enthusiast | Open Source Contributor",
    location: "Hyderabad, India",
    avatar: "https://avatars.githubusercontent.com/u/65813503?v=4",
    githubUrl: "https://github.com/yugansh25",
    email: "Hello@yugansh.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    website: "https://yourwebsite.com"
  },

  skills: [
    { name: "JavaScript", category: "language", icon: "Code2" },
    { name: "Python", category: "language", icon: "Code2" },
    { name: "Shell", category: "language", icon: "Terminal" },
    { name: "React", category: "framework", icon: "Atom" },
    { name: "Node.js", category: "framework", icon: "Server" },
    { name: "FastAPI", category: "framework", icon: "Zap" },
    { name: "MongoDB", category: "database", icon: "Database" },
    { name: "Data Science", category: "domain", icon: "BarChart3" },
    { name: "Machine Learning", category: "domain", icon: "Brain" },
    { name: "Git", category: "tool", icon: "GitBranch" },
    { name: "Docker", category: "tool", icon: "Container" },
    { name: "Linux", category: "tool", icon: "Monitor" }
  ],

  projects: [
    {
      id: 1,
      name: "Triage Enrichment System",
      description: "Automated system designed to handle incoming support items (emails, tickets, chat logs) by intelligently classifying them and enriching them with useful metadata. Streamlines support workflows with AI-powered categorization.",
      tech: ["JavaScript", "Node.js", "AI/ML", "Automation"],
      githubUrl: "https://github.com/yugansh25/triage_enrichment_system",
      demoUrl: null,
      stars: 1,
      featured: true
    },
    {
      id: 2,
      name: "Twitter Sentiment Analysis",
      description: "Machine learning project that analyzes Twitter data to determine sentiment patterns. Implements natural language processing techniques to classify tweets as positive, negative, or neutral.",
      tech: ["Python", "NLP", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/yugansh25/Twitter-Sentimental-Analysis",
      demoUrl: null,
      stars: 0,
      featured: true
    },
    {
      id: 3,
      name: "Python Random Quote",
      description: "A lightweight file-based quote bot written in Python. Fetches and displays random inspirational quotes. Simple yet effective tool for daily motivation.",
      tech: ["Python", "CLI", "Automation"],
      githubUrl: "https://github.com/yugansh25/python-random-quote",
      demoUrl: null,
      stars: 0,
      featured: true
    },
    {
      id: 4,
      name: "Dotfile Configuration",
      description: "Curated collection of configuration files for customizing Linux and Unix-based operating systems. Includes shell configurations, editor settings, and productivity tools setup.",
      tech: ["Shell", "Bash", "Linux", "DevOps"],
      githubUrl: "https://github.com/yugansh25/Dotfile",
      demoUrl: null,
      stars: 0,
      featured: false
    },
    {
      id: 5,
      name: "Data Science Coursera",
      description: "Collection of projects and assignments from Data Science specialization courses. Demonstrates understanding of statistical analysis, data visualization, and predictive modeling.",
      tech: ["Python", "R", "Data Science", "Statistics"],
      githubUrl: "https://github.com/yugansh25/datasciencecoursera",
      demoUrl: null,
      stars: 0,
      featured: false
    }
  ],

  stats: {
    totalRepos: 9,
    totalContributions: 6,
    followers: 0,
    following: 0,
    topLanguages: [
      { name: "JavaScript", percentage: 35, color: "#f1e05a" },
      { name: "Python", percentage: 45, color: "#3572A5" },
      { name: "Shell", percentage: 15, color: "#89e051" },
      { name: "Other", percentage: 5, color: "#8b8b8b" }
    ]
  },

  contact: {
    email: "Hello@yugansh.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yugansh25",
    twitter: "@yourusername"
  }
};
