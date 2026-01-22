
import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordProfileSchema } from "../../../../Vailidation/ResetPasswordProfileSchema"
import { Styles } from './Styles';
import { isRtl } from '../../../../Translat';
import { useTranslation } from 'react-i18next';
import useUpdatePassword from '../../../../Hooks/useUpdatePassword';

export default function ResetPassword() {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ResetPasswordProfileSchema),
    mode: 'onBlur',
    defaultValues: {
      CurrentPassword: "",
      NewPassword: "",
      ConfirmNewPassword: ""
    }


  })
  const resetPasswordMutation = useUpdatePassword();

  const resetForm = async (values) => {
    await resetPasswordMutation.mutateAsync(values)
    reset({ CurrentPassword: "", NewPassword: "", ConfirmNewPassword: "" });
  }


  return (

    <Paper elevation={0} sx={{ p: 3, borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{t("change_password")}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mb: "20px" }} onSubmit={handleSubmit(resetForm)} component={"form"}>
        <TextField fullWidth label={t("current_password")} variant="outlined" type="password"
          name="CurrentPassword"
          error={errors.CurrentPassword} helperText={errors.CurrentPassword ? t(errors.CurrentPassword.message) : ""}
          {...register('CurrentPassword')}

        />
        <TextField fullWidth label={t("new_password")} variant="outlined" type="password"
          name="NewPassword"
          error={errors.NewPassword} helperText={errors.NewPassword ? t(errors.NewPassword.message) : ""}
          {...register('NewPassword')}

        />
        <TextField fullWidth label={t("ConfirmNewPassword")} variant="outlined" type="password"
          name="ConfirmNewPassword"
          error={errors.ConfirmNewPassword} helperText={errors.ConfirmNewPassword ? t(errors.ConfirmNewPassword.message) : ""}
          {...register('ConfirmNewPassword')}
        />
      
      <Button variant="contained" sx={Styles.actioNbutton} type="submit"
        disabled={isSubmitting}
      > {isSubmitting ? <CircularProgress /> : t("update_password")}</Button>

      </Box>


    </Paper>






  )
}
