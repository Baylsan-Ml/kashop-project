import React, { useState } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiesterSchema } from '../../validation/RegisterSchema';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

  const {register, handleSubmit, formState:{errors, inSubmitting}}=useForm({
    resolver:yupResolver(RegiesterSchema),
    mode:'onBlur'
  })
  const navigate= useNavigate();
  const resetPasswordForm= async(value)=>{
    try{
      const response= await axiosInstance.patch(`/Auth/Account/ResetPassword`, value);
      console.log(response);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Box className='resetPasswordForm'>
      <Typography variant='h1' sx={{textAlign:'center'}} mt={15}>Reset Password</Typography>
      <Box component={'form'} onSubmit={handleSubmit(resetPasswordForm)}
      sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1}} mt={5}>
        <TextField label="new password" {...register('password')} sx={{width:'40%'}} variant="outlined"
        error={errors.password} helperText={errors.password?.message}/>
         <TextField label="code" {...register('code')} sx={{width:'40%'}} variant="outlined" 
         error={errors.code} helperText={errors.code?.message}/>
         <TextField label="confirm your email" {...register('email')} sx={{width:'40%',}} variant="outlined"
                 error={errors.email} helperText={errors.email?.message}/>
      </Box>
    </Box>
  )
}
