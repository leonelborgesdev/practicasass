import React from "react";
import css from "./Recomendations.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";

export const Recomendations = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        People Recomendations
      </div>
    </motion.section>
  );
};
