import React, { useState } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Api/axiosInstance';
import { SendCodeSchema } from '../../validation/SendCodeSchema';
import { useMutation } from '@tanstack/react-query';

export default function SendCode() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm({
    resolver:yupResolver(SendCodeSchema),
    mode:'onBlur'
  })
   
  const navigate = useNavigate();

  const sendCodeMutation= useMutation({
     mutationFn: async (value)=>{
      return await axiosInstance.post(`/Auth/Account/SendCode`, value);
            },
    onSuccess:()=>{
      navigate('/resetPassword');
    },
    onError:()=>{
      alert('Please Enter a Valid Email');
    }
  });
  const sendCodeForm= async(value)=>{
    sendCodeMutation.mutateAsync(value);
    // console.log(value);
    // try{
    //     const response= await axiosInstance.post(`/Auth/Account/SendCode`, value);
    //     console.log(response.data);
    //     if(response.data.success === true){
    //       navigate('/resetPassword');
    //     }else{
    //       alert('Please Enter a Valid Email');
    //     }
    // }catch(err){
    //   console.log(err); 
    // }
  }
  return (
    <Box className='sendCode-Form'>
      <Typography variant='h1' sx={{textAlign:'center'}} mt={15}>Send Code</Typography>
      <Box component={"form"} onSubmit={handleSubmit(sendCodeForm)}
      sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1}} mt={5}>
        <TextField label="enter your email" {...register('email')} sx={{width:'40%',}} variant="outlined"
        error={errors.email} helperText={errors.email?.message}/>
        <Button  variant="contained" type="submit" disabled={isSubmitting}  sx={{backgroundColor:'InfoText', width:'40%'}}>
          {isSubmitting? <CircularProgress />: 'Send Code'}
          </Button>
      </Box>
    </Box>
  )
}
