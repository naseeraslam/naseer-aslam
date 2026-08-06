export interface WorkExperience {
  id: string
  jobTitle: string
  company: string
  location: string
  period: string
  startDate: string
  endDate?: string
  isCurrent?: boolean
  summary: string
  achievements: string[]
  tags: string[]
  impact: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  problem: string
  solution: string
  architecture: string
  challenges: string
  results: string[]
  performanceGains: string
  techStack: string[]
  featured: boolean
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  badgeText: string
  badgeColor: string
  description: string
  verificationUrl: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: { name: string; level: number; highlight?: boolean }[]
}

export const portfolioData = {
  personal: {
    name: 'Muhammad Naseer Aslam',
    firstName: 'Muhammad Naseer',
    lastName: 'Aslam',
    title: 'Senior Software Engineer & Adobe Commerce Certified Expert',
    heroTagline: 'Architecting Enterprise E-Commerce Platforms That Scale to Millions',
    bio: 'Adobe Commerce Certified Expert with 5+ years of engineering high-performance Magento 2 platforms for global enterprise retailers. Proven leader in GraphQL/REST API design, Hyvä storefront acceleration, custom module development, and CI/CD automation.',
    location: 'Lahore, Pakistan',
    availability: 'Open to Remote, Relocation & Visa Sponsorship',
    headshot: '/headshot-on-white.jpg',
    contact: {
      email: 'naseeraslam456@gmail.com',
      linkedin: 'https://www.linkedin.com/in/muhammad-naseer-aslam-magento-developer/',
      github: 'https://github.com/naseeraslam',
      location: 'Lahore, Pakistan (UTC+5)',
    },
    targetCompanies: [
      'Adobe', 'Shopify', 'Amazon', 'Google', 'Microsoft', 
      'Meta', 'Salesforce', 'Oracle', 'Stripe', 'Cloudflare', 
      'Atlassian', 'Vercel'
    ]
  },

  metrics: [
    { label: 'Years Experience', value: 5, suffix: '+', description: 'Architecting enterprise Magento 2 storefronts' },
    { label: 'Enterprise Stores', value: 3, suffix: '+', description: 'Box.co.uk, LaptopOutlet.co.uk, OppoStore.co.uk' },
    { label: 'Adobe Certifications', value: 2, suffix: '', description: 'Adobe Commerce Expert & Certified Professional' },
    { label: 'Daily Transactions', value: 10, suffix: 'k+', description: 'Processed seamlessly across live production systems' },
    { label: 'Deployment Uptime', value: 99.9, suffix: '%', description: 'Automated zero-downtime CI/CD deployment pipelines' },
    { label: 'Marketplace Plugins', value: 2, suffix: '+', description: 'Published on official Adobe Commerce Marketplace' },
  ],

  experiences: [
    {
      id: 'fivetech',
      jobTitle: 'Senior Software Engineer',
      company: 'FiveTech',
      location: 'Lahore, Pakistan (Remote)',
      period: 'June 2024 – Present',
      startDate: '2024-06-01',
      isCurrent: true,
      summary: 'Lead Magento backend architect powering high-volume UK e-commerce leaders Box.co.uk, LaptopOutlet.co.uk, and OppoStore.co.uk — handling tens of thousands of daily active users.',
      achievements: [
        'Upgraded core e-commerce architecture to Magento 2.4.7 across multi-site production environments, eliminating critical vulnerabilities and improving platform speed.',
        'Architected high-throughput GraphQL APIs for dynamic product catalog updates, inventory sync, and accelerated checkout processing.',
        'Engineered a comprehensive B2B Ordering Module featuring partner self-registration, customizable credit limits, and streamlined bulk purchasing.',
        'Integrated Google Analytics API with automated cron jobs and custom UI widgets to render real-time sales trends and top-performing product rankings.',
      ],
      tags: ['Magento 2.4.7', 'Adobe Commerce', 'GraphQL', 'PHP 8.2', 'B2B Commerce', 'Google Analytics API', 'Cron Jobs', 'MySQL'],
      impact: 'Boosted conversion rates across flagship storefronts while supporting peak seasonal transaction spikes without downtime.'
    },
    {
      id: 'intagleo',
      jobTitle: 'Software Engineer',
      company: 'Intagleo Systems',
      location: 'Lahore, Pakistan',
      period: 'Oct 2022 – June 2024',
      startDate: '2022-10-01',
      endDate: '2024-06-01',
      summary: 'Engineered custom REST/GraphQL endpoints, automated deployment pipelines, and integrated enterprise payment/marketing ecosystems for high-traffic commerce clients.',
      achievements: [
        'Developed custom Magento 2 modules, plugins, controllers, and GraphQL APIs tailored to complex enterprise client workflows.',
        'Automated CI/CD build and deployment pipelines, shortening release cycles from days to minutes and reducing deployment errors.',
        'Diagnosed and resolved mission-critical Stripe payment gateway failures under high load conditions.',
        'Orchestrated large-scale product and order data migrations using Firebear import/export frameworks.',
        'Integrated Klaviyo marketing automation and provided robust server management and debugging support.',
      ],
      tags: ['Magento 2', 'REST API', 'GraphQL', 'Stripe', 'Klaviyo', 'Firebear', 'CI/CD Pipelines', 'Docker', 'AWS'],
      impact: 'Eliminated payment checkout drop-offs and automated release engineering for global merchant storefronts.'
    },
    {
      id: 'php-studios',
      jobTitle: 'Associate Software Engineer',
      company: 'PHP Studios',
      location: 'Lahore, Pakistan',
      period: 'July 2021 – Oct 2022',
      startDate: '2021-07-01',
      endDate: '2022-10-01',
      summary: 'Focused on storefront performance optimization using Hyvä themes, repository design patterns, and publishing reusable open-source/marketplace Magento extensions.',
      achievements: [
        'Implemented Hyvä themes to replace heavy legacy frontend scripts, achieving 90+ PageSpeed scores and fast Core Web Vitals.',
        'Customized core Magento modules using repository patterns and dependency injection best practices.',
        'Resolved complex Product Listing Page (PLP) query bottlenecks and implemented custom GraphQL endpoints.',
        'Authored and published the Print Order PDF extension to the official Adobe Commerce Marketplace.',
        'Built an automated log rotation extension to prevent server disk exhaustion on busy production nodes.',
      ],
      tags: ['Magento 2', 'Hyvä Themes', 'GraphQL', 'PHP', 'Repository Pattern', 'Adobe Marketplace', 'PDF Engine'],
      impact: 'Accelerated storefront load times by up to 60% and introduced marketplace-certified extensions.'
    }
  ] as WorkExperience[],

  projects: [
    {
      id: 'b2b-ordering-module',
      title: 'Enterprise B2B Ordering & Credit Management Module',
      subtitle: 'Self-service wholesale portal built for high-traffic Magento 2 storefronts',
      category: 'B2B Commerce Architecture',
      problem: 'Enterprise wholesale customers faced cumbersome manual ordering processes, phone/email quote requests, and delayed credit line approvals.',
      solution: 'Designed and deployed a native B2B ordering module enabling business partners to self-register, request and receive credit limit allocations, and execute bulk orders directly within standard storefront UI.',
      architecture: 'Custom Magento 2 EAV extension + GraphQL schema definition + asynchronous credit limit validator + automated order approval workflows.',
      challenges: 'Ensuring real-time credit check locking during concurrent bulk orders without causing database deadlocks on high-traffic nodes.',
      results: [
        'Reduced wholesale order processing cycle time by over 60%.',
        'Enabled 100% self-service checkout for verified corporate buyers.',
        'Integrated directly with ERP systems for automated credit line ledger updates.'
      ],
      performanceGains: 'Sub-100ms API response time for credit calculations',
      techStack: ['Magento 2.4.7', 'PHP 8.2', 'GraphQL', 'MySQL', 'B2B EAV Architecture'],
      featured: true
    },
    {
      id: 'print-order-extension',
      title: 'Configurable PDF Order Template Engine',
      subtitle: 'Published on the Official Adobe Commerce Marketplace',
      category: 'Marketplace Extension Engineering',
      problem: 'Default Magento PDF generation for invoices, packing slips, and order receipts is hardcoded, visually dated, and costly to customize.',
      solution: 'Created an extension offering full admin control over PDF design, layout blocks, custom branding, barcodes, and dynamic order fields.',
      architecture: 'Modular PDF template renderer leveraging TCPDF/Dompdf with Magento Admin configuration tabs and XML layout directives.',
      challenges: 'Optimizing memory consumption when generating multi-page PDF documents for large 500+ line item enterprise orders.',
      results: [
        'Certified and published on the Adobe Commerce Marketplace.',
        'Adopted by international merchants for branded fulfillment workflows.',
        'Eliminated full developer intervention for routine invoice layout changes.'
      ],
      performanceGains: '70% reduction in PDF rendering memory overhead',
      techStack: ['Magento 2', 'PHP', 'Adobe Marketplace API', 'PDF Generation', 'XML Layouts'],
      featured: true
    },
    {
      id: 'log-rotation-extension',
      title: 'Automated Log Rotation & Storage Guardian',
      subtitle: 'Zero-maintenance DevOps hygiene module for production nodes',
      category: 'DevOps & Server Hygiene',
      problem: 'Unmonitored exception, system, and debug logs on busy Magento stores quickly fill disk partitions, triggering unexpected downtime.',
      solution: 'Engineered an automated log management module that periodically prunes, compresses, and archives logs based on configurable thresholds.',
      architecture: 'Cron-driven log analyzer + configurable size/age rules + gzip compression + disk health monitor.',
      challenges: 'Rotating log files cleanly while active worker processes were actively writing to log descriptors.',
      results: [
        'Prevented 100% of log-related server disk partition crashes.',
        'Maintained historical audit logs in compressed storage saving 85% disk space.',
        'Included built-in admin alert notifications for abnormal log volume spikes.'
      ],
      performanceGains: 'Zero performance impact on live Web traffic',
      techStack: ['Magento 2', 'PHP', 'Cron Jobs', 'Linux DevOps', 'Bash'],
      featured: true
    }
  ] as CaseStudy[],

  certifications: [
    {
      id: 'adobe-expert',
      title: 'Adobe Commerce Certified Expert',
      issuer: 'Adobe Credential Program',
      date: 'November 2024',
      badgeText: 'Expert Credential',
      badgeColor: 'from-red-500 via-orange-500 to-amber-500',
      description: 'Validates expert-level technical proficiency in architecting complex Magento 2 customisations, advanced performance optimization, multi-store architecture, and enterprise solution delivery.',
      verificationUrl: 'https://certification.adobe.com/credential/verify/71985fcd-e27b-4af8-bf7a-e1f30af6f3f7'
    },
    {
      id: 'adobe-professional',
      title: 'Adobe Certified Professional — Adobe Commerce Developer',
      issuer: 'Adobe Credential Program',
      date: 'April 2023',
      badgeText: 'Professional Credential',
      badgeColor: 'from-orange-500 to-amber-400',
      description: 'Validates core mastery of Magento 2 backend structure, layout XML, database customizations, UI components, custom APIs, and secure coding standards.',
      verificationUrl: 'https://certification.adobe.com/credential/verify/b51c0691-34de-4717-a59f-4ffc8de8dbe1'
    }
  ] as Certification[],

  education: [
    {
      institution: 'Punjab University College of Information Technology (PUCIT)',
      degree: 'Bachelor of Science in Information Technology (BS IT)',
      period: '2017 – 2021',
      location: 'Lahore, Pakistan',
      highlights: 'Rigorous foundation in computer science, software design patterns, database architecture, network protocols, and distributed systems engineering.'
    }
  ],

  skillCategories: [
    {
      title: 'Core Platform & Architecture',
      description: 'Enterprise Magento 2 & Adobe Commerce core expertise',
      skills: [
        { name: 'Magento 2.4.x', level: 98, highlight: true },
        { name: 'Adobe Commerce Enterprise', level: 95, highlight: true },
        { name: 'Hyvä Themes', level: 92, highlight: true },
        { name: 'PWA Studio', level: 85 },
        { name: 'Multi-Store Setup', level: 95 }
      ]
    },
    {
      title: 'Backend Engineering & APIs',
      description: 'High-performance PHP & API design',
      skills: [
        { name: 'PHP 8.x', level: 96, highlight: true },
        { name: 'GraphQL APIs', level: 94, highlight: true },
        { name: 'REST APIs', level: 95 },
        { name: 'MySQL & Query Tuning', level: 90 },
        { name: 'Repository & DI Patterns', level: 95 }
      ]
    },
    {
      title: 'Frontend & UI Storefront',
      description: 'Fast modern storefront rendering',
      skills: [
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'Alpine.js & Tailwind (Hyvä)', level: 94, highlight: true },
        { name: 'Knockout.js (Magento Legacy)', level: 88 },
        { name: 'HTML5 / CSS3 / SCSS', level: 95 }
      ]
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      description: 'Reliable deployment & server management',
      skills: [
        { name: 'Docker & Containerization', level: 88 },
        { name: 'CI/CD Automated Pipelines', level: 92, highlight: true },
        { name: 'AWS Services', level: 85 },
        { name: 'Linux Administration', level: 90 },
        { name: 'Git & GitHub Actions', level: 95 }
      ]
    },
    {
      title: 'Integrations & Ecosystem',
      description: 'Payment, analytics & search integrations',
      skills: [
        { name: 'Stripe Payment Gateway', level: 92, highlight: true },
        { name: 'Klaviyo Marketing API', level: 88 },
        { name: 'Google Analytics API', level: 90 },
        { name: 'ElasticSearch / OpenSearch', level: 88 },
        { name: 'Redis Cache & Sessions', level: 92 },
        { name: 'Firebear Import/Export', level: 94 }
      ]
    }
  ] as SkillCategory[],

  processSteps: [
    {
      step: '01',
      title: 'Discovery & Requirement Analysis',
      description: 'Audit existing merchant infrastructure, identify bottleneck components, define target KPIs, and map domain model requirements.'
    },
    {
      step: '02',
      title: 'Enterprise Architecture & API Design',
      description: 'Architect decoupled GraphQL/REST contracts, design clean EAV database extensions, and define caching & security boundaries.'
    },
    {
      step: '03',
      title: 'Clean Code Implementation',
      description: 'Develop custom modules adhering to Adobe Commerce coding standards, strict type checking, dependency injection, and repository patterns.'
    },
    {
      step: '04',
      title: 'Automated Testing & QA',
      description: 'Execute unit, integration, and API contract validation tests to ensure zero regression across core store functionalities.'
    },
    {
      step: '05',
      title: 'CI/CD & Zero-Downtime Deployment',
      description: 'Deploy via automated GitHub Actions / Jenkins pipelines with static content deployment, database patch migrations, and instant fallback plans.'
    },
    {
      step: '06',
      title: 'Performance Tuning & Continuous Support',
      description: 'Fine-tune Varnish, Redis cache tags, ElasticSearch indexing, and Core Web Vitals to sustain sub-second page loads during peak traffic surges.'
    }
  ],

  testimonials: [
    {
      quote: "Naseer's deep knowledge of Magento 2 architecture and GraphQL APIs transformed our multi-site performance. He tackled complex B2B modules and platform upgrades with precision.",
      author: "Engineering Manager",
      company: "High-Traffic E-Commerce Enterprise (UK)",
      rating: 5
    },
    {
      quote: "Working with an Adobe Commerce Certified Expert makes all the difference. Naseer resolved critical payment gateway edge cases that had stumped other developers for months.",
      author: "Head of Digital Commerce",
      company: "Global Retail Brand",
      rating: 5
    }
  ]
}
