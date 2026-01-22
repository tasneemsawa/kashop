
import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox, Grid,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Styles } from './Styles';
import { useTranslation } from 'react-i18next';
import { UpdateProfileInfoSchema } from '../../../../Vailidation/UpdateProfileInfoSchema';
import useUpdateProfile from '../../../../Hooks/useUpdateProfile';

export default function UpdateProfileInfo() {
  const { t } = useTranslation();

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(UpdateProfileInfoSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      city: ""
    }


  })
  const useUpdateProfileMutation = useUpdateProfile();

  const resetForm = async (values) => {
    await useUpdateProfileMutation.mutateAsync(values)
    reset({
      fullName: "",
      phoneNumber: "",
      city: ""
    });
  }


  return (

    <Paper elevation={0} sx={{ p: 3, borderRadius: "12px", mb: 4, width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
        {t("personal_info")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mb: "20px" }} onSubmit={handleSubmit(resetForm)} component={"form"}>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("fullName")} variant="outlined"
              name="fullName"
              error={errors.fullName} helperText={errors.fullName ? t(errors.fullName.message) : ""}
              {...register('fullName')}

            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("phone")} variant="outlined"
              name="phoneNumber"
              error={errors.phoneNumber} helperText={errors.phoneNumber ? t(errors.phoneNumber.message) : ""}
              {...register('phoneNumber')}

            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("city")} variant="outlined"
              name="city"
              error={errors.city} helperText={errors.city ? t(errors.city.message) : ""}
              {...register('city')}
            />
          </Grid>
        </Grid>

        <Box sx={{ justifyContent: "center", display: "flex", mt: "20px" }}>
          <Button variant="contained" sx={Styles.actioNbutton} type="submit"
            disabled={isSubmitting}
          > {isSubmitting ? <CircularProgress /> : t("save_profile_info")}</Button>
        </Box>
      </Box>
    </Paper>















    // <Paper elevation={0} sx={{ p: 3, borderRadius: "12px", mb: 4, width: "100%" }}>
    // <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{t("change_password")}</Typography>
    //   <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mb: "20px" }} onSubmit={handleSubmit(resetForm)} component={"form"}>
    //     <TextField fullWidth label={t("fullName")} variant="outlined"
    //       name="fullName"
    //       error={errors.fullName} helperText={errors.fullName ? t(errors.fullName.message) : ""}
    //       {...register('fullName')}

    //     />
    //     <TextField fullWidth label={t("phone")} variant="outlined" 
    //       name="phoneNumber"
    //       error={errors.phoneNumber} helperText={errors.phoneNumber ? t(errors.phoneNumber.message) : ""}
    //       {...register('phoneNumber')}

    //     />
    //     <TextField fullWidth label={t("city")} variant="outlined" 
    //       name="city"
    //       error={errors.city} helperText={errors.city ? t(errors.city.message) : ""}
    //       {...register('city')}
    //     />

    //   <Button variant="contained" sx={Styles.actioNbutton} type="submit"
    //     disabled={isSubmitting}
    //   > {isSubmitting ? <CircularProgress /> : t("save_profile_info")}</Button>

    //   </Box>


    // </Paper>






  )
}
