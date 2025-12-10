import { Box , TextField, Typography} from '@mui/material'

import React from 'react'


export default function Register() {
  return (
    <Box className='Register-form' sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Typography variant='h1' sx={{textAlign: 'center', mt:3 }}>Register Page</Typography>

      <Box component={"form"} mt={5} mb={5} sx={{display:'flex', flexDirection:'column', gap:3, width: '40%'}}>
        <TextField label='user name' name='userName' variant="outlined"></TextField>
        <TextField label='full name' name='fullName' variant="outlined"></TextField>
        <TextField label='user email' name='email' variant="outlined"></TextField>
        <TextField label='password' name='password' variant="outlined"></TextField>
        <TextField label='phone number' name='phoneNumber' variant="outlined"></TextField>
      </Box>
    </Box>
  )
}
