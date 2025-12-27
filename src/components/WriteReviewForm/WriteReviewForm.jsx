import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Box,
    Typography,
    Rating,
    TextField,
    Button,
} from '@mui/material';
import { SubmitReviewSchema } from "../../Vailidation/SubmitReviewSchema"
import { yupResolver } from '@hookform/resolvers/yup';
import { Styles } from './Styles';

export default function WriteReviewForm() {


    const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(SubmitReviewSchema),
        mode: 'onBlur',
        defaultValues: {
            rating: 0,
            comment: ''
        }


    })



    //    let { registerMutation, serverErrors } = useRegiester()
    const submitReviewForm = async (values) => {
        console.log(values)
        /// await registerMutation.mutateAsync(values)

        reset();
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(submitReviewForm)}
            sx={{ maxWidth: '800px', py: 5 }}
        >
            <Typography variant="h5" sx={{ fontWeight: '700', color: 'secondary', mb: 3 }}>
                Write a Review for this product
            </Typography>

            <Box sx={{ mb: 3, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
                    Your Rating <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
                </Typography>
                <Controller
                    name="rating"
                    control={control}
                    rules={{ required: true, min: 1 }}
                    render={({ field }) => (
                        <Rating
                            {...field}
                            value={Number(field.value)}
                            onChange={(_, newValue) => field.onChange(newValue)}
                            sx={{ color: 'customYellow.main' }}
                        />
                    )}
                />
                {errors.rating && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5 }}> {errors.rating?.message} </Typography>
                )}

            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#4B566B', mb: 1 }}>
                    Your Review <Typography component={"span"} sx={{ color: 'primary.main' }}>*</Typography>
                </Typography>

                <TextField label="comment" {...register('comment')} fullWidth variant="outlined" multiline
                    placeholder="Write a review here..."
                    error={errors.comment} helperText={errors.comment?.message}
                    rows={6} />

            </Box>

            <Button type="submit" sx={Styles.submitButton}>
                Submit
            </Button>
        </Box>
    );
}