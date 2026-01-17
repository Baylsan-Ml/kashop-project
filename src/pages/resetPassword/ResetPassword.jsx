import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from '../../validation/ResetPasswordSchema';
import useResetPassword from '../../hooks/useResetPassword';
import { useTranslation } from 'react-i18next';



export default function ResetPassword() {

  const {register, handleSubmit, formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(resetPasswordSchema),
    mode:'onBlur'
  })
 
  const{resetPasswordMutation}=useResetPassword();
  const { t } = useTranslation();
  const resetPasswordForm= async(values)=>{
    resetPasswordMutation.mutateAsync(values);
  }
  return (
    <Container component={'section'} sx={{display:'flex', justifyContent:'center' }}>
       <Box 
       sx={{minHeight:'90vh', m:5, boxShadow:2, border: 1, borderLeft: 0, borderTop: 0 , borderColor: 'grey.500', width:'70%',
   display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}
       >
      <Typography variant='h1' sx={{textAlign: 'center', mt:3, textShadow:'2px 2px 1px #4e090a'}} color='primary' mt={15}>
        {t("Reset Password")}
        </Typography>
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
    </Container>
   
  )
}
