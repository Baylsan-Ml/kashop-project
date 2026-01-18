import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from '../../validation/ResetPasswordSchema';
import useResetPassword from '../../hooks/useResetPassword';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';



export default function ResetPassword() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(resetPasswordSchema),
    mode:'onBlur'
  })
 
  const{resetPasswordMutation}=useResetPassword();
  const { t } = useTranslation();
  const navigate=useNavigate();
  const resetPasswordForm= async(values)=>{
    resetPasswordMutation.mutateAsync(values);
  }
  return (
    <Container component={'section'} sx={{display:'flex', justifyContent:'center' }}>
       <Box 
       sx={{minHeight:'70vh', m:5, boxShadow:2, border: 1, borderLeft: 0, borderTop: 0 , borderColor: 'grey.500', width:'70%',
   display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}
       >
      <Typography variant='h1' sx={{textAlign: 'center', textShadow:'2px 2px 1px #4e090a'}} color='primary' >
        {t("Reset Password")}
        </Typography>
      <Box component={'form'} onSubmit={handleSubmit(resetPasswordForm)}
      sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:1}} mt={5}>
        <TextField label="new password" {...register('newPassword')} sx={{width:'85%'}} variant="outlined"
        error={errors.newPassword} helperText={errors.newPassword?.message}/>
         <TextField label="code" {...register('code')} sx={{width:'85%', my:2}} variant="outlined" 
         error={errors.code} helperText={errors.code?.message}/>
         <TextField label="confirm your email" {...register('email')} sx={{width:'85%',}} variant="outlined"
                 error={errors.email} helperText={errors.email?.message}/>

        <Box sx={{display:'flex', width:'90%', gap:5, justifyContent:'center', pt:2}}>
           <Button  variant="contained" type="submit" disabled={isSubmitting}  sx={{ width:'25%'}}>
                  {isSubmitting? <CircularProgress />: 'Reset Password'}
                  </Button>
           <Button variant="contained" type="submit" color='info' onSubmit={()=>navigate('/login')}
                      sx={{ width:'25%', boxShadow: 2, color:'#f2efe8'}}>
                       Cancel
                  </Button >
        </Box>
       
      </Box>
    </Box>
    </Container>
   
  )
}
