import React, { useState } from 'react'
import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from '../../validation/SendCodeSchema';
import useSendCode from '../../hooks/useSendCode';
import { useTranslation } from 'react-i18next';

export default function SendCode() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm({
    resolver:yupResolver(SendCodeSchema),
    mode:'onBlur'
  })
   
  const {sendCodeMutation}=useSendCode();
  const { t } = useTranslation();
  const sendCodeForm= async(value)=>{
    sendCodeMutation.mutateAsync(value);
  }
  return (
     <Container component={'section'} sx={{display:'flex', justifyContent:'center' }}>
       <Box 
       sx={{minHeight:'70vh', m:5, boxShadow:2, border: 1, borderLeft: 0, borderTop: 0 , borderColor: 'grey.500', width:'70%',
   display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}
       >
      <Typography variant='h1' sx={{textAlign: 'center', mt:3, textShadow:'2px 2px 1px #4e090a'}} color='primary'>{t("Send Code")}</Typography>
      <Box component={"form"} onSubmit={handleSubmit(sendCodeForm)}
      sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1}} mt={5}>
        <TextField label="enter your email" {...register('email')} sx={{width:'80%'}} variant="outlined"
        error={errors.email} helperText={errors.email?.message}/>
        <Box sx={{display:'flex', width:'90%', gap:5, justifyContent:'center'}}>
          <Button  variant="contained" type="submit" disabled={isSubmitting}  
         sx={{ width:'20%', boxShadow: 2}}>
          {isSubmitting? <CircularProgress />: 'Send Code'}
          </Button>
          <Button variant="contained" type="submit" color='info'
    sx={{ width:'20%', boxShadow: 2, color:'#f2efe8'}}>
     Cancel
    </Button >
        </Box>
        
      </Box>
    </Box>
     </Container>
   
  )
}
