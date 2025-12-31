import {  useState } from 'react';
import axiosInstance from "../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../Store/useAuthStore';
import { jwtDecode } from "jwt-decode";


export default function useLogin(){
  const navigate=useNavigate()

  const {setToken,setUser}=useAuthStore()
    const [serverErrors, setServerErrors] = useState([])
    const loginMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess :(response)=>{
        let token=  response.data.accessToken
        const decode = jwtDecode(response.data.accessToken )
       const user = {
        name:decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        role:decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
       }
        
          setToken(token);
          setUser(user)
          navigate("/")
        },
        onError:(err)=>{
          const errors =
          err.response?.data?.errors ||
          err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
    
        }
    
    
    
      })

      return  {serverErrors,loginMutation}
}