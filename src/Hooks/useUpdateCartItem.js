import { useState } from 'react';
import AxiosAuthInstance from "../API/AxiosAuthInstance"
import { useNavigate } from 'react-router-dom';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';


export default function useUpdateCartItem() {
  const queryClient = useQueryClient();
  const [serverErrors, setServerErrors] = useState([])
  const updateCartMutation = useMutation({
    mutationFn: async ({id,count}) => {
      return await AxiosAuthInstance.patch(`/Carts/${id}`,{
        count:count
      });
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['carts'] })
      console.log("wefefwf" + JSON.stringify(response))
      // navigate("/")
    },
    onError: (err) => {
      console.log("wefefwf" + JSON.stringify(err))
      console.log(err)

      const errors =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        ["Something went wrong"];

      setServerErrors([errors]);

    }



  })

  return { serverErrors, updateCartMutation }
}