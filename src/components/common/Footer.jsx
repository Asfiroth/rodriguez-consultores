import PropTypes from "prop-types";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    const { handleItemClick } = props;
    this.handleItemClick = handleItemClick.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ activeItem: props.currenItem });
  }

  render() {
    // const { activeItem } = this.state;
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Acerca de</h4>
              <div className="ui inverted link list">
                {/* <Menu pointing secondary text vertical>
                  <Menu.Item
                    name="home"
                    active={this.state.activeItem === "home"}
                    onClick={this.handleItemClick}
                  >
                    Inicio
                  </Menu.Item>
                  <Menu.Item
                    name="about"
                    active={this.state.activeItem === "about"}
                    onClick={this.handleItemClick}
                  >
                    Nosotros
                  </Menu.Item>
                  <Menu.Item
                    name="services"
                    active={this.state.activeItem === "services"}
                    onClick={this.handleItemClick}
                  >
                    Servicios
                  </Menu.Item>
                  <Menu.Item
                    name="contact"
                    active={this.state.activeItem === "contact"}
                    onClick={this.handleItemClick}
                  >
                    Contacto
                  </Menu.Item>
                </Menu> */}
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Servicios</h4>
              <div className="ui inverted link list">
                {/* <a href="/Services" className="item">
                  Capacitación
                </a>
                <a href="/Services" className="item">
                  Asesoría y Consultorías
                </a>
                <a href="/Services" className="item">
                  Trámites
                </a> */}
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Siguenos en</h4>
              <span className="fa fa-facebook-official" />
              <span className="fa fa-twitter" />
              <p>
                Rodríguez Consultores &amp; Asociados ©{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.element,
  currentItem: PropTypes.string,
  handleItemClick: PropTypes.func
};

export default Footer;
