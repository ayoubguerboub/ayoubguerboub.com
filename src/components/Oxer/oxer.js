import React from 'react';

import classes from './oxer.module.css';

function Path(props) {
  return (
    <div className={props.css}>
      <div className={classes.oxer}>
        <div className={classes.backarrow} onClick={() => {
          props.handleOxerDisp();
          props.handleInfosDisp(null, "appear");
          props.handleRightCDisp(null, "appear");
        }}></div>
        <div className={classes.grid}>
          <img src="/img/oxer-screenshot.png" alt="Oxer App"/>
          <div>
            <h3>Oxer est une appli web et mobile qui représente mon plus gros projet de développement web à ce jour.</h3>
            <p>Il s'agit d'une appli dirigée vers les cavaliers et fans d'équitation et qui les réunit autour d'une passion commune.<br/>
              L'application leur permet de rechercher des concours d'équiation qui correspondent à leurs critères, 
              et de gagner des récompenses en fonction de leurs classements en concours.<br/>
              Elle est codée en React pour la partie web, React Native pour la version mobile, et Mongoose et Express pour la partie backend.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
