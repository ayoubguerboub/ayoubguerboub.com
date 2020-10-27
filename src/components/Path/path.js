import React from 'react';

import classes from './path.module.css';

function Path(props) {
  return (
    <div className={props.css}>
      <div className={classes.path}>
        <div className={classes.backarrow} onClick={() => {
          props.handlePathDisp();
          props.handleInfosDisp(null, "appear");
          props.handleRightCDisp(null, "appear");
        }}></div>
        <div className={classes.date}>2015</div>
        <h3>Bac S Lycée Alexandre Dumas</h3>

        <div className={classes.separator}></div><br/>

        <div className={classes.date}>2016 - 2019</div>
        <h3>Auto-didacte développeur web</h3>

        <div className={classes.separator}></div><br/>

        <div className={classes.date}>2020</div>
        <h3 className={classes.withImage}>École 42 Paris</h3>
        <img src="/img/42-logo.svg" alt="École 42"/>
      </div>
    </div>
  );
}

export default Path;
