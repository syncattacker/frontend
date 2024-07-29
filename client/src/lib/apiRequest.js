// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "https://house-zjit.onrender.com/api",
//   withCredentials: true,
// });

//  export default apiRequest;

import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://house-zjit.onrender.com/api",
});

apiRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  console.log("Authorization Header:", config.headers.Authorization); // Debugging
  return config;
});

export default apiRequest;
