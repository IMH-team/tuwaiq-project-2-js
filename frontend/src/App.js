import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Dashboard from "./components/dashboard/index";

require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Dashboard />
    </div>
  );
};

export default App;
