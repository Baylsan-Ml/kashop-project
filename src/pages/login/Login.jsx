import { Box, Button, TextField, Typography, Link, CircularProgress, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import {Link as RouterLink } from 'react-router-dom'
import '../sendCode/SendCode.jsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { SendCodeSchema } from '../../validation/SendCodeSchema.js'
import useLogin from '../../hooks/useLogin.js'
import { jwtDecode } from "jwt-decode";
import { useTranslation } from 'react-i18next'
import bg1 from '../../assets/imgs/bg1.jpg'




export default function Login() {
   const { t, i18n } = useTranslation();
    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm({
       resolver:yupResolver(SendCodeSchema),
       mode:'onBlur'
     })
    
     const {loginMutation}=useLogin();
    const loginForm = async (values)=>{
      loginMutation.mutateAsync(values);
  }
    return ( 
      <Container component={'section'} sx={{display:'flex', justifyContent:'center' }}>
        <Box 
  sx={{minHeight:'70vh', m:5, boxShadow:2, border: 1, borderLeft: 0, borderTop: 0 , borderColor: 'grey.500', width:'70%',
   display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}>
  <Typography variant='h1'
  sx={{textAlign: 'center', mt:3, textShadow:'2px 2px 1px #4e090a'}} color='primary' >
    {t("Login")}
    </Typography>
  
  <Box onSubmit={handleSubmit(loginForm)} component={"form"} 
  sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center',  }}>
  <TextField label="user email" {...register('email')} sx={{width:'90%'}} variant="outlined"/>
  <TextField label="password" {...register('password')} sx={{width:'90%'}} variant="outlined"/>
  <Box sx={{display:'flex', width:'90%', gap:5, justifyContent:'center'}}>
     <Button variant="contained" type="submit"  disabled={isSubmitting} color='primary'
    sx={{ width:'20%', boxShadow: 2}}>
     {isSubmitting? <CircularProgress />: 'Login'}
    </Button >
    <Button variant="contained" type="submit" color='info'
    sx={{ width:'20%', boxShadow: 2, color:'#f2efe8'}}>
     Cancel
    </Button >
  </Box>
  
   <Link component={RouterLink} to={'/sendCode'} sx={{textDecoration:'none', fontSize:'bold'}} color='primary' >Forget Your Password?</Link>
   </Box>
  </Box>
      </Container>
  
    )
}
