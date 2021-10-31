import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import TraceTrajectoires from "./components/TraceTrajectoires/TraceTrajectoires";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/trace-trajectoires" component={TraceTrajectoires} exact />
    </BrowserRouter>
  );
}

export default App;
