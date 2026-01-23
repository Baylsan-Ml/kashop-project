import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { UpdatePasswordSchema } from '../../../validation/UpdatePasswordSchema';
import useUpdatePassword from '../../../hooks/useUpdatePassword';



export default function UpdatePassword() {
  const { t } = useTranslation();

  const {register, handleSubmit, reset,formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(UpdatePasswordSchema),
    mode:'onBlur',
    defaultValues: {
      CurrentPassword: "",
      NewPassword: "",
      ConfirmNewPassword: ""
    }
  })

  const updatePasswordMutation=useUpdatePassword();
  const updatePasswordForm= async(values)=>{
    updatePasswordMutation.mutateAsync(values);
    reset({ CurrentPassword: "", NewPassword: "", ConfirmNewPassword: "" });
  }
  return (
    <Container component={'section'} sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
      <Typography variant='h5' sx={{textAlign: 'center', textShadow:'2px 2px 1px #000', py:5}} color='primary' >
              {t("Update Password")}
              </Typography>
        <Box component={'form'}  onSubmit={handleSubmit(updatePasswordForm)} bgcolor={''}
         sx={{ gap:1, width:'50%', display:'flex', flexDirection:'column' }}>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2 }}>
          <Typography width={'150px'}>{t('Current Password')}</Typography>
          <TextField fullWidth type="password"
          label={t('new password')}
          {...register('CurrentPassword')}
           error={errors.CurrentPassword} helperText={errors.CurrentPassword?.message}
           />
          </Box>

          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2, }}>
          <Typography width={'150px'}>{t('New Password')}</Typography>
          <TextField fullWidth type="password"
          label={t('New Password')}
          {...register('NewPassword')}
           error={errors.NewPassword} helperText={errors.NewPassword?.message}
           />
          </Box>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2,}}>
          <Typography width={'150px'}>{t("Confirm New Password")}</Typography>
         <TextField fullWidth type="password"
          label={t('new password')}
          {...register('ConfirmNewPassword')}
           error={errors.ConfirmNewPassword} helperText={errors.ConfirmNewPassword?.message}
           />
          </Box>

          <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 5, sm: 9, md: 12 }}>
            <Button  variant="contained" type="submit" disabled={isSubmitting} 
            width={{xs:'100%', sm:'80%', md:'40%' }} 
            // sx={{ width:'40%'}}
            >
              {isSubmitting? <CircularProgress />: 'Update Password'}
                  </Button>
                   <Button variant="outlined"
              color="success" sx={{ width:'40%'}}
              onClick={()=>Navigate('/profile')}
            >
              {t('Cancel')}
            </Button>
          </Stack>
                  
          
        </Box>



    </Container>
   
  )
}
