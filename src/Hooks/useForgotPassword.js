import { useState } from 'react';
import axiosInstance from "../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';


export default function useForgotPassword(){

    const [serverErrors, setServerErrors] = useState([])
    const navigate=useNavigate()
    const forgotPasswordMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.post("/Auth/Account/SendCode", values);
        },
        onSuccess :()=>{
          navigate('/auth/resetPassword')
        },
        onError:(err)=>{
          const errors =
          err.response?.data?.errors ||
          err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
    
        }
    
    
    
      })

      return  {serverErrors,forgotPasswordMutation}
}