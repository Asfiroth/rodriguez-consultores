import * as types from "../constants/actionTypes";

export const navigateTo = page => {
  return { type: types.NAVIGTE, page };
};
