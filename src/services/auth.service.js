import axios from "axios";

const API_URL = "http://127.0.0.1:5000/";

const register = (username, phone, email, password) => {
  return axios.post(API_URL + "users/create_user", {
    username,
    phone,
    email,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios
        .post( API_URL + "signin", {
            email,
            password,
        } );
    if ( response.data.access_token ) {
        localStorage.setItem( "user", JSON.stringify( response.data ) );
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
