import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-28 h-28 flex flex-col items-center justify-center m-2 bg-tertiary rounded-lg shadow-md">
    <img
      src={icon}
      alt={name}
      className="w-16 h-16 object-contain"
      loading="lazy"
    />
    <p className="mt-2 text-sm text-white-100">{name}</p>
  </motion.div>
);

export default SkillCard;
