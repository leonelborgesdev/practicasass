import css from "./Landing.module.scss";
import person from "../../assets/person.png";

export const Landing = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey Ther, <br /> I'm Hero.
          </span>
          <span className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love whta i do
          </span>
        </div>

        <div className={css.person}>
          <img src={person} alt="" />
        </div>

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <span>CERTIFIED PROFETIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
