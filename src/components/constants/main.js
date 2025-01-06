import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    MovieMate,
    ExploreBharat,
    PhotoGenius,
    threejs,
  } from "../../assets"; // Keep only the imports needed from "../../assets"
  // import MovieMate from "../../assets"
  // import ExploreBharat from "../../assets"
  // import PhotoGenius from "../../assets"

  
  import c from "../../assets/tech/c.webp";
  import express from "../../assets/tech/express.webp";
  import vite from "../../assets/tech/vite.webp";
  
  // Removed duplicate `python` import
  import pythonIcon from "../../assets/tech/python.webp";
  
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
      title: "Frontend Developer",
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
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: pythonIcon, // Use `pythonIcon` for Python
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Vite",
      icon: vite,
    },
  ];
  
  const projects = [
    {
      name: "MovieMate",
      description:
        "Designed a movie recommendation system with content-based and popularity-based algorithms.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "nlp",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: MovieMate,
      source_code_link: "https://github.com/Ananya281/MovieMate",
      website_code_link: "https://moviemate-4.onrender.com/",
    },
    {
      name: "ExploreBharat",
      description:
        "Developed a cultural heritage exploration platform featuring interactive maps and AI-powered image recognition.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "deep learning(DL)",
          color: "pink-text-gradient",
        },
      ],
      image: ExploreBharat,
      source_code_link: "https://github.com/Ananya281/Explore-Bharat",
      website_code_link: "https://explore-bharat-frontend.vercel.app/",
    },
    {
      name: "PhotoGenius",
      description:
        "PhotoGenius is a web app for quick image editing, built with Flask and OpenCV. It supports format conversion, resizing, cropping, and advanced filters.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: PhotoGenius,
      source_code_link: "https://github.com/Ananya281/PhotoGenius",
      website_code_link: "https://photogenius-1.onrender.com/",
    },
  ];
  
  export { services, technologies, projects };
  