import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../Api/axiosInstance';
import { Box, Card, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCategories } from '../../hooks/useCategories';
import { UserContext } from '../../context/UserContext';

export default function Categories() {
    
    const {username}=useContext(UserContext);
    const[categories, setCategoris]=useState([]);
    const {isLoading, isError, data}= useCategories();
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography>Error</Typography>
  return (
    <>

    <Box p={3} sx={{textAlign:'center'}}>
        <Typography component={'h2'} variant='h4' m={3} sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)'}} >Categories - {username}</Typography>
        <Container maxWidth='xl'>
        <Grid container sx={{textAlign:'center',}}>
            {data.response.map((category)=>
      <Grid item key={category.id} size={{sx:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
             <Card sx={{p:3, backgroundColor:'#d5cdc0',  cursor: 'pointer', width:'100%',}}>{category.name}</Card> 
            </Grid>
      )
      }
        </Grid>
        </Container>
    </Box>
      
    </>
  )
}
