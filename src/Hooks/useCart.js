import AxiosAuthInstance from "../API/AxiosAuthInstance";
import useFetch from "./useFetch";


export default function useCart(){
  return useFetch(['carts'], '/Carts',AxiosAuthInstance);
}