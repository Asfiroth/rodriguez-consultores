/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Router from "./routes";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Header, Footer } from "./components";
import "babel-polyfill";

import jquery from "jquery";

window.$ = window.jQuery = jquery;

import "./scss/styles.scss";
import "semantic-ui-css/semantic.min.css";

require("./favicon.ico");

const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById("app")
);
