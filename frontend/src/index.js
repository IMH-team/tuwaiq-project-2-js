import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/index";
import OneInformation from "./components/dashboard/OneInformation";
import Permissions from "./components/Permissions/Permissions";
import Permits from "./components/Permits/permits";
import Profile from "./components/profile/index";
import "bootstrap/dist/css/bootstrap.min.css";
// import provider
// import store

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Permissions" element={<Permissions />}></Route>
      <Route path="/Permits" element={<Permits />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/OneInformation/:name" element={<OneInformation />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
