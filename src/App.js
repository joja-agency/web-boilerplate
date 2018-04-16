import React from "react";
import { withRouter } from "react-router";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

import "./assets/css/main.scss";

const App = () => (
  <div id="main">
    <Logo />
    <Navigation />
  </div>
);

export default withRouter(App);
