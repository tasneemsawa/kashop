import useFetch from "./useFetch";

export function useProductsDetails(id){
    return useFetch(['product'], `/Products/${id}`);
}