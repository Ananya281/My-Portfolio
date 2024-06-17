import React from 'react'
import {BallCanvas} from './canvas';
import { technologies } from './constants/main';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { fadeIn} from "../utils/motion";

export const Tech = ()=>{
    return(
        <div className='tech mt-20 ml-20' id='tech'>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    My Knowledge
                </p>
                <h2 className={styles.sectionHeadText}>
                    Skills
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-20 mb-20 ml-auto mr-auto text-secondary text-[17px] max-w-3xl leading-[30px]'>
                <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology)=>(
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon}/>
                    </div>
                ))}
                </div>
            </motion.p>
        </div>
    )
}