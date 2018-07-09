import {
  FETCH_AUTH_SUCCESS,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGOUT_SUCCESS,
  FETCH_FAV_MOVIES_SUCCESS
} from "../types/index";

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        isAuthenticated: true
      };
    case FETCH_FAV_MOVIES_SUCCESS:
      return {
        ...state,
        favouriteMovie: action.data
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        auth: action.data
      };
    default:
      return state;
  }
}
