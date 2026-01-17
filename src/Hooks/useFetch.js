import { useQuery,keepPreviousData } from "@tanstack/react-query";
import axiosInstance from "../API/AxiosInstance";

export default function useFetch ({queryKey, url,instance = axiosInstance,filters={}}){
  const fetchData = async ()=>{

      const response = await instance.get(url,{params: filters});       
      return response.data; 
  }

  const query = useQuery({
    queryKey:queryKey,
    staleTime:5 * 60 * 1000,
    queryFn:fetchData,
    placeholderData: keepPreviousData
  });

  return query;
}
