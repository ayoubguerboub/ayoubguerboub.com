import React from "react";

import classes from "./skills.module.css";

function Skills(props) {
  return (
    <div className={props.css}>
      <div className={classes.skills}>
        <div
          className={classes.backarrow}
          onClick={() => {
            props.handleSkillsDisp();
            props.handleInfosDisp(null, "appear");
            props.handleRightCDisp(null, "appear");
          }}
        ></div>
        <h3>Frontend</h3>
        <br />
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Vue.js</li>
          <li>Redux</li>
        </ul>
        <h3>Backend</h3>
        <br />
        <ul>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Django</li>
        </ul>
        <h3>Others</h3>
        <br />
        <ul>
          <li>Git/Github</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
