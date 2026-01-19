
import AxiosAuthInstance from "../API/AxiosAuthInstance";
import useFetch from "./useFetch";
import i18n from "../i18n";


export default function useProfile() {
    return useFetch({queryKey:['Profile',i18n.language],url: '/Profile',instance:AxiosAuthInstance});

}



