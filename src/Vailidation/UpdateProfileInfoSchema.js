import * as yup from "yup"



export const UpdateProfileInfoSchema = yup.object({
    fullName: yup.string().required("FullName Is Required"),
    phoneNumber: yup.string().required("PhoneNumber Is Required"),
    city: yup.string().required("city Is Required")

});