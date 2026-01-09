import axios from "axios"


const AxiosAuthInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
});

AxiosAuthInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"]="en" //ar
  config.headers["Authorization"]=`Bearer ${localStorage.getItem("token")}`
  
  return config


})
export default AxiosAuthInstance