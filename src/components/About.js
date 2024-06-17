import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { services } from "./constants/main";
import { fadeIn} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className="xs:w-[250px]">
      <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
      >
         <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
         <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  )
};

export const About=()=>{
    return (
        <div id='about' className="about ml-20">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
            <div className='mt-20 flex flex-wrap gap-20'>
                {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
        </div>
    )
}

