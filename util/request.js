import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
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
