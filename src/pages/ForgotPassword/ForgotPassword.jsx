
import React from 'react'
import {
    Box, Button, CircularProgress, Paper, TextField, Typography,
} from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordSchema } from "../../Vailidation/ForgotPasswordSchema"
import { useState } from 'react';
import { Styles } from './Styles';
import { useNavigate } from 'react-router-dom';
import useForgotPassword from '../../Hooks/useForgotPassword';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
    const { t } = useTranslation();

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(ForgotPasswordSchema),
        mode: 'onBlur',

    })

    let { serverErrors, forgotPasswordMutation } = useForgotPassword()
    const forgotPasswordForm = async (values) => {
        await forgotPasswordMutation.mutateAsync(values)

    }

    return (
        <Box sx={Styles.mainContainer}>
            <Paper elevation={0} sx={Styles.subContainer} >
                <Box className="register-form" sx={{ padding: "3rem 3.75rem 0px" }}>
                    <Typography variant="h5" component={"h1"} sx={Styles.title}  >
                       {t("Reset Your Password")} 

                    </Typography>
                    <Typography textAlign="center" component={"h3"} sx={Styles.subTitle}>
                    {t(" We’ll send a verification code to your email to reset your password.")} 
                    </Typography>
                    {serverErrors ?
                        <Typography sx={{ color: 'red' }}>
                            {serverErrors} </Typography>
                        : null}

                    <Box onSubmit={handleSubmit(forgotPasswordForm)} component={"form"} sx={{
                        display: 'flex',
                        flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
                    }}>

                        <TextField label={t("user email")} {...register('email')} fullWidth variant="outlined"
                            error={errors.email} helperText={errors.email?t(errors.email.message):""}
                        />
                        <Button variant="contained" type="submit" sx={Styles.button} disabled={isSubmitting} fullWidth>{
                            isSubmitting ? <CircularProgress /> : `${t("Continue")}`
                        }</Button>

                    </Box>

                </Box>

            </Paper>
        </Box>
    )
}
