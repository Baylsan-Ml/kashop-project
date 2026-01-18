import React from 'react'
import useProductByCategory from '../../hooks/useProductByCategory';
import { Box, CircularProgress, Container, Grid, Link, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

export default function ProductByCategory() {

  const {id} = useParams();
  const {isLoading, isError, data:products}=useProductByCategory(id);
  const {data:category}= useCategories();
  console.log(category);
  const { t, i18n } = useTranslation();


   if(isLoading) return <CircularProgress />;
    if(isError) return <Typography>Error</Typography>;
    


  return (

    <Container sx={{minHeight:'70%'}}>
       <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} color='tertiary'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t(`${category.name}`)}
                </Typography>


                {/* <Grid container sx={{}}>
                                  {products.map((product)=>
                            <Grid  key={product.id} size={{sx:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
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
                              </Grid> */}
                </Box>
    </Container>
     
  )
}
