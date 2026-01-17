import i18n from "../i18n";
import useFetch from "./useFetch";


export function useCategories (){
  return useFetch({queryKey:['categories',i18n.language],url: '/categories'});

}
