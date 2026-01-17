import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosAuthInstance from '../API/AxiosAuthInstance';

export default function useCheckout() {

  const queryClient = useQueryClient();
  const [serverErrors, setServerErrors] = useState([])
  const navigate=useNavigate()

  const checkout= useMutation({
    mutationFn: async ({ paymentMethod }) => {
      return await AxiosAuthInstance.post('/Checkouts', { paymentMethod })
    },
    onSuccess :(response)=>{
        queryClient.invalidateQueries({ queryKey: ['carts'] })
        if(response.data.url)
        location.href=response.data.url


      },
      onError:(err)=>{
        const errors =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        ["Something went wrong"];
    
      setServerErrors([errors]);
  
      }

  })

  return  {serverErrors,checkout}
}