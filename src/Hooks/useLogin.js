import { useContext, useState } from 'react';
import axiosInstance from "../API/AxiosInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';
import { AuthContext } from '../Context/AuthContext';


export default function useLogin(){
  const navigate=useNavigate()

  const {setAccesToken,setToken}=useContext(AuthContext)
    const [serverErrors, setServerErrors] = useState([])
    const loginMutation = useMutation( {
        mutationFn: async(values) => {
          return await axiosInstance.post(`/Auth/Account/Login`, values);
        },
        onSuccess :(response)=>{
          setToken(response.data.accessToken);
          setAccesToken(response.data.accessToken);
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