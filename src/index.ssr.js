import React from "react";
import App from "./App";
import { StaticRouter } from "react-router-dom";

export default (context, url) => (
  <StaticRouter context={context} location={url}>
    <App />
  </StaticRouter>
);
