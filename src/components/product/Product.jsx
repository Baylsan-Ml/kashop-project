import { Box, Container, Grid, Card, Typography, Button, Link, TextField, CircularProgress, IconButton, Rating } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link as RouterLink} from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Product({search,categoryId, minPrice, maxPrice,  }) {
    const { t, i18n } = useTranslation();

    const {register, handleSubmit}= useForm({
        defaultValues:{
          search:'',
          categoryId:'',
          minPrice:'',
          maxPrice:''
        }
       });
    const [activeFilters, setActiveFilters]=useState({});
    const {isLoading, isError, data}= useProducts(activeFilters);
    const product=data?.response.data || [];
    console.log(product);
  
    const applyFilters=(values)=>{
      setActiveFilters({
        search:values.search || null,
        categoryId:values.categoryId || null,
        minPrice:values.minPrice || null,
        maxPrice:values.maxPrice || null,
      });
    }

  return (
     <> 
     
                   <Card color='secondary' sx={{ cursor: 'pointer', width:'100%',  borderRadius:'25px'}}>
                     <CardMedia  sx={{height:'500px', objectFit:'contain', p:2}}
                     image={product.image} title="product image"  />
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Box sx={{display:'flex',}}>
          <Typography sx={{display:'flex', flexGrow:1}}>{t("Price")} : {product.price}$</Typography>
            <Rating sx={{color:'gold'}} value={product.rate} readOnly/>
        </Box> 
      </CardContent>
    </Card> 
                   
           
    </>
  )
}
