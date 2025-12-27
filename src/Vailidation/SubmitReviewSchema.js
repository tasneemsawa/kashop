import * as yup from "yup"

export const SubmitReviewSchema = yup.object({
    comment: yup.string().required("Comment Is Required"),
    rating: yup
    .number()
    .typeError("Rating must be a number") 
    .required("Rating is required")      
    .integer("Rating must be an integer") 
    .min(1, "Minimum rating is 1")       
    .max(5, "Maximum rating is 5"),     
});