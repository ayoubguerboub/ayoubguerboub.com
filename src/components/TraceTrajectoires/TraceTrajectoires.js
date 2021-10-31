import React from "react";

import Trace from "./components/Trace";
import Infos from "./components/Infos";
import trajectoires from "./data/trajectoires.json";
import "./TraceTrajectoires.css";

const App = () => {
  const colors = ["blue", "red", "green", "orange", "purple"];
  // un simple tableau permettant de récupérer à chaque fois les couleurs dans l'ordre d'apparition des données

  trajectoires.forEach((trajectoire) => {
    // cette fonction linéarise les données en ajoutant une préicision à la seconde de chaque trajectoire
    let i = 0;
    while (i < trajectoire.points.length) {
      // on utilise plutôt une boucle while pour pallier aux bugs générés par les changements de taille du tableau
      if (trajectoire.points[i + 1]) {
        if (trajectoire.points[i + 1].time - trajectoire.points[i].time > 1) {
          trajectoire.points.splice(i + 1, 0, {
            // on ajoute les données manquantes en générant des approximations grâce aux moyennes des données existantes
            time: trajectoire.points[i].time + 1,
            x:
              trajectoire.points[i].x +
              (trajectoire.points[i + 1].x - trajectoire.points[i].x) /
                (trajectoire.points[i + 1].time - trajectoire.points[i].time),
            y:
              trajectoire.points[i].y +
              (trajectoire.points[i + 1].y - trajectoire.points[i].y) /
                (trajectoire.points[i + 1].time - trajectoire.points[i].time),
          });
        }
      }
      i++;
    }
  });

  return (
    <div className="App">
      <Trace trajectoires={trajectoires} colors={colors} />
      <Infos trajectoires={trajectoires} colors={colors} />
    </div>
  );
};

export default App;
