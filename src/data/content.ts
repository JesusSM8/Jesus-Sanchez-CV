export type Project = {
  id: string;
  title: string;
  company: string;
  period: string;
  tags: string[];
  description: string;
  highlight?: boolean;
  detail?: {
    role: string;
    intro: string;
    responsibilities: string[];
    highlights?: string[];
    screens?: string[];
  };
};

export const projects: Project[] = [
  {
    id: "angry-birds",
    title: "Angry Birds 2",
    company: "Rovio",
    period: "2024 — Now",
    tags: ["Product Strategy", "Design System", "A/B Testing", "Mobile"],
    description:
      "Designing new features for one of the most-played mobile games on the planet. Full ownership from concept to ship — strategy, system design, playtests, cross-team collaboration.",
    highlight: true,
    detail: {
      role: "UX/UI Designer",
      intro:
        "Angry Birds 2 has hundreds of millions of downloads. Working here means every decision has real scale — a poorly tested UI change can affect millions of players overnight. I design new features end-to-end: from early strategy sessions to Figma prototypes, playtests, A/B tests, and final implementation.",
      responsibilities: [
        "Product strategy and new feature design — from 0 to shipped",
        "Data gathering and interpretation to drive design decisions",
        "Figma UI design, design system ownership, and prototyping",
        "A/B tests, playtests, and survey-based validation",
        "Cross-functional collaboration between design, engineering, and product",
        "UI implementation support",
      ],
      highlights: [
        "Full ownership of multiple shipped features across core gameplay and meta loops",
        "Maintained and evolved the design system across a large, active codebase",
        "Collaborated with international teams across timezones",
      ],
    },
  },
  {
    id: "top-troops",
    title: "Top Troops!",
    company: "Socialpoint",
    period: "2021 — 2024",
    tags: ["Feature Design", "Design System", "Prototyping", "Mobile"],
    description:
      "3 years building a competitive mobile game. Owned the design system, shipped major features end-to-end, and ran constant A/B tests to find what actually works.",
    highlight: true,
    detail: {
      role: "UX/UI Designer & UI Developer",
      intro:
        "Three years at Socialpoint designing and building engaging features for Top Troops! — a competitive mobile strategy game. I was deeply involved in both design and implementation, which gave me a rare perspective on what's actually buildable and what performs in production.",
      responsibilities: [
        "Designed and implemented new features and game modes with cross-departmental teams",
        "Conducted user research and UX testing to improve player satisfaction",
        "Created and maintained a comprehensive design system for UI consistency",
        "Optimised existing game assets inside Unity — achieving a 50% improvement in loading times",
        "Built screens directly in the Unity engine to streamline design-to-dev workflows",
      ],
      highlights: [
        "50% loading time improvement through asset optimisation in Unity",
        "Built and maintained the full design system across 3 years of active development",
        "Shipped major features including game mode selection, Battle Pass, Clan screens, and event passes",
      ],
      screens: [
        "Game mode selection screen",
        "Boss battle home screen (Ancient event)",
        "Battle Pass main screen and offer popup",
        "Clan main screen",
        "Event pass screen and offer popup",
        "Notification screen",
      ],
    },
  },
  {
    id: "yego",
    title: "YEGO Urban Mobility",
    company: "YEGO",
    period: "2021",
    tags: ["UX/UI", "Design System", "Data-Driven", "Mobile"],
    description:
      "Redesigned the UX for a shared mobility app as sole designer. Built the design system from scratch, redesigned the full user app, and added a gamification layer.",
    detail: {
      role: "UX/UI Designer (sole designer)",
      intro:
        "YEGO is a Barcelona-based shared mobility startup. I joined as the only designer and built everything from scratch — design system, app redesign, marketing assets, and a new gamification feature. Fast-paced, high-ownership work.",
      responsibilities: [
        "Built a comprehensive design system from scratch for brand consistency",
        "Completely redesigned the user app — UX and UI — with a focus on clarity and dev efficiency",
        "Prepared and delivered all design assets for developer handover",
        "Designed marketing materials that contributed to the visual identity",
        "Designed 'YEGO Motor Club' — a gamification layer with exclusive rewards and loyalty mechanics",
      ],
      highlights: [
        "Sole designer — full ownership of every design decision",
        "Delivered a redesigned app, full design system, and gamification feature in one year",
        "The Motor Club gamification feature was a new product initiative designed from 0",
      ],
      screens: [
        "Full design system",
        "Main menu and booking panel redesign",
        "Map style redesign",
        "YEGO Motor Club reward screens",
      ],
    },
  },
  {
    id: "sayperk",
    title: "Sayperk",
    company: "Startup",
    period: "2022 — 2023",
    tags: ["Startup", "UX/UI", "Product Strategy", "Branding"],
    description:
      "A perk management platform for HR teams. Designed the brand, UX, and web interface from scratch — and validated the concept through research with real HR professionals.",
    detail: {
      role: "Product Designer & Co-founder",
      intro:
        "Sayperk is a perk management and marketplace platform built for HR departments who want to boost employee engagement and reduce turnover. I led design across brand identity, UX, and the web interface — while also doing research, user interviews, and business validation.",
      responsibilities: [
        "Conducted research with HR professionals to identify real pain points",
        "Created the complete brand identity from scratch",
        "Designed the full web interface and built it in Webflow",
        "Established partnerships and connections with potential perk providers",
        "Validated the value proposition through structured interviews",
      ],
      highlights: [
        "Validated the concept directly with HR professionals before building",
        "Full-stack design ownership: brand, UX, UI, and implementation",
        "Built and shipped the platform in Webflow",
        "Demonstrated end-to-end product thinking — from problem to market",
      ],
    },
  },
  {
    id: "project-planet",
    title: "Project Planet",
    company: "Side Project",
    period: "2022 — 2023",
    tags: ["Mobile Game", "Unity", "Product Design", "Indie"],
    description:
      "A mobile game built independently. Full product cycle — concept, design, build. A good excuse to use Unity and learn what it actually takes to ship a game solo.",
    detail: {
      role: "Designer & Developer",
      intro:
        "Project Planet is an indie mobile game I designed and built solo. The goal was simple: go through the full product cycle without a team — concept, design, art, and implementation in Unity. It taught me more about product constraints than any job has.",
      responsibilities: [
        "Concept, game design, and mechanics definition",
        "Full UI/UX design and visual art direction",
        "Unity development and implementation",
        "Playtesting, iteration, and polish",
      ],
      highlights: [
        "Solo project — every decision, every pixel, every line of code",
        "Shipped a working mobile game from scratch using Unity",
        "Deepened understanding of the full game development pipeline from a designer's perspective",
      ],
    },
  },
  {
    id: "service-design",
    title: "Service Design",
    company: "Experiencehaus",
    period: "2023 — 2024",
    tags: ["Service Design", "Research", "Journey Mapping"],
    description:
      "Intensive course solving real service design challenges with ethnographic research, journey mapping, and prototyping. Practical from day one.",
    detail: {
      role: "Student",
      intro:
        "An intensive service design programme at Experiencehaus in London. The focus was entirely practical — real briefs, real organisations, real constraints. I learned to lead ethnographic research, map complex journeys, and prototype services that actually address root causes, not symptoms.",
      responsibilities: [
        "Ethnographic research and field observation",
        "User interviews and synthesis",
        "Journey mapping and service blueprinting",
        "Concept development and service prototyping",
        "Presenting findings and recommendations to stakeholders",
      ],
      highlights: [
        "Worked on real briefs for real organisations",
        "Developed a structured approach to ambiguous, systems-level problems",
        "Strengthened research and facilitation skills that carry into every product project",
      ],
    },
  },
  {
    id: "ui-design",
    title: "UI Design",
    company: "Freelance",
    period: "2015 — 2019",
    tags: ["UI Design", "Illustration", "Figma", "Branding"],
    description:
      "Years of freelance UI and illustration work across industries. Built adaptability, range, and the ability to deliver fast under any brief.",
    detail: {
      role: "UX/UI Designer & Illustrator",
      intro:
        "Four years of freelance work across a wide range of clients and industries. This is where I built my foundations — learning to understand briefs quickly, deliver on time, and adapt to wildly different visual languages. No two projects were the same.",
      responsibilities: [
        "UI design for web and mobile across various industries",
        "Illustration for editorial, branding, and digital products",
        "Design system creation for client projects",
        "Direct client communication and project management",
      ],
      highlights: [
        "Worked with clients across Spain and internationally",
        "Built strong visual range — from playful illustration to clean UI",
        "Developed fast, reliable delivery habits under pressure",
      ],
    },
  },
  {
    id: "sutchis",
    title: "Sutchi's",
    company: "Etsy Store",
    period: "2019 — 2020",
    tags: ["Branding", "Illustration", "E-commerce"],
    description:
      "Built and designed an Etsy store from scratch — illustration, branding, product photos, the whole thing. Running an actual shop teaches you a lot about UX.",
    detail: {
      role: "Designer & Owner",
      intro:
        "Sutchi's was an Etsy store I created, designed, and ran entirely solo. The whole thing: product illustration, brand identity, packaging design, photography, and the store experience itself. A small project with a big lesson — shipping real products to real customers gives you instant, unfiltered feedback.",
      responsibilities: [
        "Product concept and illustration",
        "Brand identity and visual language",
        "Packaging and print design",
        "Product photography",
        "Etsy store setup, UX, and ongoing management",
      ],
      highlights: [
        "End-to-end ownership of a real commercial product",
        "Developed a consistent brand from scratch with zero budget",
        "Real customer feedback loop — faster and more direct than any user test",
      ],
    },
  },
];

export const skills = [
  "Product Strategy",
  "User-Centered Design",
  "Prototyping & Testing",
  "Cross-Functional Collaboration",
  "Roadmapping & Prioritization",
  "A/B Testing & Analytics",
];

export const tools = [
  { category: "Product Design", items: "Notion, Jira, Productboard" },
  { category: "UX/UI Design", items: "Figma, Sketch, Marvel" },
  { category: "UI Implementation", items: "Unity, Unreal Engine" },
  { category: "Illustration", items: "Illustrator, Photoshop, Procreate" },
  { category: "Video Editing", items: "After Effects, Premiere Pro" },
  { category: "Web", items: "WordPress, Wix, Webflow" },
];

export const experience = [
  {
    role: "UX/UI Designer",
    company: "Rovio",
    product: "Angry Birds 2",
    period: "2024 — Now",
  },
  {
    role: "UX/UI Designer",
    company: "Socialpoint",
    product: "Top Troops!",
    period: "2021 — 2024",
  },
  {
    role: "UX/UI Designer",
    company: "YEGO Urban Mobility",
    product: "YEGO App",
    period: "2021",
  },
  {
    role: "UX/UI Designer & Illustrator",
    company: "Freelancer.com",
    product: "Various clients",
    period: "2015 — 2019",
  },
];

export const education = [
  {
    title: "Service Design",
    institution: "Experiencehaus",
    period: "2023 — 2024",
  },
  {
    title: "Games, 3D & Interactive Environments",
    institution: "ENTI — Universitat de Barcelona",
    period: "2018 — 2020",
  },
  {
    title: "Fundamentals of Digital Marketing",
    institution: "Google",
    period: "2020",
  },
  {
    title: "Design & Edition of Multimedia Publications",
    institution: "Salesianos Urnieta",
    period: "2016 — 2018",
  },
  {
    title: "Digital Prepress in Graphic Arts",
    institution: "Salesianos Pamplona",
    period: "2014 — 2016",
  },
];
