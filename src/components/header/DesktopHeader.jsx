import { Menu, Image, Container, Visibility, Segment } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../actions/navigationActions";
import routeData from "../../data/routing-data";

class DesktoHeader extends Component {
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = { fixed: false };
  }

  onClickMenuItem(e, { name }) {
    this.props.actions.navigateTo(name);
  }

  hideFixedMenu() {
    this.setState({ fixed: false });
  }

  showFixedMenu() {
    this.setState({ fixed: true });
  }

  render() {
    const { fixed } = this.state;
    let { activeItem } = this.props;
    return (
      <Segment textAlign="center" vertical>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Container className="nav">
            <Link className="logo item" to={routeData[0].route}>
              <Image src="../../images/logo.png" />
            </Link>
            <Menu
              size="large"
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
            >
              {routeData.map(o => (
                <Menu.Item
                  name={o.name}
                  key={o.name}
                  as={Link}
                  to={o.route}
                  active={activeItem === o.name}
                  onClick={this.onClickMenuItem}
                  content={o.title}
                />
              ))}
            </Menu>
          </Container>
        </Visibility>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { activeItem: state.navigation.page };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(navigationActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktoHeader);
