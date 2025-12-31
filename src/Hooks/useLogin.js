import {  useState } from 'react';
import axiosInstance from "../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../Store/useAuthStore';


export default function useLogin(){
  const navigate=useNavigate()

  const {setToken}=useAuthStore()
    const [serverErrors, setServerErrors] = useState([])
    const loginMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess :(response)=>{
          setToken(response.data.accessToken);
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