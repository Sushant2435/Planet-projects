import axios from "axios";
// Create an instance of Axios

const axiosInstance = axios.create({
  //   baseURL: `${import.meta.env.VITE_API_URL}`, // replace with your API base URL
  baseURL: "https://planetapi.akshtest.xyz/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in every request

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

// import axios from "axios";
// // import jwtDecode from "jwt-decode";
// import * as jwtDecode from "jwt-decode"; // Import everything as an object.

// import { store } from "../store"; // Adjust import based on your project structure
// import { logout } from "../features/auth/authSlice";

// const axiosInstance = axios.create({
//   baseURL: "https://planetapi.akshtest.xyz/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor to check and refresh token on request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       // Check token expiration
//       const decodedToken = jwtDecode(token);
//       const currentTime = Date.now() / 1000;

//       // If token is expired, log out
//       if (decodedToken.exp < currentTime) {
//         store.dispatch(logout());
//         localStorage.removeItem("token");
//         window.location.href = "/login"; // Redirect to login page
//       } else {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
