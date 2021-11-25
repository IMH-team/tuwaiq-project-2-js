import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Dashboard from "./components/dashboard/index";
import Footer from "./components/footer/index"
// import HomePage from "./components/Homepage";
import SignIn from "./components/SignIn/index"

require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Dashboard />
      <SignIn/>
      {/* <HomePage/> */}
      <Footer/>
    </div>
  );
};

export default App;
