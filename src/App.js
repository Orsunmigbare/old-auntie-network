import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import UiRoute from "./routes/routes";

function App() {
  return (
    <Router history={history}>
      <UiRoute />
    </Router>
  );
}

export default App;
