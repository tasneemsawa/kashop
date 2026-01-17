
import i18n from "../i18n";
import useFetch from "./useFetch";

export function useProducts (filters={}){
    return useFetch({queryKey:['products',i18n.language,filters],url: '/Products',filters:filters});
}



