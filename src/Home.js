import React from "react";
import Infos from "./components/Infos/infos.js";
import Nav from "./components/Nav/nav.js";
import Gradient from "./components/Gradient/gradient.js";
import Skills from "./components/Skills/skills.js";
import Path from "./components/Path/path.js";
import About from "./components/About/about.js";
import Oxer from "./components/Oxer/oxer.js";
import Crossbg from "./components/Crossbg/crossbg.js";

import classes from "./App.module.css";
import { useState } from "react";

const Home = () => {
  const [infosDisp, setInfosDisp] = useState(true);
  const infosClasses = [classes.infos];

  const [rightCDisp, setRightCDisp] = useState(true);
  const rightCClasses = [classes.rightC];

  const [skillsDisp, setSkillsDisp] = useState(false);
  const skillsClasses = [classes.container];

  const [pathDisp, setPathDisp] = useState(false);
  const pathClasses = [classes.container];

  const [aboutDisp, setAboutDisp] = useState(false);
  const aboutClasses = [classes.container];

  const [oxerDisp, setOxerDisp] = useState(false);
  const oxerClasses = [classes.container];

  const gradientClasses = [classes.gradient];
  const contentClasses = [classes.content];

  function handleInfosDisp(e, appear) {
    if (appear) setInfosDisp(true);
    else setInfosDisp(false);
  }

  function handleRightCDisp(e, appear) {
    if (appear) setRightCDisp(true);
    else setRightCDisp(false);
  }

  function handleSkillsDisp(e, appear) {
    if (appear) setSkillsDisp(true);
    else setSkillsDisp(false);
  }

  function handlePathDisp(e, appear) {
    if (appear) setPathDisp(true);
    else setPathDisp(false);
  }

  function handleAboutDisp(e, appear) {
    if (appear) setAboutDisp(true);
    else setAboutDisp(false);
  }

  function handleOxerDisp(e, appear) {
    if (appear) setOxerDisp(true);
    else setOxerDisp(false);
  }

  if (!infosDisp || !rightCDisp) contentClasses.push(classes.hide);

  if (!skillsDisp) skillsClasses.push(classes.hide);
  else gradientClasses.push(classes.blue);

  if (!pathDisp) pathClasses.push(classes.hide);
  else gradientClasses.push(classes.orange);

  if (!aboutDisp) aboutClasses.push(classes.hide);
  else gradientClasses.push(classes.green);

  if (!oxerDisp) oxerClasses.push(classes.hide);
  else gradientClasses.push(classes.pink);

  return (
    <div className={classes.App}>
      <Gradient css={gradientClasses.join(" ")} />
      <Skills
        css={skillsClasses.join(" ")}
        handleSkillsDisp={handleSkillsDisp}
        handleInfosDisp={handleInfosDisp}
        handleRightCDisp={handleRightCDisp}
      />
      <Path
        css={pathClasses.join(" ")}
        handlePathDisp={handlePathDisp}
        handleInfosDisp={handleInfosDisp}
        handleRightCDisp={handleRightCDisp}
      />
      <About
        css={aboutClasses.join(" ")}
        handleAboutDisp={handleAboutDisp}
        handleInfosDisp={handleInfosDisp}
        handleRightCDisp={handleRightCDisp}
      />
      <Oxer
        css={oxerClasses.join(" ")}
        handleOxerDisp={handleOxerDisp}
        handleInfosDisp={handleInfosDisp}
        handleRightCDisp={handleRightCDisp}
      />
      <section className={contentClasses.join(" ")}>
        <Infos css={infosClasses} />
        <div className={rightCClasses.join(" ")}>
          <p className={classes.presentation}>
            I am a young web dev
            <br />
            creative, passionnate, ambitious.
          </p>
          <Nav
            handleInfosDisp={handleInfosDisp}
            handleRightCDisp={handleRightCDisp}
            handleSkillsDisp={handleSkillsDisp}
            handlePathDisp={handlePathDisp}
            handleAboutDisp={handleAboutDisp}
            handleOxerDisp={handleOxerDisp}
          />
        </div>
      </section>
      <Crossbg />
    </div>
  );
};

export default Home;
