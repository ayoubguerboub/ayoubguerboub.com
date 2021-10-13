import React from "react";

import classes from "./about.module.css";

function Path(props) {
  return (
    <div className={props.css}>
      <div className={classes.about}>
        <div
          className={classes.backarrow}
          onClick={() => {
            props.handleAboutDisp();
            props.handleInfosDisp(null, "appear");
            props.handleRightCDisp(null, "appear");
          }}
        ></div>
        <div className={classes.text}>
          <div>
            <h3>Who am I ?</h3>
            <p>
              Being self-taught since my younger age in computer science
              technologies and particularly web development, I was convinced
              right away that it was what I wanted to do.
              <br />
              I am also a very hard worker, always motivated by passion, so I
              put my heart into it, with much seriousness, and a lot of
              perfectionism.
              <br />
              Apart from computer science, I am also passionate about astronomy,
              video games, and photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
