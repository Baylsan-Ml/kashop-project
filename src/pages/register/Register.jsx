import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiesterSchema } from '../../validation/RegisterSchema';

export default function Regiester() {
  
  const[serverErrors, setServerErrors]= useState([]);
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(RegiesterSchema),
    mode: 'onBlur'
  })
  const registerForm = async (values)=>{
  console.log(values);
  try{
  const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`, values);
  console.log(response);
  }catch(err){
    setServerErrors(err.response.data.errors);
  console.log(err.response.data.errors);}
}
  return (
   
<Box className ="register-form" >
<Typography variant='h1'sx={{textAlign: 'center', mt:3 }} >Register Page</Typography>
{serverErrors>0 ?
   serverErrors.map((err)=>
    <Typography sx={color='red'}>{err}</Typography>
  ) :null}
<Box onSubmit={handleSubmit(registerForm)} component={"form"} 
sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'}}>
<TextField label="user name" {...register('userName')} sx={{width:'40%'}} variant="outlined"
error={errors.userName} helperText={errors.userName?.message}/>
<TextField label="Full Name" {...register('fullName')} sx={{width:'40%'}} variant="outlined"
error={errors.fullName} helperText={errors.fullName?.message}/>
<TextField label="user email" {...register('email')} sx={{width:'40%'}} variant="outlined"
error={errors.email} helperText={errors.email?.message}/>
<TextField label="password" {...register('password')} sx={{width:'40%'}} variant="outlined"
error={errors.password} helperText={errors.password?.message}/>
 <TextField label="phone number" {...register('phoneNumber')} sx={{width:'40%'}} variant="outlined" 
 error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
 <Button variant="contained" type="submit"  sx={{backgroundColor:'InfoText', width:'40%'}}>Register</Button>
 </Box>
</Box>
  )
}