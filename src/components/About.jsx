import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchText from "./GlitchText";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <GlitchText>Overview.</GlitchText>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Highly motivated computer science enthusiast and tech entrepreneur with a passion for AI-driven problem solving. 
        I bridge software engineering, web development, and intelligent automation to turn ambitious ideas into reliable products. 
        From Flask-powered chatbots and deep learning based animal detection to community-first web suites, I thrive on crafting experiences that create measurable impact.
      </motion.p>

      <motion.ul
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-6 text-secondary text-[16px] max-w-3xl leading-[28px] list-disc list-inside space-y-3'
      >
        <li>🧠 Blend of AI, fullstack engineering, and data storytelling honed through TradeSphere Global and Jamuna Foundation initiatives.</li>
        <li>🚀 Co-founding mindset with a track record of translating research prototypes—virtual try-on, voice emotion analytics, solar automation—into usable products.</li>
        <li>🌍 Advocate for accessible technology, multilingual collaboration, and continuous learning in fast-paced, impact-driven teams.</li>
      </motion.ul>

      <motion.ul
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-6 text-secondary text-[16px] max-w-3xl leading-[28px] list-disc list-inside space-y-2'
      >
        <li>Languages: Telugu (Fluent), English (Fluent), Hindi (Intermediate), Korean (Basic)</li>
        <li>Core strengths: Project management, critical thinking, design systems, effective communication, time management</li>
      </motion.ul>

      <motion.div
        variants={fadeIn("", "", 0.4, 1)}
        className='mt-10 w-full max-w-3xl'
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=kuruvamunirangadu&show_icons=true&theme=radical"
          alt="Munirangadu's GitHub stats"
          className='w-full rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,217,255,0.25)]'
        />
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
