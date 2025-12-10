import { Box , Button, TextField, Typography} from '@mui/material'
import axios from 'axios';

import React from 'react'
import { useForm } from 'react-hook-form'


export default function Register() {

  const {register, handleSubmit}=useForm({});

  const registerForm= async(values)=>{
    try{
      const response= await axios.post(`http://knowledgeshop.runasp.net/api/Auth/Account/Register`, values);

      console.log(response);

    }catch(err){
      console.log(err);
    }
  }
  return (
    <Box className='Register-form' sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Typography variant='h1' sx={{textAlign: 'center', mt:3 }}>Register Page</Typography>

      <Box onSubmit={handleSubmit(registerForm)} component={"form"} mt={5} mb={5} sx={{display:'flex', flexDirection:'column', gap:3, width: '40%'}}>
        <TextField {...register('userName')} label='user name' variant="outlined"></TextField>
        <TextField {...register('fullName')} label='full name'  variant="outlined"></TextField>
        <TextField {...register('email')} label='user email' variant="outlined"></TextField>
        <TextField {...register('password')} label='password' variant="outlined"></TextField>
        <TextField {...register('phoneNumber')} label='phone number' variant="outlined"></TextField>
        <Button variant="contained" type='submit' sx={{backgroundColor:'InfoText'}}>Register</Button>
      </Box>
    </Box>
  )
}
