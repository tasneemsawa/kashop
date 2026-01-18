import axios from "axios"
import i18n from "../i18n";
import { useAuthStore } from "../Store/useAuthStore";


const AxiosAuthInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
});

AxiosAuthInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"]=i18n.language
  config.headers["Authorization"]=`Bearer ${localStorage.getItem("token")}`
  
  return config


})
const axiosRefresh = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
  withCredentials: true,
});

AxiosAuthInstance.interceptors.response.use((response)=>{
  console.log("hi");

  console.log("response success");
  return response;
}, async(error)=>{
  console.log("response error");

  const originalRequest = error.config;
  console.log(`error recieved from: ${originalRequest.url}`);

  if(error.response.status === 401 && !originalRequest._retry){
      originalRequest._retry = true;
      console.log("Refreshing token...");
      try{            
          const refreshResponse = await axiosRefresh.post('/auth/Account/RefreshToken', {});
          console.log("New token:", refreshResponse.data.accessToken);
          const newAccessToken = refreshResponse.data.accessToken;
          useAuthStore.getState().setToken(newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return AxiosAuthInstance(originalRequest);

      }catch(refreshError){
          useAuthStore.getState().logout();
          return Promise.reject(refreshError);
      }
  }

  return Promise.reject(error);
})
export default AxiosAuthInstance