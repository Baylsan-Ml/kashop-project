import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from '../../validation/ResetPasswordSchema';
import useResetPassword from '../../hooks/useResetPassword';


export default function ResetPassword() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(resetPasswordSchema),
    mode:'onBlur'
  })
 
  const{resetPasswordMutation}=useResetPassword();
  const resetPasswordForm= async(values)=>{
    resetPasswordMutation.mutateAsync(values);
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
