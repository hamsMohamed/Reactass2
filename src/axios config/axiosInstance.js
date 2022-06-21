import axios from "axios";
import { changeLoader } from "../store/actions/loader";
import store from "../store/store";
const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/",
  
    // headers:{
    //     "auth":"455s5s5s55s5"
    // },
    // params:{
    //movie/popular?api
   // _key
    //={apiKey}
    // }
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      store.dispatch(changeLoader(true));
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
 
  axiosInstance.interceptors.response.use(
    function (response) {
      store.dispatch(changeLoader(false));
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  export default axiosInstance;