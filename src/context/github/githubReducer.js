import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
      break;
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      break;

    default:
      return state;
  }
};
