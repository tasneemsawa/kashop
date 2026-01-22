import * as yup from "yup"



export const NewEmailSchema = yup.object({
    NewEmail: yup.string().email("Invalid Email Format").required("Email Is Required"),

});