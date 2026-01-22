import * as yup from "yup"



export const ResetPasswordProfileSchema = yup.object({
    NewPassword: yup.string().required("Password Is Required")
        .min(8, "password must be at least 4 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[@#$&?&!]/, "Must containt at least one special character"),
    CurrentPassword: yup.string().required("Password Is Required")
        .min(8, "password must be at least 4 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[@#$&?&!]/, "Must containt at least one special character"),
    ConfirmNewPassword: yup.string().required("Password Is Required")
        .min(8, "password must be at least 4 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[@#$&?&!]/, "Must containt at least one special character"),

});