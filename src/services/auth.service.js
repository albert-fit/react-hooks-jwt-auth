import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (email, first_name, last_name, company, job, password) => {
  return axios.post(API_URL + "signup", {
    email,
    first_name,
    last_name,
    company,
    job,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
