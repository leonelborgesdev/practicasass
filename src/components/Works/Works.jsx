import React from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import { workExp } from "../../utils/data";

export const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">My Work Experience</span>
        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <div className={`flexCenter ${css.exp}`} key={i}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
