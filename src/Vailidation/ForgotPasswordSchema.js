import * as yup from "yup"



export const ForgotPasswordSchema = yup.object({
    email: yup.string().email("Invalid Email Format").required("Email Is Required"),

});