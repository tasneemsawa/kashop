import { useState } from 'react';
import AxiosAuthInstance from "../API/AxiosAuthInstance"
import { useNavigate } from 'react-router-dom';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';


export default function useRemoveFromCart() {
  const queryClient = useQueryClient();
  const [serverErrors, setServerErrors] = useState([])
  const removeCartMutation = useMutation({
    mutationFn: async (id) => {
      return await AxiosAuthInstance.delete(`/Carts/${id}`);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['carts'] })
      console.log("wefefwf" + JSON.stringify(response))
      // navigate("/")
    },
    onError: (err) => {
      const errors =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        ["Something went wrong"];

      setServerErrors([errors]);

    }



  })

  return { serverErrors, removeCartMutation }
}