import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://backend-1-2m31.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
