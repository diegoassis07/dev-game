import axios from "axios";

const API = axios.create({
  baseURL: "https://api.rawg.io/api",
});

API.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: "d589abbd2413457a995faa08b0497098",
  };

  return config;
});

export default API;
