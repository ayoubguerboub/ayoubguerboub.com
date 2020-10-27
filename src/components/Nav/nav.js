import React from 'react';

import classes from './nav.module.css';

function Nav(props) {
  return (
    <nav>
      <ul className={classes.list}>
        <li className={classes.li} onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handleSkillsDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.skills].join(' ')}>Mes compétences</div>
        </li>
        <li className={classes.li} onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handlePathDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.path].join(' ')}>Mon parcours</div>
        </li>
        <li className={classes.li} onClick={() => {
            props.handleInfosDisp();
            props.handleRightCDisp();
            props.handleOxerDisp(null, "appear");
          }}
        >
          <div className={[classes.text, classes.oxer].join(' ')}>Oxer</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
