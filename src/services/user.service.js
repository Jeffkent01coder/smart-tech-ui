import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:5000";

const getAllProducts = () => {
  return axios.get(API_URL + "/products");
};

const getProduct = (id) => {
  return axios.get(API_URL + `/products/${id}`);
};

const addProduct = (productData) => {
  return axios.post(API_URL + "/products", productData, {
    headers: authHeader(),
  });
};

const updateProduct = (id, productData) => {
  return axios.put(API_URL + `/products/${id}`, productData, {
    headers: authHeader(),
  });
};

const deleteProduct = (id) => {
  return axios.delete(API_URL + `/products/${id}`, { headers: authHeader() });
};

const searchProducts = (query) => {
  return axios.get(API_URL + `/products/search?query=${query}`);
};

const filterProductsByCategory = (categoryId) => {
  return axios.get(API_URL + `/products/filter/${categoryId}`);
};

export default {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  filterProductsByCategory,
};
