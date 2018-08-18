import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../actions/navigationActions";

class ButtonLink extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.actions.navigateTo("services");
  }

  render() {
    return (
      <Link
        to={this.props.route}
        className="ui inverted yellow button"
        onClick={this.onClick}
      >
        Somos lo que ofrecemos
      </Link>
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
)(ButtonLink);
