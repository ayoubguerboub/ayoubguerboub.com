import React from 'react';

import classes from './skills.module.css';

function Skills(props) {
  return (
    <div className={props.css}>
      <div className={classes.skills}>
        <div className={classes.backarrow} onClick={() => {
          props.handleSkillsDisp();
          props.handleInfosDisp(null, "appear");
          props.handleRightCDisp(null, "appear");
        }}></div>
        <h3>Frontend</h3><br/>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <h3>Backend</h3><br/>
        <ul>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
        <h3>Autres</h3><br/>
        <ul>
          <li>Web design</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
