
import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { NewEmailSchema } from "../../../../Vailidation/NewEmailSchema"
import { Styles } from './Styles';
import { isRtl } from '../../../../Translat';
import { useTranslation } from 'react-i18next';
import useUpdatePassword from '../../../../Hooks/useUpdatePassword';
import useUpdateEmail from '../../../../Hooks/useUpdateEmail';

export default function UpdateEmail() {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(NewEmailSchema),
    mode: 'onBlur',
    defaultValues: {
      NewEmail: "",
    }

  })
  const updateEmailMutation = useUpdateEmail();
  const resetForm = async (values) => {
    await updateEmailMutation.mutateAsync(values)
    reset({ NewEmail: "" });
  }

  return (
      <Paper elevation={0} sx={{ p: 3, borderRadius: "12px", height: '100%' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{t("change_email")}</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mb: "20px" }} onSubmit={handleSubmit(resetForm)} component={"form"}>
          <TextField fullWidth label={t("new_email")} variant="outlined" 
            name="NewEmail"
            error={errors.NewEmail} helperText={errors.NewEmail ? t(errors.NewEmail.message) : ""}
            {...register('NewEmail')}
          />

          <Button variant="contained" sx={Styles.actioNbutton} type="submit"
            disabled={isSubmitting}
          > {isSubmitting ? <CircularProgress /> : t("update_email")}</Button>
        </Box>
      </Paper>




  )
}
