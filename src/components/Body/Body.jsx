import { WhatDoIHelp, projectExperience } from "../../utils/data";
import css from "./Body.module.scss";

export const Body = () => {
  return (
    <secction className={css.wraper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}>
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}
          <div className={css.stats}>
            <div className={css.stat}>
              <span>285+</span>
              <span>Projects Completed</span>
            </div>
            <div className={css.stat}>
              <span>190+</span>
              <span>Happi Clients</span>
            </div>
          </div>
        </div>
      </div>
    </secction>
  );
};
