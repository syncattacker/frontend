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

export default apiRequest;

