import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AxiosAuthInstance from '../api/AxiosAuthInstance';

export default function useClearCart() {
 const queryClient = useQueryClient();
    return useMutation({
        mutationFn:()=> AxiosAuthInstance.delete('/carts/clear'),
        onSuccess:()=>{
            queryClient.invalidateQueries({querykey:['carts']} );
        }
    })
}
