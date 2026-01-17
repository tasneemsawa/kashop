import AxiosAuthInstance from "../API/AxiosAuthInstance";
import useFetch from "./useFetch";
import i18n from "../i18n";


export default function useCart(){
  return useFetch({queryKey:['carts',i18n.language],url: '/Carts',instance:AxiosAuthInstance});

}