import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import useUpdateEmail from '../../../hooks/useUpdateEmail';
import { UpdateEmailSchema } from '../../../validation/UpdateEmailSchema';



export default function UpdateEmail() {
  const { t } = useTranslation();

  const {register, handleSubmit, reset,formState:{errors, isSubmitting}}=useForm({
    resolver:yupResolver(UpdateEmailSchema),
    mode:'onBlur',
    defaultValues: {
      CurrentEmail:"",
      NewEmail: "",
    }
  })

  const updateEmailMutation=useUpdateEmail();
  const updateEmailForm= async(values)=>{
    updateEmailMutation.mutateAsync(values);
    reset({ CurrentEmail: "", NewEmail: "" });
  }
  return (
    <Container component={'section'} sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
      <Typography variant='h5' sx={{textAlign: 'center', textShadow:'2px 2px 1px #000', py:5}} color='primary' >
              {t("Update Email")}
              </Typography>
       <Box component={'form'}  onSubmit={handleSubmit(updateEmailForm)} bgcolor={''}
         sx={{ gap:1, width:'50%', display:'flex', flexDirection:'column' }}>
          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2 }}>
          <Typography width={'150px'}>{t('Current Email')}</Typography>
          <TextField fullWidth type='email'
          // value={data.email}
          label={t('Current Email')}
          {...register('CurrentEmail')}
           error={errors.CurrentEmail} helperText={errors.CurrentEmail?.message}
           />
          </Box>

          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:2, }}>
          <Typography width={'150px'}>{t('New Email')}</Typography>
          <TextField fullWidth type='email'
          label={t('New Email')}
          {...register('NewEmail')}
           error={errors.NewEmail} helperText={errors.NewEmail?.message}
           />
          </Box>


           <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 5, sm: 9, md: 12 }}>
            <Button  variant="contained" type="submit" disabled={isSubmitting} 
            width={{xs:'100%', sm:'80%', md:'40%' }} 
            // sx={{ width:'40%'}}
            >
              {isSubmitting? <CircularProgress />: 'Update Email'}
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
