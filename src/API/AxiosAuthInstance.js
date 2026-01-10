import axios from "axios"
import i18n from "../i18n";


const AxiosAuthInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
});

AxiosAuthInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"]=i18n.language
  config.headers["Authorization"]=`Bearer ${localStorage.getItem("token")}`
  
  return config


})
export default AxiosAuthInstance