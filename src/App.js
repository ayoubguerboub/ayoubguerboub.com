import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import TraceTrajectoires from "./components/TraceTrajectoires/TraceTrajectoires";
import ColouredSquares from "./components/ColouredSquares/ColouredSquares";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/trace-trajectoires" component={TraceTrajectoires} exact />
      <Route path="/coloured-squares" component={ColouredSquares} exact />
    </BrowserRouter>
  );
}

export default App;
