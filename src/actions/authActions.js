// src/actions/authActions.js
import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  // Add other action types for authentication as needed
} from "../actions/type"; // Define these actions later

// Action to perform user login
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/auth/login", { email, password }); // Adjust the API endpoint accordingly
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Action to perform user logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  // Additional logic for clearing user data from local storage or cookies, if needed
};

// Add other authentication-related actions as needed
