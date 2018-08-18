import { List, Image } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../actions/navigationActions";

class BottomMenu extends Component {
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }

  onClickMenuItem(e, { name }) {
    this.props.actions.navigateTo(name);
  }

  render() {
    let { activeItem, options } = this.props;
    return (
      <List inverted link>
        {options.map(o => (
          <List.Item
            name={o.name}
            key={o.name}
            as={Link}
            to={o.route}
            active={activeItem === o.name}
            onClick={this.onClickMenuItem}
          >
            {o.title}
          </List.Item>
        ))}
      </List>
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
)(BottomMenu);
