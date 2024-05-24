import React from "react";
import css from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together
          </span>

          <span className="primaryText">
            Start by <a href="mailto:leonel03t@gmail.com">saying hi</a>
          </span>
        </div>
        <div className={css.right}>right</div>
      </div>
    </section>
  );
};
