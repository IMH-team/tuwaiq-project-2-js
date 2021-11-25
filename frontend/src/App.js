import React from "react";
import Navigation from "./components/navigation/index";
import Footer from "./components/footer/index";
import HomePage from "./components/Homepage/index";

require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
