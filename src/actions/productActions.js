// src/reducers/productReducer.js
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  // Add other action types for products as needed
} from "../actions/type";

const initialState = {
  products: [], // Initialize as an empty array
  // Add other initial state properties for products as needed
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        // Handle failure state if needed
      };
    // Add other cases for product-related actions as needed
    default:
      return state;
  }
};

export default productReducer;
