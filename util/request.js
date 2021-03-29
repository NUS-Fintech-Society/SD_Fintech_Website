import axios from "axios";

const api = axios.create({
  baseURL: "http://data-eye-289210.df.r.appspot.com/",
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
