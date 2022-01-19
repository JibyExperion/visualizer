import axios from "axios";

//-------- Creating an Instance for Axios -------------
var axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  /* other custom settings */
});
// ------------------------------------------------

//----------- Add a request interceptor -----------
/*axiosInstance.interceptors.request.use(function (config) {
  const token = "Bearer " + localStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});
// ------------------------------------------------

//-------- Axios response interceptor -------------
axiosInstance.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});*/
// -----------------------------------------------------------------------------

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
