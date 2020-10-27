import React from 'react';

import classes from './crossbg.module.css';

function Nav() {
  return (
    <div className={classes.crossbg}>
      <div className={classes.bluecross}></div>
      <div className={classes.pinkcross}></div>
      <div className={classes.yellowcross}></div>
    </div>
  );
}

export default Nav;