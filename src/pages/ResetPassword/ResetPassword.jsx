
import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox,
} from '@mui/material'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema } from "../../Vailidation/ResetPasswordSchema"
import { useState } from 'react';
import { Styles } from './Styles';
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import { useNavigate } from 'react-router-dom';
import useResetPassword from '../../Hooks/useResetPassword';
import { isRtl } from '../../Translat';
import { useTranslation } from 'react-i18next';

export default function ResetPassword() {
  const { t } = useTranslation();
  const isRtlV = isRtl()

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      newPassword: "",
    }


  })
  let { serverErrors, resetPasswordMutation } = useResetPassword()

  const resetForm = async (values) => {
    await resetPasswordMutation.mutateAsync(values)
  }

  return (
    <Box sx={Styles.mainContainer}>
      <Paper elevation={0} sx={Styles.subContainer} >
        <Box className="register-form" sx={{ padding: "3rem 3.75rem 0px" }}>
          <Typography variant="h5" component={"h1"} sx={Styles.title}  >
            {t("Create New Password")}
          </Typography>
          <Typography textAlign="center" component={"h3"} sx={Styles.subTitle}>
          {t("Enter the code and set a new password")}
          </Typography>
          {serverErrors ?
            <Typography sx={{ color: 'red' }}>
              {serverErrors} </Typography>
            : null}

          <Box onSubmit={handleSubmit(resetForm)} component={"form"} sx={{
            display: 'flex',
            flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
          }}>
            <TextField label= {t("code")} {...register('code')} fullWidth variant="outlined"
              error={errors.code} helperText={errors.code?t(errors.code.message):""}
            />
            <TextField label={t("user email")} {...register('email')} fullWidth variant="outlined"
              error={errors.email} helperText={errors.email?t(errors.email.message):""}
            />

            <PasswordInput errors={errors} control={control} name="newPassword" label={t("New Password")} />

            <Button variant="contained" type="submit" sx={Styles.button} disabled={isSubmitting} fullWidth>{
              isSubmitting ? <CircularProgress /> : `${t("Reset")}`
            }</Button>

          </Box>

        </Box>


      </Paper>
    </Box>
  )
}
