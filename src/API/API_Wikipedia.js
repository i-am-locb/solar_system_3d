import * as axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL:
    "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&&exintro=",
});

export const planetsInfoAPI = {
  getPlanetsInfo(name) {
    return instance.get(`&titles=` + name);
  },
};

