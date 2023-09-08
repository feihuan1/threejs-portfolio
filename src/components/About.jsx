import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWraper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full select-none">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-cart "
      >
        <div
          options={{ max: 45, scale: 1, speed: 459 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With a strong foundation in web development and a passion for creating
        captivating digital experiences, I bring a diverse skill set to the
        table. Proficient in HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
        React, Redux, Next.js, and Three.js, my journey in web development is
        guided by a love for coding that drives my everyday work. I'm dedicated
        to ongoing learning and eagerly explore new technologies to enhance my
        craft. While web development is my primary focus, I also enjoy game
        development as a hobby, utilizing C# in Unity to explore the exciting
        world of gaming. I'm excited to collaborate and contribute to the
        creation of exceptional digital solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, 'about');
