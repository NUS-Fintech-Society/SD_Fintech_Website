import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const request = {
  get: (url, settings) => {
    return api.get(url, settings);
  },
  post: (url, data) => {
    return api.post(url, data);
  },
};

export default request;
