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
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance width the salary and field to
            work
          </p>
          <p>The process of submitting an aplication was quite cosy</p>
        </div>
      </div>
    </motion.section>
  );
};
