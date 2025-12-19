import { Box, Button, TextField, Typography, Link, CircularProgress } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {Link as RouterLink } from 'react-router-dom'
import '../sendCode/SendCode.jsx'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SendCodeSchema } from '../../validation/SendCodeSchema.js'
import axiosInstance from '../../Api/axiosInstance.js'


export default function Login() {
    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm({
       resolver:yupResolver(SendCodeSchema),
       mode:'onBlur'
     })
    const navigate = useNavigate();
    const loginForm = async (values)=>{
    // console.log(values);
    try{
    const response = await axiosInstance.post(`/Auth/Account/Login`, values);
    if(response.status==200){
      console.log(response);
      navigate('/home');
      localStorage.setItem("token", respoose.data.accessToken);
    }
  
    console.log(response);
  
    }catch(err){
    console.log(err.response?.data);}
  }
    return ( 
  <Box className ="register-form">
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
