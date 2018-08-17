import { Menu } from "semantic-ui-react";

import PropTypes from "prop-types";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    const { handleItemClick, currentItem } = props;
    this.handleItemClick = handleItemClick.bind(this);
    this.state = { activeItem: currentItem };
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Inicio
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          Nosotros
        </Menu.Item>
        <Menu.Item
          name="services"
          active={activeItem === "services"}
          onClick={this.handleItemClick}
        >
          Servicios
        </Menu.Item>
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        >
          Contacto
        </Menu.Item>
      </Menu>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element
};

export default Header;
