import { useQuery,keepPreviousData } from "@tanstack/react-query";
import axios from "axios"
let axiosInstance2 = axios.create({
  baseURL: 'https://dummyjson.com/',

});

//for testinngggg
export default function useFetch2 (page = 1){
  const limit = 10; 
  const skip = (page - 1) * limit;
  const fetchData = async ()=>{

    const response = await axiosInstance2.get(`/products?limit=${limit}&skip=${skip}`); 
         return response.data; 
  }

  const query = useQuery({
    queryKey:["products", page],
    staleTime:5 * 60 * 1000,
    queryFn:fetchData,
  });

  return query;
}
