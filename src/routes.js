import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  OurServices,
  Error,
  Header,
  Footer
} from "./components";

class Navigation extends Component {
  constructor() {
    super();
    this.state = { activeItem: "home" };
  }

  handleItemClick(e, { name }) {
    e.preventDefault();
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header
            currenItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nosotros" component={About} />
            <Route path="/contacto" component={Contact} />
            <Route path="/nuestros-servicios" component={OurServices} />
            <Route component={Error} />
          </Switch>
          <Footer
            currenItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;
