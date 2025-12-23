import { useState } from 'react';
import axiosInstance from "./../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';


export default function useRegiester(){

    const [serverErrors, setServerErrors] = useState([])
    const navigate=useNavigate()
    const registerMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.post("/Auth/Account/Register", values);
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

      return  {serverErrors,registerMutation}
}