import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  synopsizer,
  weather,
  money,
  jobit,
  tripguide,
  threejs,
} from '../../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "  Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];


const projects = [
  {
    name: "Synopsizer",
    description:
      "Synopsizer is a web development project that uses AI to summarize long articles into concise, readable formats, streamlining the process of understanding complex texts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: synopsizer,
    source_code_link: "https://github.com/Ananya281/Synopsizer",
    website_code_link: "https://synopsizer.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "A weather app providing real-time forecasts and weather conditions, offering users detailed insights for planning activities and travel.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Ananya281/Weather-App",
    website_code_link: "https://weather-app-seven-zeta-16.vercel.app/",
  },
  {
    name: "Money Tracker App",
    description:
      "A money tracker app that helps users monitor their spending and manage budgets effectively, ensuring better financial control and savings.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: money,
    source_code_link: "https://github.com/Ananya281/Money-Tracker-App",
    website_code_link: "https://money-tracker-app-one.vercel.app/",
  },
];

export { services, technologies, projects};
