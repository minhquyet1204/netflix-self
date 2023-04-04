import { axiosClient } from "./axiosClient";

const tmdbApi = {
  moviePopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },
  movieToprated: (params) => {
    const url = "/movie/top_rated";
    return axiosClient.get(url, { params });
  },
};

export default tmdbApi;
