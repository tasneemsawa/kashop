import React from 'react'
import {
  Box, Button, CircularProgress, Paper, TextField, Typography, Checkbox,
  Divider, Link,
  FormControlLabel,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegiesterSchema } from "../../Vailidation/RegiesterSchema"
import { Styles } from './Styles';
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import useRegiester from '../../Hooks/useRegiester';
import { useTranslation } from 'react-i18next';
import { isRtl } from '../../Translat';
export default function Regiester() {
  const { t } = useTranslation();
  const isRtlV = isRtl()

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(RegiesterSchema),
    mode: 'onBlur',
    defaultValues: {
      password: "",
    }


  })
  let { registerMutation, serverErrors } = useRegiester()
  const registerForm = async (values) => {

    await registerMutation.mutateAsync(values)


  }


  return (
    <Box sx={Styles.mainContainer}>
      <Paper elevation={0} sx={Styles.subContainer} >
        <Box className="register-form" sx={{ padding: "3rem 3.75rem 0px" }}>
          <Typography variant="h5" component={"h1"} sx={Styles.title}  >
            {t("Create Your Account")}
          </Typography>
          <Typography textAlign="center" component={"h3"} sx={Styles.subTitle}>
            {t("Please fill all forms to continued")}
          </Typography>
          {serverErrors.length > 0 ?
            serverErrors.map((err, index) =>
              <Typography key={index} sx={{ color: 'red' }}>
                {err} </Typography>)
            : null}

          <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{
            display: 'flex',
            flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
          }}>
            <TextField label={t("user name")} {...register('userName')} fullWidth variant="outlined"
              error={errors.userName} helperText={errors.userName ? t(errors.userName.message) : ""} sx={{ borderRadius: "8px" }}
            />

            <TextField label={t("Full Name")} {...register('fullName')} fullWidth variant="outlined"
              error={errors.fullName} helperText={errors.fullName ? t(errors.fullName.message) : ""}
            />
            <TextField label={t("user email")} {...register('email')} fullWidth variant="outlined"
              error={errors.email} helperText={errors.email ? t(errors.email.message) : ""}
            />

            <TextField label={t("phone number")} {...register('phoneNumber')} fullWidth variant="outlined"
              error={errors.phoneNumber} helperText={errors.phoneNumber ? t(errors.phoneNumber.message) : ""}
            />

            <PasswordInput errors={errors} control={control} />
            <Controller
              control={control}
              name="terms"
              defaultValue={false}
              render={({ field: { onChange, value } }) => (

                <FormControlLabel
                  control={
                    <Checkbox checked={value} onChange={onChange} />
                  }
                  label={
                    <Typography variant="body2" sx={Styles.terms}
                    >{t("By signing up, you agree to   ")}{" "}

                      <Link
                        to={"/auth/login"}
                        underline="always"
                        sx={Styles.termsSpan}
                      >{t("Terms & Condition")}
                      </Link>
                    </Typography>
                  }
                />

              )}
            />
            {errors.terms && <Typography variant="caption" color="error">{errors.terms ? t(errors.terms.message) : ""}</Typography>}
            <Button variant="contained" type="submit" sx={Styles.regiesterButton} disabled={isSubmitting} fullWidth>{
              isSubmitting ? <CircularProgress /> : `${t("Create Account")}`
            }</Button>
            <Divider sx={Styles.divider}>
              {t("Or")}
            </Divider>
            <Button variant="contained" sx={Styles.facebookButton} disabled={isSubmitting} fullWidth dir={isRtlV ? "rtl" : "ltr"} startIcon={<FacebookIcon />}>
              {t("Continue with Facebook")}
            </Button>
            <Button variant="contained" sx={Styles.googleButton} disabled={isSubmitting} fullWidth dir={isRtlV ? "rtl" : "ltr"} startIcon={<GoogleIcon />}>
              {t("Continue with Google")}
            </Button>

          </Box>

        </Box>
        <Typography
          variant="body2"

          sx={{ textAlign: "center", backgroundColor: "#F3F5F9", width: "100%", marginTop: "25px", padding: "19px 0px", color: "#7D879C", fontWeight: "600" }}
        >            {t("Already have account?")}{" "}
          <RouterLink
            to={"/auth/login"}
            style={{
              color: "#2B3445", textDecorationColor: "#2B3445", textDecoration: "underline", textUnderlineOffset: "4px", fontWeight: "600"
            }}
          >  {t("Login")}</RouterLink>
        </Typography>

      </Paper>
    </Box>
  )
}
