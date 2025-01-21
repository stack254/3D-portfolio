import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={skill.icon}
          alt={skill.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{skill.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skill.points.map((point, index) => (
            <p
              key={`skill-point-${index}`}
              className="text-secondary text-[14px]">
              {point}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          As a full-stack developer, I possess a diverse set of skills spanning
          front-end, back-end, and DevOps technologies. My expertise allows me
          to create robust, scalable, and user-friendly applications. Here's an
          overview of my key skills:
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {skills.map((skill, index) => (
          <SkillCard key={`skill-${index}`} index={index} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
