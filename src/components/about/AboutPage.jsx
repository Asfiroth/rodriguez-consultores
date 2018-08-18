import React, { Component } from "react";
import info from "../../data/about-data";
import { Container, Segment, Header } from "semantic-ui-react";

class AboutPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Segment vertical className="img-back about stripe">
          <Container text>
            <Header as="h1" inverted content={info.title} />
            <Header as="h2" content={info.description} />
          </Container>
        </Segment>
        <Segment vertical className="stripe">
          <Container text className="us">
            {info.content.map((c, n) => (
              <div key={n}>
                <Header as="h3" key={n + 1} content={c.heading} />
                {c.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </Container>
        </Segment>
      </div>
    );
  }
}

export default AboutPage;
