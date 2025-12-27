

import React from 'react'
import {
    useQuery,
} from '@tanstack/react-query'
import axiosInstance from '../API/AxiosInstance'

export function useProducts(params) {

    const getProducts = async () => {
        let response = await axiosInstance.get("/Products",{ params })
        console.log(response)
        return response.data.response.data
    }
    const query = useQuery({
        queryKey: ['products', params],
        staleTime: 300000,//every 5 min 
        queryFn: getProducts,
        keepPreviousData: true,
    })



    return query
}
