import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import image from "../../assets/image.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

export const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amoutn: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexcenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Lastest Works</span>

            <p>Perfect solution for digital experience</p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={image}
            alt=""
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={image1}
            alt=""
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src={image2}
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
};
