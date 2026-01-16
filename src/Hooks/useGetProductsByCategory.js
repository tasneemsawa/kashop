import i18n from "../i18n";
import useFetch from "./useFetch";

export default function useGetProductsByCategory(id) {
    return useFetch(['productsCategory',id,i18n.language], `/Products/category/${id}`);
}

