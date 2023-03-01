import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.request.use(
  function (config) {
    // console.log("FROM REQUEST");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // console.log("FROM REQUEST WITH ERROR");
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // console.log("FROM RESPONSE");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // ** 404
    // console.log(error);

    // console.log("FROM RESPONSE WITH ERROR");
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
