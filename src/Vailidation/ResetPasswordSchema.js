import * as yup from "yup"



export const ResetPasswordSchema = yup.object({
    email: yup.string().email("Invalid Email Format").required("Email Is Required"),
    newPassword: yup.string().required("Password Is Required")
        .min(8, "password must be at least 4 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[@#$&?&!]/, "Must containt at least one special character"),
        code:yup.string()    
        .required("Reset code is required")
        .matches(/^\d+$/, "Code must contain numbers only")
    

});