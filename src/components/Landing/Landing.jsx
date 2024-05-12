import css from "./Landing.module.scss";
import person from "../../assets/person.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export const Landing = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey Ther, <br /> I'm Hero.
          </motion.span>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I design beautiful simple
            <br />
            things, And I love whta i do
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.3, 1)}
            src={person}
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:leonel03t@gmail.com">
          leonel03t@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <span>CERTIFIED PROFETIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
