import { useState } from 'react';
import axiosInstance from "../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';


export default function useResetPassword(){

    const [serverErrors, setServerErrors] = useState([])
    const navigate=useNavigate()
    const resetPasswordMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.patch("/Auth/Account/ResetPassword", values);
        },
        onSuccess :()=>{
          navigate('/auth/login')
        },
        onError:(err)=>{
          const errors =
          err.response?.data?.errors ||
          err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
    
        }
    
    
    
      })

      return  {serverErrors,resetPasswordMutation}
}