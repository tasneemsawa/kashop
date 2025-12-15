

import React from 'react'
import {
    useQuery,
} from '@tanstack/react-query'
import axiosInstance from '../API/AxiosInstance'

export function useCategories() {

    const getCategories = async () => {
        let response = await axiosInstance.get("/Categories")
        return response.data

    }
    const query = useQuery({
        queryKey: ['categories'],
        staleTime: 300000,//every 5 min 
        queryFn: getCategories
    })



    return query
}
