import React from "react";

import classes from "./path.module.css";

function Path(props) {
  return (
    <div className={props.css}>
      <div className={classes.path}>
        <div
          className={classes.backarrow}
          onClick={() => {
            props.handlePathDisp();
            props.handleInfosDisp(null, "appear");
            props.handleRightCDisp(null, "appear");
          }}
        ></div>

        <div className={classes.date}>2020</div>
        <h3 className={classes.withImage}>
          Full Stack engineer - 42 Shcool Paris
        </h3>
        <img src="/img/42-logo.svg" alt="42 School" />
        <br />

        <div className={classes.separator}></div>

        <div className={classes.date}>2018</div>
        <h3>Bachelor's degree in mathematics and computer science</h3>

        <div className={classes.separator}></div>
        <br />

        <div className={classes.date}>2015</div>
        <h3>Science High School Diploma - Alexandre Dumas High School</h3>
      </div>
    </div>
  );
}

export default Path;
