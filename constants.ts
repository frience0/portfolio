export const METADATA = {
  title: "Marck Frience | Portfolio",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://marckodev.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "marckfrience0@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/marck-frience-coto-a01b6b371/",
  github: "https://github.com/frience0",
  medium: "https://medium.com/@marckfriencecoto/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  dribbble: "https://dribbble.com/Unshack",
  behance: "https://www.behance.net/marckfcoto",
  twitter: "https://twitter.com/MarckoDev",
  topmate: "https://topmate.io/marcko",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Innovast Digital Marketing",
    image: "/projects/inno.jpg",
    blurImage: "/projects/blur/inno-blur.jpg",
    description: "Digital Design Agency Platform 🎨💼",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://innovast.vercel.app/",
    tech: ["next", "tailwind", "gsap", "typescript"],
  },
  {
    name: "Juan Graphico",
    image: "/projects/juan.jpg",
    blurImage: "/projects/blur/shirt-blur.png",
    description: "Ecommerce Website MERN stack with payment method 🛒💳",
    gradient: ["#245B57", "#004741"],
    url: "https://juan-graphico.com/",
    tech: ["redux", "react", "mongodb", "tailwind"],
  },
  {
    name: "Gallant Property Homes",
    image: "/projects/property.jpg",
    blurImage: "/projects/blur/property.jpg",
    description: "Real Estate Website Brokers 📊✨",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://gallant-homes.onrender.com/",
    tech: ["react", "firebase", "mongodb", "sass"],
  },
  {
    name: "Saasify Website Builder",
    image: "/projects/saasify.png",
    blurImage: "/projects/blur/saasify-blur.png",
    description: "Project Management Platform Website Builder🚀 ",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://saasifybuilder.vercel.app/",
    tech: ["react", "next", "mysql", "prisma"],
  },
  {
    name: "Crypto Casino FE",
    image: "/projects/casino.jpg",
    blurImage: "/projects/blur/casino.jpg",
    description: "Casino Platform Website FE 🏆🎴",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://casino-fe-rho.vercel.app/",
    tech: ["react", "next", "laravel", "mysql"],
  },
  {
    name: "Job Seekers",
    image: "/projects/jobs.png",
    blurImage: "/projects/blur/jobs-blur.png",
    description: "Online Jobs Platform 🤳",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://onlinejobs-unshack.vercel.app/",
    tech: ["tailwind", "react", "redux", "figma"],
  },
  {
    name: "Vue Portfolio",
    image: "/projects/vuepf.png",
    blurImage: "/projects/blur/vuepf-blur.png",
    description: "Built with Vue showcasing GSAP design 🚀",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://vue2nd-portfolio.netlify.app/",
    tech: ["tailwind", "vue", "gsap", "figma"],
  },
  {
    name: "Travel Guide UI",
    image: "/projects/travel.png",
    blurImage: "/projects/blur/travel-blur.png",
    description: "Travel Guide UI with Aesthetic Design",
    gradient: ["#011524", "#0e4754"],
    url: "https://trip-guide-sigma.vercel.app/",
    tech: ["typescript", "tailwind", "figma"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "vue",
    "laravel",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Maintenance at Graphico",
    size: ItemSize.SMALL,
    subtitle: "Performed critical maintenance and optimized the website.",
    image: "/timeline/maintenance.svg",
    slideImage: "/timeline/shirt2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "FullStack at Graphico",
    size: ItemSize.SMALL,
    subtitle:
      "Build and improved catalog, cart, payments, authentication, and order processing.",
    image: "/timeline/shirt.svg",
    slideImage: "/timeline/shirt2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "3D Annotator",
    size: ItemSize.SMALL,
    subtitle: "Glimmertech, Identifying 3D environment",
    image: "/timeline/3d.svg",
    slideImage: "/timeline/hube.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Hube Computer Manager",
    size: ItemSize.SMALL,
    subtitle: "",
    image: "/timeline/robot.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graphic Artist",
    size: ItemSize.SMALL,
    subtitle:
      "Conceptualizing and creating visual elements for product designs 🚀",
    image: "/timeline/graphic.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle: "Spent years laying the foundation of Computer Programming",
    image: "/timeline/school.svg",
    slideImage: "/timeline/bw.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Professinal 3D Animator NCIII",
    size: ItemSize.SMALL,
    subtitle: "Iligan Computer Institute.",
    image: "",
    slideImage: "/timeline/2d.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Career Entry Course Java",
    size: ItemSize.SMALL,
    subtitle: "Iligan Computer Institute",
    slideImage: "/timeline/Java.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "BSIT Major in Programming",
    size: ItemSize.SMALL,
    subtitle: "Iligan Computer Institute",
    slideImage: "/timeline/sass.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2012",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Computer Technician",
    size: ItemSize.SMALL,
    subtitle:
      "Mastered computer repair, excelling in troubleshooting and resolving various hardware and software issues.",
    image: "/timeline/tech.svg",
    slideImage: "/timeline/unnamed.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started Here.",
    size: ItemSize.SMALL,
    subtitle: "",
    image: "/timeline/rocket.svg",
    slideImage: "/timeline/unnamed.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "GTM-PPJBS4QZ";
