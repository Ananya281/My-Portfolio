import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "./constants/main";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const Tech = () => (
  <div id="tech" className="tech px-6 sm:px-12 lg:px-24 py-12">
    {/* Section Header */}
    <motion.div variants={textVariant()}>
      <p className="text-secondary text-md uppercase tracking-wide">
        My Knowledge
      </p>
      <h2 className="text-white text-5xl font-bold mt-2">Skills</h2>
    </motion.div>

    {/* Skill Balls */}
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-12 flex flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </motion.div>
  </div>
);
