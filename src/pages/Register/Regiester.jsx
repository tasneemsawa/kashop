import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Regiester() {

  const { register, handleSubmit } = useForm({})
  const registerForm = async (values) => {
    console.log(values);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL_AUTH}/Register`, values);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <Box sx={{
      backgroundColor: "#f8f9fa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    }}>
      {/* <Paper elevation={0} sx={{
        borderRadius: "12px",
        border: "1px solid rgb(227, 233, 239)",
        width: "500px",
        margin: "2rem"
      }} >
       <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          mb={1}
        >
          Create Your Account
        </Typography> */}
        <Box className="register-form">
          <Typography variant='h1' >Register Page</Typography>
          <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{
            display: 'flex',
            flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
          }}>
            <TextField label="user name" {...register('userName')} fullWidth variant="outlined" />
            <TextField label="Full Name" {...register('fullName')} fullWidth variant="outlined" />
            <TextField label="user email" {...register('email')} fullWidth variant="outlined" />
            <TextField label="password" {...register('password')} fullWidth variant="outlined" />
            <TextField label="phone number" {...register('phoneNumber')} fullWidth variant="outlined" />
            <Button variant="contained" type="submit">Register</Button>
          </Box>
        </Box>
      {/* </Paper> */}
    </Box>
  )
}
