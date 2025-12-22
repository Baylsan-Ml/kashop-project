import React, { useState } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiesterSchema } from '../../validation/RegisterSchema';
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

export default function Regiester() {
  
  const[serverErrors, setServerErrors]= useState([]);
  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({
    resolver:yupResolver(RegiesterSchema),
    mode: 'onBlur'
  })
  const navigate= useNavigate();
  const registerMutation= useMutation({
    mutationFn: async (values)=>{
      return await axiosInstance.post(`/Auth/Account/Register`, values);
    },
    onSuccess:()=>{
      navigate('/login');
    },
    onError:()=>{
       setServerErrors(err.response.data.errors);
    }
  })
  const registerForm = async (values)=>{
   registerMutation.mutateAsync(values);
}
  return (
   
<Box className ="register-form" >
<Typography variant='h1'sx={{textAlign: 'center', mt:3 }} >Register Page</Typography>
    {serverErrors.length>0 ?
      serverErrors.map((err)=>
       <Typography sx={{color:'red'}}>{err}</Typography>
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
 <Button variant="contained" type="submit" disabled={isSubmitting}  sx={{backgroundColor:'InfoText', width:'40%'}}>
  {isSubmitting? <CircularProgress />: 'Regiester'}
  </Button>
 </Box>
</Box>
  )
}