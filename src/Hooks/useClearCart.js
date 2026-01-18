import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AxiosAuthInstance from '../API/AxiosAuthInstance';

export default function useClearCart() {
 const queryClient = useQueryClient();
    return useMutation({
        mutationFn:()=> AxiosAuthInstance.delete('/carts/clear'),
        onSuccess:()=>{
            queryClient.invalidateQueries({querykey:['carts']} );
        }
    })
}
