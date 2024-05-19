import css from "./Portfolio.module.scss";

export const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexcenter ${css.container}`}>
        <div className={css.heading}>
          <div>
            <span className="primaryText">My Lastest Works</span>

            <p>Perfect solution for digital experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
