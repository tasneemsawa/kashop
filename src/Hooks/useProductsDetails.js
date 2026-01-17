import i18n from "../i18n";
import useFetch from "./useFetch";

export function useProductsDetails(id){
    return useFetch({queryKey:['product',i18n.language,id],url: `/Products/${id}`});

}