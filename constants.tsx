export const RESUME_DATA = {
  name: 'Fred Dongho Tsobjio',
  phone: '(512) 902-1422',
  email: 'fred.dongho.1@gmail.com',
  githubUrl: 'https://github.com/lumispeaks/',
  website: 'https://freddongho.com',
  headshot: '/images/fred-headshot.jpg',
  linkedin: 'https://www.linkedin.com/in/freddongho',
  summary:
    'B.S. Business Analytics student (Product Management emphasis) in Austin, building adaptive training and journaling platforms with Swift, TypeScript, and React. Experienced in product leadership, AI-assisted workflows, and data-informed growth—from founding AceStudy to content strategy at scale.',
  education: {
    school: 'University of Texas at San Antonio',
    location: 'San Antonio, TX',
    gpa: '3.78',
    degree: 'B.S. Business Analytics',
    emphasis: 'Product Management',
    graduation: 'Expected 2028',
    honors: [
      'UTSA Honors College',
      'Executive Director @ NABA',
      "UTSA Dean's List (2x)",
      'NSCS Member',
    ],
  },
  projects: [
    {
      title: 'JoJo+',
      subtitle: 'Adaptive Cognitive Training Platform',
      year: '2026',
      details: [
        'Built an adaptive cognitive training platform tracking five neuroplasticity domains with percentile-based performance analysis.',
        'Implemented z-score anomaly detection and moving averages to measure learning velocity across daily and weekly intervals.',
        'Designed progressive tier algorithms to dynamically adjust difficulty and prevent performance stagnation.',
      ],
    },
    {
      title: 'Renew-U',
      subtitle: 'Adaptive Scripture Journaling Platform',
      year: '2025',
      details: [
        'Engineered an emotion-aware journaling platform that maps user input to relevant Scripture across ten translations.',
        'Built an AI prompting pipeline using full Bible context for verse-centered responses; integrated Gemini-based retrieval with local fallback for reliability.',
        'Implemented biometric-secured journaling with SwiftData persistence and streak-based engagement tracking.',
      ],
    },
    {
      title: 'AceStudy',
      subtitle: 'AI learning platform',
      year: 'Dec 2025 – Present',
      liveUrl: 'https://acestudy.app/',
      details: [
        'Led development of an AI learning platform with adaptive flashcards, speed reading, and cognitive tools; defined freemium SaaS strategy and drove growth to hundreds of users through A/B-tested marketing.',
        'Managed a small team, led meetings, and built team culture while architecting core systems (Firebase auth, Stripe payments, real-time sync, AI pipeline) achieving sub-30s generation and 99%+ uptime.',
      ],
    },
  ],
  journey: [
    {
      company: 'AceStudy',
      role: 'Founder & Developer',
      period: 'Dec 2025 – Present',
      location: 'Austin, TX',
      type: 'Product',
      description: [
        'Led development of an AI learning platform with adaptive flashcards, speed reading, and cognitive tools; defined freemium SaaS strategy and drove growth to hundreds of users through A/B-tested marketing.',
        'Managed a small team, led meetings, and built team culture while architecting core systems (Firebase auth, Stripe payments, real-time sync, AI pipeline) achieving sub-30s generation and 99%+ uptime.',
      ],
    },
    {
      company: 'National Association of Black Accountants (NABA)',
      role: 'Executive Director',
      period: 'Sept 2025 – Present',
      location: 'San Antonio, TX',
      type: 'Leadership',
      description: [
        'Streamlined program execution by implementing standardized workflows, establishing feedback systems, and managing multiple initiatives to improve efficiency and delivery consistency.',
      ],
    },
    {
      company: 'Pinterest',
      role: 'Content Strategy & User Research',
      period: 'July 2025 – Present',
      location: 'San Antonio, TX',
      type: 'Experience',
      description: [
        'Drove content growth to 1M+ views by analyzing engagement data, testing formats, and refining strategy based on audience behavior.',
      ],
    },
    {
      company: 'Chipotle Mexican Grill',
      role: 'Crew Member',
      period: 'July 2025 – Aug 2025',
      location: 'Manor, TX',
      type: 'Experience',
      description: [
        'Operated the grill for proteins (chicken, steak, barbacoa, carnitas) with consistent seasoning, portion control, and presentation aligned with brand quality and health standards.',
        'Kept the grill station clean, stocked, and coordinated with the line team for fast, safe service and sanitation compliance.',
      ],
    },
    {
      company: 'Sonic Drive-In',
      role: 'Crew Member',
      period: 'June 2023 – Aug 2023',
      location: 'Wake Forest, NC',
      type: 'Experience',
      description: [
        'Delivered high-volume food and beverage service while maintaining speed, accuracy, and sanitation standards through efficient multitasking and organized workflow execution.',
      ],
    },
    {
      company: 'Voice Over Business',
      role: 'Owner / CEO',
      period: 'Aug 2020 – Feb 2023',
      location: 'Austin, TX',
      type: 'Experience',
      description: [
        'Built and scaled a voice-over business by optimizing client workflows, managing end-to-end operations, and maintaining a 4.9/5 satisfaction rating across 100+ clients.',
      ],
    },
  ],
  skillGroups: [
    {
      name: 'Product Management',
      items: [
        'Workflow Optimization',
        'Root Cause Analysis',
        'Scalable Systems Design',
        'Continuous Improvement',
      ],
    },
    {
      name: 'Programming & Development',
      items: [
        'Swift',
        'TypeScript',
        'React.js',
        'React Native',
        'Full-Stack Development',
        'Mobile Application Development',
        'Application Development',
      ],
    },
    {
      name: 'Product Analytics & Data',
      items: [
        'Data-Informed Decision Making',
        'Quantitative Analysis',
        'Trend Analysis',
        'Spreadsheet Modeling',
        'KPI Definition & Tracking',
      ],
    },
    {
      name: 'Artificial Intelligence & Data',
      items: [
        'Artificial Intelligence (AI)',
        'Machine Learning',
        'Generative AI',
      ],
    },
  ],
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
