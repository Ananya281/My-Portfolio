import React from "react";
import { motion } from "framer-motion";

import { services } from "./constants/main";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-1/2 lg:w-1/4 p-2 flex justify-center"
  >
    <div className="w-[200px] h-[200px] green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-6 flex flex-col items-center justify-center h-full">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
      </div>
    </div>
  </motion.div>
);

export const About = () => (
  <div id="about" className="about px-6 sm:px-12 lg:px-24 py-12">
    <motion.div variants={textVariant()}>
      <p className="text-secondary text-md uppercase tracking-wide">
        Introduction
      </p>
      <h2 className="text-white text-5xl font-bold mt-2">Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-6 text-secondary text-base sm:text-lg leading-relaxed max-w-3xl"
    >
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
      I'm a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world
      problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className="mt-16 mb-10 flex flex-wrap justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </div>
);
