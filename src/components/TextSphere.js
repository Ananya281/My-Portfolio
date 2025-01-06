import React, { useEffect } from "react";
import "./styles/TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";

    // Array of technologies
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "Python",
      "ExpressJS",
      "Git",
      "GitHub",
      "C++",
      "C",
      "Docker",
      "Figma",
      "Framer Motion",
      "Netlify",
      "Heroku",
      "Redux",
      "Scikit-learn",
      "TailwindCSS",
      "TensorFlow",
      "ThreeJS",
      "TypeScript",
      "Vite",
    ];

    // TagCloud options
    const options = {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    };

    // Initialize TagCloud
    const tagCloud = TagCloud(container, texts, options);

    // Cleanup to avoid memory leaks
    return () => tagCloud.destroy();
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
