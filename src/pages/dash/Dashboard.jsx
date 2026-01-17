import { Container, Grid } from '@mui/material'
import React from 'react'
import background from '../../assets/imgs/img1.jpg'

export default function Dashboard() {
  return (
    <Container sx={{minHeight:'90vh'}}>
        <Grid Container  sx={{minHeight:'90vh', 
        // backgroundImage:`url(${background})`
    }}>
          <Grid size={{xs:6, xl:6}}>
            Admin
          </Grid>
           <Grid size={{xs:6, xl:6}}>
            User
          </Grid>
        </Grid>
    </Container>
  )
}
