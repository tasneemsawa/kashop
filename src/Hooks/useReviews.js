

import {  useState } from 'react';
import AxiosAuthInstance from "../API/AxiosAuthInstance"
import { useNavigate } from 'react-router-dom';
import {  QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
 import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';


export default function useReviews(){
    const queryClient = useQueryClient();
    const { t } =useTranslation();
const [serverErrors, setServerErrors] = useState([])
    const reviewMutation = useMutation({


        mutationFn: async({ rating, comment, productId }) => {
          return await AxiosAuthInstance.post(`Products/${productId}/reviews`, {
            
                Rating: rating,
                Comment: comment
             });
        },
        onSuccess :(response)=>{
          queryClient.invalidateQueries({ queryKey: ['productDetails'] })
          Swal.fire({
            title: t("Success"),
            text: t("Review added successfully!"),
            icon: "success",
            confirmButtonColor: "primary.main",
        })
    
        },
        onError:(err)=>{
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

      return  {serverErrors,reviewMutation}
}




















// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import AxiosAuthInstance from '../API/AxiosAuthInstance'
// import Swal from 'sweetalert2';
// import { useTranslation } from 'react-i18next';

// export default function useReviews() {
//     const queryClient = useQueryClient();
//     const { t } =useTranslation();

//     return useMutation({
        
//         mutationFn: async ({ rating, comment, productId }) => {
//             return await AxiosAuthInstance.post(`Products/${productId}/reviews`,
//                 {
//                     Rating: rating,
//                     Comment: comment
//                 }
//             );
//         },
//         onSuccess: (data, variables) => {
//             queryClient.invalidateQueries({queryKey: ["productDetails", variables.productId]});            
//             Swal.fire({
//                 title: t("Success"),
//                 text: t("Review added successfully!"),
//                 icon: "success",
//                 confirmButtonColor: "#DB4444",
//             }); 
//    },
//         onError: (error)=>{
//             const serverMessage = error.response?.data?.message || t("Something went wrong");
//             Swal.fire({
//                 title: t("Error!"),
//                 text: serverMessage,
//                 icon: 'error',
//                 confirmButtonText: t("Ok"),
//                 confirmButtonColor: '#DB4444',
//             });                                    
//         }
//     });
// }
