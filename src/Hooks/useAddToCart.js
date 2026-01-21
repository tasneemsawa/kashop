import { useState } from 'react';
import AxiosAuthInstance from "../API/AxiosAuthInstance"
import { useNavigate } from 'react-router-dom';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


export default function useAddToCart() {
  const navigate = useNavigate()
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const [serverErrors, setServerErrors] = useState([])
  const cartMutation = useMutation({
    mutationFn: async (values) => {
      return await AxiosAuthInstance.post(`/Carts`, {
        ProductId: values.ProductId,
        Count: values.quantity
      });
    },
    onSuccess: (response) => {
      Swal.fire({
        title: t("Success"),
        text: t("Item added successfully!"),
        icon: "success",
        confirmButtonColor: "primary.main",
      })

      queryClient.invalidateQueries({ queryKey: ['carts'] })



      // navigate("/")
    },
    onError: (err) => {

      Swal.fire({
        title: t("Error!"),
        text: err,
        icon: 'error',
        confirmButtonText: t("Ok"),
        confirmButtonColor: 'primary.main',
    });                                    

      const errors =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        ["Something went wrong"];

      setServerErrors([errors]);

    }



  })

  return { serverErrors, cartMutation }
}