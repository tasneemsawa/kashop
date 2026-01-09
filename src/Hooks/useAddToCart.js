import {  useState } from 'react';
import AxiosAuthInstance from "../API/AxiosAuthInstance"
import { useNavigate } from 'react-router-dom';
import {  useMutation } from '@tanstack/react-query';


export default function useAddToCart(){
  const navigate=useNavigate()

  const [serverErrors, setServerErrors] = useState([])
    const cartMutation = useMutation({
        mutationFn: async(values) => {
          return await AxiosAuthInstance.post(`/Carts`, {
            ProductId:values.ProductId,
            Count:values.quantity
          });
        },
        onSuccess :(response)=>{

         // navigate("/")
        },
        onError:(err)=>{
          const errors =
          err.response?.data?.errors ||
          err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
    
        }
    
    
    
      })

      return  {serverErrors,cartMutation}
}