import React, { useEffect, useState } from "react";
import "./ColouredSquares.css";

function App() {
  const [squareColors, setSquareColors] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  useEffect(() => {
    const storedSquareColors = JSON.parse(
      window.localStorage.getItem("squareColors") // accessing local storage to get the stored color values
    );
    if (storedSquareColors) setSquareColors([...storedSquareColors]); // updating state according to storage data
  }, []);

  useEffect(() => {
    window.localStorage.setItem("squareColors", JSON.stringify(squareColors)); // updating the storage on each state change
  }, [squareColors]);

  const handleColors = (e, color) => {
    // this function handles click events on the buttons and updates the state accordingly
    const newSquareColors = [...squareColors];
    let i = newSquareColors.length - 1;
    while (i >= 0) {
      // looping through the array backwards so any change is not affected by the previous one
      if (newSquareColors[i + 1]) {
        newSquareColors[i + 1] = newSquareColors[i]; // shifting every color value to the right to make place for the new one
      }
      i--;
    }
    newSquareColors[0] = color; // finally we set the first square to the color of the button clicked
    setSquareColors([...newSquareColors]);
  };

  const squaresDOM = squareColors.map((squareColor, i) => {
    // genrating DOM elements for the squares
    return (
      <div
        key={i}
        className="square"
        style={{ backgroundColor: squareColor }}
      ></div>
    );
  });

  return (
    <div className="ColouredSquares">
      <button
        className="red-button"
        onClick={(e) => handleColors(e, "rgb(158, 47, 47)")} // calling handleColors with the right color
      >
        Red
      </button>

      <button
        className="green-button"
        onClick={(e) => handleColors(e, "rgb(30, 185, 95)")}
      >
        Green
      </button>

      <button
        className="blue-button"
        onClick={(e) => handleColors(e, "rgb(67, 51, 207)")}
      >
        Blue
      </button>

      <button
        className="purple-button"
        onClick={(e) => handleColors(e, "rgb(145, 29, 145)")}
      >
        Purple
      </button>

      <div className="squares-wrapper">{squaresDOM}</div>
    </div>
  );
}

export default App;
