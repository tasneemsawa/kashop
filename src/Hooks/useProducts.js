

import React from 'react'
import {
    useQuery,
} from '@tanstack/react-query'
import axiosInstance from '../API/AxiosInstance'

export function useProducts() {

    const getProducts = async () => {
        let response = await axiosInstance.get("/Products")
        console.log(response)
        return response.data.response.data
    }
    const query = useQuery({
        queryKey: ['products'],
        staleTime: 300000,//every 5 min 
        queryFn: getProducts
    })



    return query
}
