import React from "react";
import Navigation from "./components/navigation/index";
import Footer from "./components/footer/index";
import HomePage from "./components/Homepage/index";
import SignIn from "./components/SignIn/index";

require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      {/* <Navigation />
      <HomePage />
      <Footer /> */}
      <SignIn />
    </div>
  );
};

export default App;
