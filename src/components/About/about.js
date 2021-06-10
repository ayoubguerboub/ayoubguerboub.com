import React from 'react';

import classes from './about.module.css';

function Path(props) {
	return (
		<div className={props.css}>
			<div className={classes.about}>
				<div
					className={classes.backarrow}
					onClick={() => {
						props.handleAboutDisp();
						props.handleInfosDisp(null, 'appear');
						props.handleRightCDisp(null, 'appear');
					}}
				></div>
				<div className={classes.text}>
					<div>
						<h3>Qui suis-je ?</h3>
						<p>
							Étant autodidacte depuis mon plus jeune âge sur les technologies
							de l’informatique et plus particulièrement le développement web,
							j'ai tout de suite été convaincu que c'était ma voie.
							<br />
							Je suis aussi un travailleur acharné, motivé par la passion depuis
							toujours. Je mets donc du cœur à l’ouvrage, du sérieux, et
							beaucoup de perfectionnisme.
							<br />
							Mis à part l'informatique, je suis passionné d'astronomie, de jeu
							vidéo, et de photographie.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Path;
