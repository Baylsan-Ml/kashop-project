import React from 'react'
import useProductByCategory from '../../hooks/useProductByCategory';
import { Box, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Link, Rating, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

export default function ProductByCategory() {

  const {id} = useParams();
  console.log(id);
  const {isLoading, isError, data:products}=useProductByCategory(id);
  console.log(products);
  const{data:categories}=useCategories();
  console.log(categories);
  const category = categories?.response?.find((cat) => cat.id == id);
  
  const { t, i18n } = useTranslation();


   if(isLoading) return <CircularProgress />;
    if(isError) return <Typography>Error</Typography>;
    


  return (

    <Container sx={{minHeight:'70%'}}>
       <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} color='success'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {category.name}
                </Typography>

                
                  <Grid container sx={{}}>
                        {products.response.map((product)=>
                            <Grid  key={product.id} size={{sx:12, sm:6 , md:4, lg:4}} sx={{p:4}}>
                                   <Link component={RouterLink}  to={`/productDetails/${product.id}`} sx={{textDecoration:'none'}}>
                                   <Card sx={{backgroundColor:'#f2efe8',  cursor: 'pointer', width:'100%',  }}>
                                     <CardMedia  sx={{height:'500px', objectFit:'contain', p:2}}
                                     image={product.image} title="product image" />
                                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.name}
                        </Typography>
                        <Box sx={{display:'flex',}}>
                          <Typography sx={{display:'flex', flexGrow:1}}>Price: {product.price} $</Typography>
                            <Rating sx={{color:'gold'}}/>
                        </Box> 
                      </CardContent>
                    </Card> 
                                   </Link>
                  </Grid>
                            )
                            }
                              </Grid>  

                </Box>
    </Container>
     
  )
}
