import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // adjust if backend runs elsewhere
});

export default api;
