import * as types from "../constants/actionTypes";

const navigationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.NAVIGTE:
      return Object.assign({}, state, { page: action.page });
    default:
      return Object.assign({}, state, { page: "home" });
  }
};

export default navigationReducer;
