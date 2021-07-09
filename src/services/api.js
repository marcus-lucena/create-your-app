import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "localhost:8080/api"
    : process.env.URL_BASE;

const api = axios.create({
  baseURL,
});

export default api;
