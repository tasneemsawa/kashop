import useFetch from "./useFetch";

export function useProductsDetails(id){
    return useFetch(['product',id], `/Products/${id}`);
}