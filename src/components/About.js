import React from "react";
import { motion } from "framer-motion";

import { services } from "./constants/main";
import { styles } from "../styles";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-[200px] h-[200px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 flex flex-col items-center justify-center h-full">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-4"
          whileHover={{ rotate: 10 }}
        />
        <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </motion.div>
);

export const About = () => (
  <motion.div
    id="about"
    className="about px-6 sm:px-12 lg:px-24 py-12"
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <motion.div variants={textVariant()}>
      <p className="text-secondary text-md uppercase tracking-wide">
        Introduction
      </p>
      <h2 className="text-white text-5xl font-bold mt-2">Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="mt-6 text-secondary text-base sm:text-lg leading-relaxed max-w-3xl"
    >
       I specialize in developing engaging and user-friendly web applications with a strong focus on frontend technologies like React and Tailwind CSS. 
  With expertise in AI/ML, I enjoy creating innovative solutions that blend intuitive design with intelligent systems. 
  As a proactive learner and team player, I am committed to delivering scalable and impactful applications.
    </motion.p>

    <motion.div
      className="mt-16 mb-10 flex flex-wrap  justify-center"
      variants={fadeIn("", "tween", 0.3, 1)}
    >
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </motion.div>
  </motion.div>
);
