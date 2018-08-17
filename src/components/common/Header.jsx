import { Menu } from "semantic-ui-react";

import PropTypes from "prop-types";
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../actions/navigationActions";

class Header extends Component {
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }

  onClickMenuItem(e, { name }) {
    this.props.actions.navigateTo(name);
  }

  render() {
    let { activeItem } = this.props;
    return (
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.onClickMenuItem}
        >
          Inicio
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.onClickMenuItem}
        >
          Nosotros
        </Menu.Item>
        <Menu.Item
          name="services"
          active={activeItem === "services"}
          onClick={this.onClickMenuItem}
        >
          Servicios
        </Menu.Item>
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={this.onClickMenuItem}
        >
          Contacto
        </Menu.Item>
      </Menu>
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
)(Header);
