import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Avatar, Box, Button, CircularProgress, Container, Drawer, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PortraitIcon from '@mui/icons-material/Portrait';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ProfileOrders from './ProfileOrders';


export default function Profile() {
    const{data, isLoading, isError}= useProfile();
    const {t}= useTranslation();

    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography>Error</Typography>

    console.log(data);


  return (
    //  <Container sx={{minHeight:'70vh', textAlign:'center', py:5}} >
    <Box component={'section'} sx={{minHeight:'70vh', textAlign:'center', py:5}}>
      <Grid container>
        <Grid size={{xs:6, sm:3, md:2, xl:2 }} sx={{display:'flex', alignItems:'baseline'}}>
       <List  
       sx={{ width: '100%',  bgcolor: 'info.main', height:'500px', borderRadius:'20%', 
       display:'flex', flexDirection:'column', alignItems:'center' }}>
        <Button component={NavLink} to='' sx={{ borderRadius:'20%',pt:5}}>
           <ListItem>
        <ListItemAvatar>
            <PortraitIcon color='secondary' sx={{fontSize:'30px'}} />
        </ListItemAvatar>
        <ListItemText  primary={t("Info")} secondary={t("My personal info")} 
        sx={{color:'secondary.main'}}
        />
      </ListItem>
        </Button>
        <Button component={NavLink} to='orders' sx={{ borderRadius:'20%',}}>
           <ListItem>
        <ListItemAvatar>
            <ViewStreamIcon color='secondary' sx={{}} />
        </ListItemAvatar>
        <ListItemText primary={t("Orders")} secondary={t("Order history")}  
        sx={{color:'secondary.main'}}
        />
      </ListItem>
        </Button>
    </List>
        </Grid>

        <Grid size={{xs:6, sm:8, md:9, xl:9 }}>
           <Box component={'section'}  >
      <Typography  component={'h2'} variant='h2' m={3} color='success'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', }}>{t("My Proflie")}</Typography>
    
    <Outlet/>
    </Box>
        </Grid>
      </Grid>
          
      

   
    </Box>
    //  </Container>
  )
}
