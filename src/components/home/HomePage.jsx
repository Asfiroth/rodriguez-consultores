import React, { Component } from "react";
import info from "../../data/home-data";
import ButtonLink from "./ButtonLink";

import * as routes from "../../constants/route-paths";
import { Segment, Header } from "semantic-ui-react";
class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Segment vertical className="img-back slide stripe">
        <div className="ui text service-item">
          <Header content={info.title} as="h1" inverted className="s-title" />
          <Header content={info.description} as="h2" inverted />
          <ButtonLink route={routes.ourServices} />
        </div>
      </Segment>
    );
  }
}

export default HomePage;
