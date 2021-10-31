import React from "react";

const Infos = (props) => {
  const durations = [];
  const averageSpeeds = [];
  // on stocke dans ces tableaux les valeurs singulières récupérées par les autres fonctions ci-dessous afin d'en faire des moyennes

  const getDuration = (trajectoire) => {
    const duration =
      trajectoire.points[trajectoire.points.length - 1].time -
      trajectoire.points[0].time;
    durations.push(duration);
    return duration;
  };

  const getSpeeds = (trajectoire) => {
    // cette fonction renvoie un tableau contenant toutes vitesses entre l'intégralité des points d'une trajectoire
    const speeds = trajectoire.points.map((point, i) => {
      if (trajectoire.points[i + 1]) {
        const distance = Math.abs(
          trajectoire.points[i + 1].x -
            point.x +
            (trajectoire.points[i + 1].y - point.y)
        );
        const time = trajectoire.points[i + 1].time - point.time;
        return distance / time;
      }
      return null;
    });
    return speeds;
  };

  const getAverageSpeed = (trajectoire) => {
    const speeds = getSpeeds(trajectoire);
    const averageSpeed = speeds.reduce((a, b) => a + b) / speeds.length;
    averageSpeeds.push(averageSpeed);
    return averageSpeed;
  };

  const getNumberOfStops = (trajectoire) => {
    let numberOfStops = 0;
    let stopped = false;
    getSpeeds(trajectoire).forEach((speed) => {
      if (speed < 0.01 && stopped === false) {
        numberOfStops++;
        stopped = true;
      }
      if (speed >= 0.01) {
        stopped = false;
      }
    });
    return numberOfStops;
  };

  return (
    <div>
      <ul className="mainList">
        {props.trajectoires.map((trajectoire, i) => {
          return (
            <li
              className="subList"
              key={trajectoire.id}
              style={{ color: props.colors[i] }}
            >
              {trajectoire.id} :
              <ul>
                <li>Durée du trajet : {getDuration(trajectoire)}</li>
                <li>
                  Vitesse moyenne : {getAverageSpeed(trajectoire).toFixed(5)}{" "}
                </li>
                <li>
                  Distance parcourue :{" "}
                  {(
                    getAverageSpeed(trajectoire) * getDuration(trajectoire)
                  ).toFixed(5)}
                </li>
                <li>Nombre d'arrêts: {getNumberOfStops(trajectoire)} </li>
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="generalInfos">
        Durée moyenne d'un trajet :{" "}
        {durations.reduce((a, b) => a + b) / durations.length}
        <br />
        Vitesse moyenne d'un trajet :{" "}
        {(averageSpeeds.reduce((a, b) => a + b) / averageSpeeds.length).toFixed(
          5
        )}
      </div>
    </div>
  );
};

export default Infos;
