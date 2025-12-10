import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Regiester() {

  const {register, handleSubmit} = useForm({})
  
  const registerForm = async (values)=>{
  
  console.log(values);
  
  try{
  const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`, values);

  console.log(response);

  }catch(err){
  console.log(err);}
}
  

  return (
   
<Box className ="register-form" >
<Typography variant='h1'sx={{textAlign: 'center', mt:3 }} >Register Page</Typography>

<Box onSubmit={handleSubmit(registerForm)} component={"form"} 
sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'}}>
<TextField label="user name" {...register('userName')} sx={{width:'40%'}} variant="outlined"/>
<TextField label="Full Name" {...register('fullName')} sx={{width:'40%'}} variant="outlined"/>
<TextField label="user email" {...register('email')} sx={{width:'40%'}} variant="outlined"/>
<TextField label="password" {...register('password')} sx={{width:'40%'}} variant="outlined"/>
 <TextField label="phone number" {...register('phoneNumber')} sx={{width:'40%'}} variant="outlined" />
 <Button variant="contained" type="submit"  sx={{backgroundColor:'InfoText', width:'40%'}}>Register</Button>
 </Box>
</Box>

  )
}