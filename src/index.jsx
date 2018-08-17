/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Navigation from "./routes";

import jquery from "jquery";

window.$ = window.jQuery = jquery;

import "./scss/styles.scss";
import "semantic-ui-css/semantic.min.css";

require("./favicon.ico");

render(
  <AppContainer>
    <Navigation />
  </AppContainer>,
  document.getElementById("app")
);
