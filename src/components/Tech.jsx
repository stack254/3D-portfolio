import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechIcon = ({ name, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-28 h-28 flex flex-col items-center justify-center">
      <img src={icon} alt={name} className="w-16 h-16 object-contain" />
      <p className="text-center mt-2 text-sm">{name}</p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>
          My tech stack
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Technologies
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <TechIcon
            key={technology.name}
            index={index}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
