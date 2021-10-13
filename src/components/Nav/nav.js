import React from "react";

import classes from "./nav.module.css";

function Nav(props) {
  return (
    <nav>
      <ul className={classes.list}>
        <li
          className={classes.li}
          onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handleSkillsDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.skills].join(" ")}>
            Notable skills
          </div>
        </li>
        <li
          className={classes.li}
          onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handlePathDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.path].join(" ")}>
            My background
          </div>
        </li>
        <li
          className={classes.li}
          onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handleAboutDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.about].join(" ")}>
            About me
          </div>
        </li>
        <li
          className={classes.li}
          onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handleOxerDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.oxer].join(" ")}>Oxer</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
