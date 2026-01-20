import { Box, Container, Grid, Card, Typography, Button, Link, TextField, CircularProgress, IconButton, Rating } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link as RouterLink} from 'react-router-dom';
import {useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';
import Product from './../product/Product.jsx'



export default function Products() {
   const { t,  } = useTranslation();
   const[search, setSearch]=useState('');
    const {isLoading, isError, data}= useProducts({
      search:search || null,
    });
      
       if(isLoading) return <CircularProgress/>
       if(isError) return <Typography>Error</Typography>
  
  return (
    <>
        <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} color='tertiary'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t("Products")}
                </Typography>
                <Typography sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', color:'#e38792'}}>
                  {t("Check out our products, don't forget to add your favorites to cart")}
                  <InsertEmoticonIcon fontSize='large'/>
                </Typography>


                <TextField fullWidth value={search} onChange={(e)=>setSearch(e.target.value)} />
                {/* Search products */}
                <Container maxWidth={'xl'} sx={{display:'flex', justifyContent:'space-between' }}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 1, width: "50%" }}>
                    <ManageSearchIcon fontSize="large" fullWidth sx={{display:'flex', alignItems:'center', marginBottom:'auto'}} />
                   <TextField id="outlined-basic" label="Search products..." variant="outlined"
                   value={search} onChange={(e)=>setSearch(e.target.value)}
                sx={{ mb: 3, display:'flex', }}  />
                </Box>
               {/* Search products */}
             <FormControl sx={{display:'flex',width: "20%"}} >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select"
          
          label="Sort"
          >
          <MenuItem value=''>Sort By</MenuItem>
          <MenuItem value='name-asc'>Name A-Z</MenuItem>
          <MenuItem value='name-desc'>Name Z-A</MenuItem>
          <MenuItem value='price-asc'>Price Low-High</MenuItem>
          <MenuItem value='price-desc'>Price High-Low</MenuItem>
        </Select>
      </FormControl>
                </Container>
                {/* Sort */} 
             <Product/>
          </Box>       
    </>
  )
}
