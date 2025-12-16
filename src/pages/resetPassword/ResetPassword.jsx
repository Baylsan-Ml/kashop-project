import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import { resetPasswordSchema } from '../../validation/ResetPasswordSchema';
import axiosInstance from '../../Api/axiosInstance';

export default function ResetPassword() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(resetPasswordSchema),
    mode:'onBlur'
  })
  const navigate= useNavigate();
  const resetPasswordForm= async(values)=>{
    try{
      const response= await axiosInstance.patch(`/Auth/Account/ResetPassword`, values);
      console.log(response.data);
      if(response.data.success === true){
          navigate('/login');
        }else{
          alert('Please Check the Code');
        }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Box className='resetPasswordForm'>
      <Typography variant='h1' sx={{textAlign:'center'}} mt={15}>Reset Password</Typography>
      <Box component={'form'} onSubmit={handleSubmit(resetPasswordForm)}
      sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1}} mt={5}>
        <TextField label="new password" {...register('newPassword')} sx={{width:'40%'}} variant="outlined"
        error={errors.newPassword} helperText={errors.newPassword?.message}/>
         <TextField label="code" {...register('code')} sx={{width:'40%'}} variant="outlined" 
         error={errors.code} helperText={errors.code?.message}/>
         <TextField label="confirm your email" {...register('email')} sx={{width:'40%',}} variant="outlined"
                 error={errors.email} helperText={errors.email?.message}/>

        <Button  variant="contained" type="submit" disabled={isSubmitting}  sx={{backgroundColor:'InfoText', width:'40%'}}>
                  {isSubmitting? <CircularProgress />: 'Reset Password'}
                  </Button>
      </Box>
    </Box>
  )
}
