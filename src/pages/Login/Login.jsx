import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox,
  Divider, Link,
  FormControlLabel,
} from '@mui/material'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from "../../Vailidation/LoginSchema"
import { Styles } from './Styles';
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import useLogin from '../../Hooks/useLogin';
import Translate, { isRtl } from '../../Translat';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  const { register, handleSubmit,reset, control, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
    defaultValues: {
      password: "",
    }


  })
  let { serverErrors, loginMutation } = useLogin()
  const loginForm = async (values) => {
    console.log(values)

    await loginMutation.mutateAsync(values)
    reset()
  }
  const isRtlV = isRtl()
  return (
    <Box sx={Styles.mainContainer}>
      <Paper elevation={0} sx={Styles.subContainer} >
        <Box className="register-form" sx={{ padding: "3rem 3.75rem 0px" }}>
          <Typography variant="h5" component={"h1"} sx={Styles.title}  >
            {t ("Welcome To Ecommerce")}
          </Typography>
          <Typography textAlign="center" component={"h3"} sx={Styles.subTitle}>
            {t ("Log in with email & password")}
          </Typography>
          {serverErrors.length > 0 ?
            serverErrors.map((err, index) =>
              <Typography key={index} sx={{ color: 'red' }}>
                {err} </Typography>)
            : null}

          <Box onSubmit={handleSubmit(loginForm)} component={"form"} sx={{
            display: 'flex',
            flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
          }}>

            <TextField label={t ("user email")} {...register('email')} fullWidth variant="outlined"
              error={errors.email} helperText={errors.email?t(errors.email.message):""}
              dir={isRtlV ? "rtl" : "ltr"}
            />

            <PasswordInput errors={errors} control={control} />

            <Button variant="contained" type="submit" sx={Styles.loginButton} disabled={isSubmitting} fullWidth>{
              isSubmitting ? <CircularProgress /> : `${t ("Login")}`
            }</Button>
            <Divider sx={Styles.divider}>
              {t ("Or")}
            </Divider>
            <Button variant="contained" sx={Styles.facebookButton} disabled={isSubmitting} fullWidth
              dir={isRtlV ? "rtl" : "ltr"}
              startIcon={<FacebookIcon />}>
              {t ("Continue with Facebook")}

            </Button>
            <Button variant="contained" sx={Styles.googleButton} disabled={isSubmitting} fullWidth
              dir={isRtlV ? "rtl" : "ltr"}
              startIcon={<GoogleIcon />}>
              {t ("Continue with Google")}
            </Button>

          </Box>

        </Box>
        <Typography
          variant="body2"

          sx={{ textAlign: "center", width: "100%", marginTop: "25px", paddingTop: "19px", color: "#7D879C", fontWeight: "600" }}
        >
          {t ("Don’t have account? ")}

          <RouterLink
            to={"/auth/register"}
            style={{
              color: "#2B3445", textDecorationColor: "#2B3445", textDecoration: "underline", textUnderlineOffset: "4px", fontWeight: "600"
            }}
          > {t ("Sign Up")}</RouterLink>
        </Typography>

        <Typography
          variant="body2"

          sx={{ textAlign: "center", backgroundColor: "#F3F5F9", width: "100%", marginTop: "25px", padding: "19px 0px", color: "#7D879C", fontWeight: "600" }}
        >{t ("Forgot your password? ")}
          <RouterLink
            to={"/auth/forgotPassword"}
            style={{
              color: "#2B3445", textDecorationColor: "#2B3445", textDecoration: "underline", textUnderlineOffset: "4px", fontWeight: "600"
            }}
          >{t ("Reset It")} </RouterLink>
        </Typography>

      </Paper>
    </Box>
  )
}
