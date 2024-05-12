import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Logo</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portofolios</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
        </ul>
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};
