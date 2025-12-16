import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Api/axiosInstance';
import { Box, Card, Container, Grid, Typography } from '@mui/material';

export default function Categories() {

    const[categories, setCategoris]=useState([]);

    const getCategories= async()=>{
        try{
            const response= await axiosInstance.get(`/Categories`)
            setCategoris(response.data);
        }catch(error){
            console.log(error);
        }
    }


    useEffect(()=>{
        getCategories();
    }, [])
  return (
    <>

    <Box p={3} sx={{textAlign:'center'}}>
        <Typography component={'h2'} variant='h4' m={3} >Categories</Typography>
        <Container maxWidth='xl'>
        <Grid container  sx={{textAlign:'center'}}>
            {categories.map((category)=>
      <Grid item key={category.id} size={{sx:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
             <Card  sx={{p:4, }}>{category.name}</Card> 
            </Grid>
      )
      }
        </Grid>
        </Container>
    </Box>
      
    </>
  )
}
