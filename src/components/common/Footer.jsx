import PropTypes from "prop-types";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../actions/navigationActions";

class Footer extends Component {
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }

  onClickMenuItem(e, { name }) {
    this.props.actions.navigateTo(name);
  }

  render() {
    const { activeItem } = this.props;
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Acerca de</h4>
              <div className="ui inverted link list">
                <Menu pointing secondary text vertical>
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
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
)(Footer);
