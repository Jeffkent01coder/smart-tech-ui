// src/reducers/auth.js
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // Add other action types for authentication as needed
} from "../actions/type"; // Define these actions later

const initialState = {
  user: null,
  // Add other initial state properties for authentication as needed
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null, // or handle failure state if needed
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    // Add other cases for authentication-related actions as needed
    default:
      return state;
  }
};

export default authReducer;
