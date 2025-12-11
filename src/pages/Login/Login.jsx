import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Login() {
  const {register, handleSubmit} = useForm({})
  
  const loginForm = async (values)=>{

  console.log(values);
  
  try{
  const response = await axios.post(`${import.meta.env.VITE_BURL_AUTH}/Login`, values);
  if (response.status===200)
  localStorage.setItem("token",response.data.accessToken)
  console.log(response);
  }catch(err){
  console.log(err);}}
  

  return (
   
<Box className ="register-form">
<Typography variant='h1' >Login Page</Typography>
<Box onSubmit={handleSubmit(loginForm)} component={"form"} sx={{ display: 'flex',
flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'
}}>
<TextField label="user email" {...register('email')} fullWidth variant="outlined"/>
<TextField label="password" {...register('password')} fullWidth variant="outlined"/>
 <Button variant="contained" type="submit">Login</Button>
 </Box>
</Box>

  )
}
