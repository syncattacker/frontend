// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "https://house-zjit.onrender.com/api",
//   withCredentials: true,
// });

// export default apiRequest;

import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://house-zjit.onrender.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

apiRequest.interceptors.request.use((config) => {
  console.log("Authorization Header:", config.headers.Authorization); // Check if the token is set
  return config;
});

export default apiRequest;
