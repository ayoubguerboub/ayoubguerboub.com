import React from "react";
import Path from "paths-js/path";

const Trace = (props) => {
  const paths = props.trajectoires.map((trajectoire, i) => {
    // on génère les tracés de sorte à ce que 1 unité soit égale à 100px afin d'améliorer la lisibilité du rendu
    let path = Path().moveto(trajectoire.points[0].x, trajectoire.points[0].y);
    trajectoire.points.forEach((point) => {
      path = path.lineto(point.x * 100, point.y * 100);
    });
    return (
      <path
        key={trajectoire.id}
        d={path.print()}
        fillOpacity="0"
        stroke={props.colors[i]}
        // on retrouve ici la couleur grâce au positionnement des données de trajectoire dans le tableau
      />
    );
  });

  return (
    <div>
      <svg
        width={"90vw"}
        height={"700"}
        style={{
          transform: "scaleY(-1)",
        }}
      >
        {paths}
      </svg>
    </div>
  );
};

export default Trace;
