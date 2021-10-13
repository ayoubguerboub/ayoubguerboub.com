import React from "react";

import classes from "./oxer.module.css";

function Path(props) {
  return (
    <div className={props.css}>
      <div className={classes.oxer}>
        <div
          className={classes.backarrow}
          onClick={() => {
            props.handleOxerDisp();
            props.handleInfosDisp(null, "appear");
            props.handleRightCDisp(null, "appear");
          }}
        ></div>
        <div className={classes.grid}>
          <img src="/img/oxer-screenshot.png" alt="Oxer App" />
          <div>
            <h3>
              Oxer is a web and mobile app that represents my greatest
              achievement to this day.
            </h3>
            <p>
              It is a service app for horseback riders and horse riding
              enthusiasts that unites them around a shared passion.
              <br />
              The app allows them to search for horse riding competitions around
              them that answer to their critera, and to earn rewards depending
              on their results in those competitions.
              <br />
              It is coded in React for the web part, React Native for the mobile
              part, and Mongoose and Express for the backend part.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
