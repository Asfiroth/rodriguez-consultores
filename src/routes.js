import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Contact, OurServices, ErrorPage } from "./components";

class Router extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nosotros" component={About} />
          <Route path="/contacto" component={Contact} />
          <Route path="/nuestros-servicios" component={OurServices} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
