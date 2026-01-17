
import AxiosAuthInstance from "../API/AxiosAuthInstance";
import useFetch from "./useFetch";
import i18n from "../i18n";


export default function useProfile() {
    return useFetch({queryKey:['profile',i18n.language],url: `/Profile/${id}`,instance:AxiosAuthInstance});

}



