export type Signature = "planet" | "process";

export interface GalleryItem {
  src: string;
  caption: string;
}

export interface Outcome {
  t: string;
  d: string;
}

export interface Project {
  num: string;
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  tags: string[];
  description: string;
  hue: number;
  /** special hand-crafted block rendered before the generic content */
  signature?: Signature;
  hero?: string;
  did: string[];
  gallery: GalleryItem[];
  outcomes?: Outcome[];
  /** small rotated sticky-note strip at the end (personality accent) */
  notes?: string[];
  copyright?: string;
}

export const projects: Project[] = [
  {
    num: "01",
    id: "angry-birds",
    title: "Angry Birds 2",
    company: "Rovio",
    period: "2024 — Now",
    role: "UX/UI Designer & Artist",
    tags: ["Product Strategy", "Design System", "A/B Testing", "Unity"],
    description:
      "Two years on the Angry Birds 2 early-game team, leading redesigns of the biggest features — from KPIs to shipped UI, and the Unity implementation in between.",
    hue: 30,
    hero: "/images/ab2-keyart.jpg",
    did: [
      "Sit with Game Design to turn KPIs and goals into solutions.",
      "Analyze data with Beacon, Rovio's internal tool.",
      "Run UX research and validate with PlayTestCloud, surveys and internal playtests.",
      "Design, prototype and implement features straight into Unity.",
      "Build and own a Figma component design system covering every screen.",
      "Lead redesigns of the Homescreen, Flock Power HUB and Shops — improving early retention.",
    ],
    gallery: [
      { src: "/images/ab2-home.png", caption: "Homescreen redesign" },
      { src: "/images/ab2-pigsfight.png", caption: "Pigs Fight feature" },
      { src: "/images/ab2-newchapter.png", caption: "New Chapter Unlocked" },
      { src: "/images/ab2-bonus.png", caption: "Bonus Level offer" },
      { src: "/images/ab2-skipads.png", caption: "Skip Ads offer" },
      { src: "/images/ab2-outofbirds.png", caption: "Out of Birds screen" },
    ],
    copyright:
      "©2025 Rovio Entertainment Corporation and Rovio Animation Ltd. All rights reserved.",
  },
  {
    num: "02",
    id: "top-troops",
    title: "Top Troops!",
    company: "Socialpoint",
    period: "2021 — 2024",
    role: "UX/UI Designer & UI Developer",
    tags: ["Feature Design", "Design System", "Unity", "User Research"],
    description:
      "Three years building Top Troops!, a competitive mobile game. I designed the features and built the screens myself in Unity — owning the design system end to end.",
    hue: 300,
    hero: "/images/sp-splash.png",
    did: [
      "Design and implement new features and game modes with Art and Dev.",
      "Run user research and UX/UI testing for usability and player satisfaction.",
      "Build and maintain a full design system for consistency across the game.",
      "Build screens directly in the Unity engine, streamlining the pipeline.",
      "Optimize in-game assets in Unity — 50% faster loading times.",
    ],
    gallery: [
      { src: "/images/sp-battle-menu.png", caption: "Gamemode selection" },
      { src: "/images/sp-ancient-menu.png", caption: '"Ancient" boss battle' },
      { src: "/images/sp-kingdom-pass.png", caption: "Kingdom Pass" },
      { src: "/images/sp-event-pass.png", caption: "Event Pass" },
      { src: "/images/sp-clan.png", caption: "Clan screen" },
    ],
    outcomes: [
      { t: "Design system", d: "Robust, reusable, consistent across the whole game." },
      { t: "50% faster", d: "Loading times after in-engine asset optimization." },
      { t: "Designed + built", d: "Screens shipped straight from Figma into Unity." },
    ],
  },
  {
    num: "03",
    id: "yego",
    title: "YEGO Urban Mobility",
    company: "YEGO",
    period: "2021",
    role: "Sole UX/UI Designer",
    tags: ["UX/UI", "Design System", "Branding", "Mobile"],
    description:
      "The only designer at YEGO, a Barcelona mobility startup. Built the design system from scratch, redesigned the whole user app, and shaped the brand along the way.",
    hue: 205,
    hero: "/images/yego-menu.png",
    did: [
      "Build YEGO's design system from scratch for brand coherence.",
      "Completely redesign the user app around UX and dev efficiency.",
      "Prep design assets and hand off cleanly to developers.",
      "Design marketing materials and shape the visual identity.",
      "Launch the YEGO Motor Club — rewards that gamify the experience.",
    ],
    gallery: [
      { src: "/images/yego-design-system.png", caption: "Design system" },
      { src: "/images/yego-classic-map.png", caption: "Map style redesign" },
      { src: "/images/yego-mode.png", caption: "Booking flow" },
      { src: "/images/yego-map.png", caption: "In-app map" },
    ],
  },
  {
    num: "04",
    id: "service-design",
    title: "Service Design",
    company: "ExperienceHaus × QMUL",
    period: "2024",
    role: "Service Designer",
    tags: ["Service Design", "Research", "Journey Mapping", "Workshops"],
    description:
      "A part-time Service Design course at ExperienceHaus, on a live brief for the Enterprise team at Queen Mary University of London: scale entrepreneurial support for students, grads and researchers — without scaling the team.",
    hue: 350,
    signature: "process",
    did: [],
    gallery: [
      { src: "/images/service-competitor.jpg", caption: "Competitor review" },
      { src: "/images/service-insights.jpg", caption: "Research insights" },
      { src: "/images/service-persona.jpg", caption: "Student persona" },
      { src: "/images/service-journey.jpg", caption: "User journey map" },
      { src: "/images/service-presentation.png", caption: "Final presentation" },
    ],
  },
  {
    num: "05",
    id: "project-planet",
    title: "Project Planet",
    company: "Side Project",
    period: "2022 — Now",
    role: "Solo Designer & Developer",
    tags: ["Mobile Game", "Unity", "Narrative Design", "Procedural"],
    description:
      "A Unity mobile game inspired by Tamagotchi. Players raise a living planet's calm, trust and hope through minigames, steering it through emotional chapters drawn from real life. Built solo, end to end.",
    hue: 150,
    signature: "planet",
    did: [
      "Conceived and designed the game around emotional well-being.",
      "Built core mechanics in Unity, using AI tools (Unity Muse) to move fast.",
      "Designed minigames that build the planet's resource points.",
      "Wrote a narrative system of emotional chapters from real life.",
      "Integrated procedural generation for unique, replayable worlds.",
    ],
    gallery: [{ src: "/images/planet-features.png", caption: "Procedural worlds & chapter system" }],
  },
  {
    num: "06",
    id: "sayperk",
    title: "Sayperk",
    company: "Startup",
    period: "2022 — 2023",
    role: "Founder & Designer",
    tags: ["Startup", "Branding", "UX/UI", "Webflow"],
    description:
      "A side-project startup: a perk marketplace that helps HR teams engage remote employees and cut turnover. I did the brand, the UX and the Webflow build — backed by research with HR pros.",
    hue: 258,
    hero: "/images/sayperk-landing.png",
    did: [
      "Define the value proposition through interviews with HR professionals.",
      "Design the brand identity — professional, with a modern perks feel.",
      "Design and build the web interface in Webflow.",
      "Open a provider network with potential perk partners.",
    ],
    gallery: [
      { src: "/images/sayperk-marketplace.png", caption: "Perk marketplace" },
      { src: "/images/sayperk-perk.png", caption: "Perk detail" },
      { src: "/images/sayperk-cta.png", caption: "Promotional banner" },
    ],
    notes: ["Undefined problems", "Fast iterations", "Scrappy solutions", "Comfortable with ambiguity"],
  },
  {
    num: "07",
    id: "ui-design",
    title: "UI Design",
    company: "Personal Project",
    period: "Figma · Self-directed",
    role: "UI Designer",
    tags: ["UI Design", "Figma", "Prototyping", "Visual"],
    description:
      "A self-directed series of app and web prototypes in Figma — pushing my UI craft across typography, color and interaction. Five concepts, each with its own design problem to solve.",
    hue: 95,
    did: [],
    gallery: [],
  },
  {
    num: "08",
    id: "sutchis",
    title: "Sutchi's",
    company: "Etsy Store",
    period: "2020",
    role: "Designer & Shop Owner",
    tags: ["Branding", "Illustration", "E-commerce", "NFC"],
    description:
      "During COVID I launched Sutchi's, an Etsy store selling custom Animal Crossing villager cards with NFC tags. Designed in Illustrator, hand-assembled, shipped worldwide. 50 sales that paid the rent.",
    hue: 45,
    hero: "/images/cover-sutchis.jpg",
    did: [
      "Design the cards in Illustrator — accurate to every villager.",
      "Embed NFC tags so each card works in-game via scan.",
      "Print on quality stock, assemble and package by hand.",
      "Run the store end to end — logistics, shipping, support.",
    ],
    gallery: [
      { src: "/images/sutchis-2.jpg", caption: "Mario card design" },
      { src: "/images/sutchis-3.jpg", caption: "Coin card design" },
      { src: "/images/sutchis-1.jpg", caption: "Store cover art" },
    ],
    outcomes: [
      { t: "50 sales", d: "Enough revenue to cover rent through the pandemic." },
      { t: "End to end", d: "Design, production, packaging, shipping and support." },
    ],
  },
];

// UI Design prototypes (gallery archetype)
export interface Prototype {
  t: string;
  s: string;
  src?: string;
  b: string[];
}
export const uiPrototypes: Prototype[] = [
  {
    t: "Music App",
    s: "Streaming, built for the dark",
    src: "/images/cover-ui-design.png",
    b: [
      "Clean, low-light-friendly layout",
      "Persistent player bar — play, skip, volume",
      "Browse by genre, artist & playlist",
    ],
  },
  {
    t: "Easy Calm",
    s: "A calming oasis in your pocket",
    src: "/images/ui-easycalm.png",
    b: [
      "Soft blues & greens to ease anxiety",
      '"Calm right now" front and centre',
      "Categorized course library",
    ],
  },
  {
    t: "Saletop",
    s: "Furniture catalog, decluttered",
    src: "/images/ui-saletop.png",
    b: [
      "Large category previews to browse",
      "Minimalist product cards, no overload",
      'Bold, contrasting "Add to Cart"',
    ],
  },
  {
    t: "Home Force",
    s: "Neumorphism for the home",
    src: "/images/ui-homeforce.jpg",
    b: [
      "Soft neumorphic shadows & highlights",
      "3D button cues for clear interaction",
      "Muted palette, minimalist layout",
    ],
  },
  {
    t: "BREATHE",
    s: "Meditation, made effortless",
    src: "/images/ui-breathe.png",
    b: [
      "Cool palette grounded in colour psychology",
      "Tabbed hierarchy, low cognitive load",
      "Visual previews of each session",
    ],
  },
];

export const tools: { category: string; items: string }[] = [
  { category: "Product Design", items: "Notion, Jira, Productboard" },
  { category: "UX/UI Design", items: "Figma, Sketch, Marvel" },
  { category: "UI Implementation", items: "Unity, Unreal Engine" },
  { category: "Illustration", items: "Illustrator, Photoshop, Procreate" },
  { category: "Video Editing", items: "After Effects, Premiere Pro" },
  { category: "Web", items: "WordPress, Wix, Webflow" },
];

export const education: { title: string; institution: string; period: string }[] = [
  { title: "Service Design", institution: "Experiencehaus", period: "2023 — 2024" },
  {
    title: "Games, 3D & Interactive Environments",
    institution: "ENTI — Universitat de Barcelona",
    period: "2018 — 2020",
  },
  { title: "Fundamentals of Digital Marketing", institution: "Google", period: "2020" },
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

// Left-rail "Where I've worked" — custom order + short labels + years
export const timelineOrder = [
  "angry-birds",
  "top-troops",
  "service-design",
  "project-planet",
  "yego",
  "sayperk",
  "sutchis",
  "ui-design",
];

export const timelineShort: Record<string, string> = {
  "angry-birds": "Angry Birds 2",
  "top-troops": "Top Troops!",
  "service-design": "Service Design",
  "project-planet": "Project Planet",
  yego: "YEGO",
  sayperk: "Sayperk",
  sutchis: "Sutchi's",
  "ui-design": "UI Design",
};

export const timelineYear: Record<string, string> = {
  "angry-birds": "2024 — Now",
  "top-troops": "2021 — 24",
  "service-design": "2024",
  "project-planet": "2022",
  yego: "2021",
  sayperk: "2022",
  sutchis: "2020",
  "ui-design": "2015",
};

export interface Accent {
  accent: string;
  line: string;
  soft: string;
  themeBg: string;
}

export function accents(hue: number): Accent {
  return {
    accent: `oklch(0.80 0.16 ${hue})`,
    line: `oklch(0.80 0.16 ${hue} / 0.42)`,
    soft: `oklch(0.80 0.16 ${hue} / 0.13)`,
    themeBg: `radial-gradient(130% 120% at 70% 6%, oklch(0.30 0.13 ${hue}) 0%, oklch(0.15 0.06 ${hue}) 42%, oklch(0.07 0.022 ${hue}) 100%)`,
  };
}
