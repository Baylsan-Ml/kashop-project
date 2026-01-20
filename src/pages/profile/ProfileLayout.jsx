import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Box, Button, CircularProgress, Container, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Profile() {
    const{data, isLoading, isError}= useProfile();
    const {t}= useTranslation();

    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography>Error</Typography>

    console.log(data);


  return (
     <Container sx={{minHeight:'70vh', textAlign:'center', py:5, position:'relative'}} >
    <Box component={'section'} sx={{minHeight:'70vh'}}>
      <Grid container>
        <Grid size={{xs:6, sm:4, md:3, xl:2 }}>
           <Drawer variant="permanent" color='info' PaperProps={{
        sx: {
          width: 300,  backgroundColor:'#e38792',
          position:'absolute', left:'-350px', overflowX:'hidden'
        },
      }} >
          <Button color='secondary'  component={NavLink} to=''>{t("Info")}</Button>
          <Button  color='secondary' component={NavLink} to='orders'>{t("Orders")}</Button>
      </Drawer>
        </Grid>

        <Grid size={{xs:6, sm:8, md:9, xl:10 }}>
           <Box component={'section'}  >
      <Typography color='primary' sx={{}}>{t("My Proflie")}</Typography>

      {/* <Button component={NavLink} to=''>Info</Button>
      <Button component={NavLink} to='orders'>Orders</Button> */}
    </Box>
        </Grid>
      </Grid>
          
      

    <Outlet/>
   
    </Box>
     </Container>
  )
}
