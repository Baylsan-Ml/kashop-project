import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { useUpdateProfileInfoSchema } from '../../../validation/UpdateProfileInfoSchema';
import useUpdateProfileInfo from '../../../hooks/useUpdateProfileInfo';
import useProfile from '../../../hooks/useProfile';
import { useEffect } from 'react';




export default function ProfileInfoUpdate() {
  const { t } = useTranslation();
  const {data: profileData, isLoading } = useProfile();


  const {register, handleSubmit, reset,formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(useUpdateProfileInfoSchema),
    mode:'onBlur',
    defaultValues: {
      fullName: "",
      city: "",
      phoneNumber:""
    }
  })

//getting data from API
  useEffect(() => {
  if (profileData) {
    reset({
      fullName: profileData.fullName || "",
      city: profileData.city || "",
      phoneNumber: profileData.phoneNumber || ""
    });
  }
}, [profileData, reset]);
  const updateProfileInfoMutation=useUpdateProfileInfo();
  const updateProfileInfoForm= async(values)=>{
    updateProfileInfoMutation.mutateAsync(values);
    reset(values);
  }
  return (
    <Container component={'section'} sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
      <Typography variant='h5' sx={{textAlign: 'center', textShadow:'2px 2px 1px #000', py:5}} color='primary' >
              {t("Update Info")}
              </Typography>
        <Box component={'form'}  onSubmit={handleSubmit(updateProfileInfoForm)} bgcolor={''}
         sx={{ gap:1, width:'50%', display:'flex', flexDirection:'column' }}>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2 }}>
          <Typography width={'150px'}>{t('Full Name')}</Typography>
          <TextField fullWidth 
          label={t('Full Name')}
          {...register('fullName')}
           error={errors.fullName} helperText={errors.fullName?.message}
           />
          </Box>

          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2, }}>
          <Typography width={'150px'}>{t('City')}</Typography>
          <TextField fullWidth 
          label={t('City')}
          {...register('city')}
           error={errors.city} helperText={errors.city?.message}
           />
          </Box>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2,}}>
          <Typography width={'150px'}>{t("Phone Number")}</Typography>
         <TextField fullWidth 
          label={t('Phone Number')}
          {...register('phoneNumber')}
           error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
           />
          </Box>
           <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 5, sm: 9, md: 12 }}>
            <Button  variant="contained" type="submit" disabled={isSubmitting} 
            width={{xs:'100%', sm:'80%', md:'40%' }} 
            // sx={{ width:'40%'}}
            >
              {isSubmitting? <CircularProgress />: 'Update Info'}
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
