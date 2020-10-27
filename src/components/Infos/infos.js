import React, {useState, useEffect} from 'react';

import classes from './infos.module.css';

function Infos(props) {
  const [nb, setNb] = useState(0);
  const titles = ["Développeur web", "Développeur front-end", "Développeur React"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (nb < 2) setNb(nb + 1);
      else setNb(0);
    }, 2000);
    return () => clearInterval(interval);
  }, [nb]);



  return (
    <div className={props.css.join(' ')}>
      <div className={classes.location}>Paris</div>
      <h1 className={classes.name}>Ayoub Guerboub</h1>
  <h2 className={classes.job}>{titles[nb]}</h2>
      <div className={classes.mobile}>06 68 42 42 79</div>
      <a href="https://www.linkedin.com/in/ayoubguerboub" className={classes.linkedin}>
        <img
          src="/img/linkedin-logo.png"
          alt="Linkedin"
          className={classes.icon}
        />
      </a>
      <a href="mailto:contact@ayoubguerboub.com">
        <img
          src="/img/email-icon.png"
          alt="Email me"
          className={classes.icon}
        />
      </a>
    </div>
  );
}

export default Infos;
