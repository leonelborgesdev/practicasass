import css from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Logo</div>
        <ul className={`flexCenter ${css.menu}`}>
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
      </div>
    </div>
  );
};
