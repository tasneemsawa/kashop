import i18n from "../i18n";
import useFetch from "./useFetch";

export default function useGetProductsByCategory(id) {
    return useFetch({queryKey:['productsCategory',i18n.language,id],url:  `/Products/category/${id}`});

}

