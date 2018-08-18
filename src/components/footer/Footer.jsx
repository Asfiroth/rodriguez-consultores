import PropTypes from "prop-types";
import React, { Component } from "react";
import routeData from "../../data/routing-data";
import BottomMenu from "./BottomMenu";
import { Icon, Segment, Container, Grid, Header } from "semantic-ui-react";

class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <Segment inverted vertical className="footer">
        <Container>
          <Grid inverted divided stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <BottomMenu options={routeData} />
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted content="Servicios" />
                <BottomMenu options={routeData} />
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted content="Siguenos en" />
                <Icon name="facebook official" />
                <Icon name="twitter" />
                <p>Rodríguez Consultores & Asociados © {currentYear}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
