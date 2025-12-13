
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

export default function ResetPassword() {
  const navigate = useNavigate()
  const [serverErrors, setServerError] = useState("")
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      newPassword: "",
    }


  })
  const resetForm = async (values) => {
    console.log(values);

    try {
      const response = await axios.patch(`${import.meta.env.VITE_BURL_AUTH}/ResetPassword`, values);
      if (response.status === 200)
        navigate('/auth/login')
      console.log(response);
    } catch (err) {
      setServerError(err.response.data.message)

    }
  }

  return (
    <Box sx={Styles.mainContainer}>
      <Paper elevation={0} sx={Styles.subContainer} >
        <Box className="register-form" sx={{ padding: "3rem 3.75rem 0px" }}>
          <Typography variant="h5" component={"h1"} sx={Styles.title}  >
            Create New Password
          </Typography>
          <Typography textAlign="center" component={"h3"} sx={Styles.subTitle}>
            Enter the code and set a new password
          </Typography>
          {serverErrors ?
            <Typography sx={{ color: 'red' }}>
              {serverErrors} </Typography>
            : null}

          <Box onSubmit={handleSubmit(resetForm)} component={"form"} sx={{
            display: 'flex',
            flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
          }}>
            <TextField label="code" {...register('code')} fullWidth variant="outlined"
              error={errors.code} helperText={errors.code?.message}
            />
            <TextField label="user email" {...register('email')} fullWidth variant="outlined"
              error={errors.email} helperText={errors.email?.message}
            />

            <PasswordInput errors={errors} control={control} name="newPassword" label="New Password" />

            <Button variant="contained" type="submit" sx={Styles.button} disabled={isSubmitting} fullWidth>{
              isSubmitting ? <CircularProgress /> : "Reset"
            }</Button>

          </Box>

        </Box>


      </Paper>
    </Box>
  )
}
