
import React, { useState } from 'react';
import { Box, Typography, Rating, TextField, Button } from '@mui/material';
import { Styles } from './Styles';
import { useTranslation } from 'react-i18next';
import useReviews from '../../Hooks/useReviews';
import Swal from 'sweetalert2';

export default function WriteReviewForm({productId}) {
    const { t } = useTranslation();
    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [error, setError] = useState(false); 
    
    let {  serverErrors, reviewMutation } =useReviews()
    let {isPending,mutate:addReview,isSuccess,isError}=reviewMutation


    const submitReviewForm = async () => {
        if (rating === 0 || comment.trim() === "") {
            setError(true);
            return;
        }
        const values = { rating, comment ,productId};
        console.log(values);
        addReview(values);

        setRating(0);
        setComment("");
        setError(false);
    };

    return (
        <Box sx={{ maxWidth: '800px', py: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: '700', color: 'secondary.main', mb: 3 }}>
                {t("Write a Review for this product")}
            </Typography>

            <Box sx={{ mb: 3, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
                    {t("Your Rating")} <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
                </Typography>
                <Rating
                    value={rating}
                    onChange={(_, newValue) => {
                        setRating(newValue);
                        setError(false);
                    }}
                    sx={{ color: 'customYellow.main' }}
                />
                {error && rating === 0 && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                        {t("Please select a rating")}
                    </Typography>
                )}
            </Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
                    {t("Your Review")} <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
                </Typography>

                <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={6}
                    placeholder={t("Write a review here...")}
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                        setError(false);
                    }}
                    error={error && comment.trim() === ""}
                    helperText={error && comment.trim() === "" ? t("Review comment is required") : ""}
                />
            </Box>

            <Button 
                onClick={submitReviewForm} 
                sx={Styles.submitButton}
                disabled={isPending} 
            >
                {isPending ? t("Submitting...") : t("Submit")}
            </Button>
        </Box>
    );
}






// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import {
//     Box,
//     Typography,
//     Rating,
//     TextField,
//     Button,
// } from '@mui/material';
// import { SubmitReviewSchema } from "../../Vailidation/SubmitReviewSchema"
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Styles } from './Styles';
// import { useTranslation } from 'react-i18next';
// import useReviews from '../../Hooks/useReviews';

// export default function WriteReviewForm() {

//     const { t } = useTranslation();

//     const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
//         resolver: yupResolver(SubmitReviewSchema),
//         mode: 'onBlur',
//         defaultValues: {
//             rating: 0,
//             comment: ''
//         }


//     })


//     let {  mutate: addReview, isPending: reviewPending } =useReviews()

//     //    let { registerMutation, serverErrors } = useRegiester()
//     const submitReviewForm = async (values) => {
//         console.log(values)
//          await addReview.mutateAsync(values)

//         reset();
//     }

//     return (
//         <Box
//             component="form"
//             onSubmit={handleSubmit(submitReviewForm)}
//             sx={{ maxWidth: '800px', py: 5 }}
//         >
//             <Typography variant="h5" sx={{ fontWeight: '700', color: 'secondary', mb: 3 }}>
//             {t("Write a Review for this product")} 
//             </Typography>

//             <Box sx={{ mb: 3, display: "flex", flexDirection: "column" }}>
//                 <Typography sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
//                 {t("Your Rating")}   <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
//                 </Typography>
//                 <Controller
//                     name="rating"
//                     control={control}
//                     rules={{ required: true, min: 1 }}
//                     render={({ field }) => (
//                         <Rating
//                             {...field}
//                             value={Number(field.value)}
//                             onChange={(_, newValue) => field.onChange(newValue)}
//                             sx={{ color: 'customYellow.main' }}
//                         />
//                     )}
//                 />
//                 {errors.rating && (
//                     <Typography variant="caption" color="error" sx={{ mt: 0.5 }}> {errors.rating?t(errors.rating?.message):""} </Typography>
//                 )}

//             </Box>

//             <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
//                 {t("Your Review")}  <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
//                 </Typography>

//                 <TextField label={t("comment")}  {...register('comment')} fullWidth variant="outlined" multiline
//                     placeholder= {t("Write a review here...")} 
//                     error={errors.comment} helperText={errors.comment?.message}
//                     rows={6} />

//             </Box>

//             <Button type="submit" sx={Styles.submitButton}>
//             {t("Submit")} 
//             </Button>
//         </Box>
//     );
// }