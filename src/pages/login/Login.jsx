import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Login() {
   const {register, handleSubmit} = useForm({})
    
    const loginForm = async (values)=>{
    
    // console.log(values);
    
    try{
    const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Login`, values);
    if(response.status==200){
      console.log(response);
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
   <Button variant="contained" type="submit"  sx={{backgroundColor:'InfoText', width:'40%'}}>Login</Button>
   </Box>
  </Box>
    )
}
