import { Box, Button, TextField, Typography, Link, CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import {Link as RouterLink } from 'react-router-dom'
import '../sendCode/SendCode.jsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { SendCodeSchema } from '../../validation/SendCodeSchema.js'
import useLogin from '../../hooks/useLogin.js'
import { jwtDecode } from "jwt-decode";



export default function Login() {
    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm({
       resolver:yupResolver(SendCodeSchema),
       mode:'onBlur'
     })
    
     const {loginMutation}=useLogin();
    const loginForm = async (values)=>{
      loginMutation.mutateAsync(values);
  }
    return ( 
  <Box className ="register-form" sx={{minHeight:'80vh', pt:'100px'}}>
  <Typography variant='h1'sx={{textAlign: 'center', mt:3 }} >Login Page</Typography>
  
  <Box onSubmit={handleSubmit(loginForm)} component={"form"} 
  sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'}}>
  <TextField label="user email" {...register('email')} sx={{width:'40%'}} variant="outlined"/>
  <TextField label="password" {...register('password')} sx={{width:'40%'}} variant="outlined"/>
   <Button variant="contained" type="submit"  disabled={isSubmitting} sx={{backgroundColor:'InfoText', width:'40%'}}>
     {isSubmitting? <CircularProgress />: 'Login'}
    </Button>
   <Link component={RouterLink} to={'/sendCode'}>Forget Your Password?</Link>
   </Box>
  </Box>
    )
}
