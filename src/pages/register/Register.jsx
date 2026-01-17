import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiesterSchema } from '../../validation/RegisterSchema';
import useRegister from '../../hooks/useRegister';
import { useTranslation } from 'react-i18next';
import bg from '../../assets/imgs/bg.jpg'

export default function Regiester() {
   const { t, i18n } = useTranslation();
  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({
    resolver:yupResolver(RegiesterSchema),
    mode: 'onBlur'
  })

  const {serverErrors, registerMutation}=useRegister();
  const registerForm = async (values)=>{
   registerMutation.mutateAsync(values);
}
  return (
    
      <Container component={'section'} sx={{display:'flex', justifyContent:'center',
   }}>
    <Box  sx={{minHeight:'85vh',p:5, m:5, boxShadow:2, border: 1, borderLeft: 0, borderTop: 0 , borderColor: 'grey.500', width:'70%',
   display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}> 
<Typography variant='h1'sx={{textAlign: 'center',  textShadow:'2px 2px 1px #4e090a' }} color='primary' >{t("Register")}</Typography>
    {serverErrors.length>0 ?
      serverErrors.map((err)=>
       <Typography sx={{color:'red'}}>{err}</Typography>
  ) :null}
<Box onSubmit={handleSubmit(registerForm)} component={"form"} 
sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center'}}>
<TextField label="user name" {...register('userName')} sx={{width:'90%'}} variant="outlined"
error={errors.userName} helperText={errors.userName?.message}/>
<TextField label="Full Name" {...register('fullName')} sx={{width:'90%'}} variant="outlined"
error={errors.fullName} helperText={errors.fullName?.message}/>
<TextField label="user email" {...register('email')} sx={{width:'90%'}} variant="outlined"
error={errors.email} helperText={errors.email?.message}/>
<TextField label="password" {...register('password')} sx={{width:'90%'}} variant="outlined"
error={errors.password} helperText={errors.password?.message}/>
 <TextField label="phone number" {...register('phoneNumber')} sx={{width:'90%'}} variant="outlined" 
 error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
 <Box sx={{display:'flex', width:'90%', gap:5, justifyContent:'center'}}>
 <Button variant="contained" type="submit" disabled={isSubmitting} color='primary'
   sx={{width:'20%'}}>
  {isSubmitting? <CircularProgress />: 'Regiester'}
  </Button>
  <Button variant="contained" type="submit" color='info'
    sx={{ width:'20%', boxShadow: 2, color:'#f2efe8'}}>
     Cancel
    </Button >
    </Box>
 </Box>
</Box>
   </Container>
  )
}