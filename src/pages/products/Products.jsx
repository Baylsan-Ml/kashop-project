import { Box, Container, Grid, Card, Typography, Button, Link, TextField, CircularProgress, IconButton, Rating } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link as RouterLink} from 'react-router-dom';
import {useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts.js';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';
import Product from '../../components/product/ProductCard.jsx'
import { useForm } from 'react-hook-form';
import ProductCard from '../../components/product/ProductCard.jsx';




export default function Products() {
   const { t  } = useTranslation();
    
   const {register, handleSubmit}= useForm({
    defaultValues:{
      search:'',
      categoryId:'',
      minPrice:'',
      maxPrice:'',
      page: 1,
      limit: 8,
      sortBy: null,
      order: null,
      
    }
   });
   const [activeFilters, setActiveFilters]=useState({
    page: 1,
    limit: 8,
   });
   const {isLoading, isError, data}= useProducts(activeFilters);
   const product=data?.response.data || [];
  //  console.log(product);

    const applyFilters=(values)=>{ 
      let sortBy = "";
      let ascending = true;
      if (values.sort) {
      const [field, order] = values.sort.split("-");
      sortBy = field;
      ascending = order === "asc";
  }
      setActiveFilters({
        search:values.search || "",
        categoryId:values.categoryId || "",
        minPrice:values.minPrice || "",
        maxPrice:values.maxPrice || "",
        page: 1,
        limit: values.limit || 8,
        sortBy,
        ascending,
      });
    }
      
       if(isLoading) return <CircularProgress/>
       if(isError) return <Typography>Error</Typography>
  
  return (
    <>
        <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} color='success'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t("Products")}
                </Typography>
                <Typography sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', color:'primary.main'}}>
                  {t("Discover our unique collection of products designed to suit all your needs.")}
                  <InsertEmoticonIcon fontSize='large'/>
                </Typography>
                {/* Search and Sort */}
                <Box component={'form'} onSubmit={handleSubmit(applyFilters)} 
                sx={{display:'flex', justifyContent:'space-evenly', alignItems:'flex-start', py:5}}>
                <Grid container spacing={7}>
                  <Grid size={{xs:4, sm:4, md:2}}>
                     <Box sx={{display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
                     <ManageSearchIcon fontSize="large" fullWidth sx={{display:'flex', alignItems:'center', marginBottom:'auto'}} />
                   <TextField label={t("Search products...")} variant="outlined"
                   {...register('search')} sx={{ mb: 3, display:'flex',
                    borderRadius:'20px' }}  
                   InputProps={{style: {borderRadius: '20px'},}} />
                  </Box>
                  </Grid>
                  <Grid size={{xs:4, sm:4, md:2}}>
                      <TextField label={t("Category Id")} variant="outlined"
                   {...register('categoryId')}  sx={{ mb: 3, display:'flex', }}
                   InputProps={{style: {borderRadius: '20px'},}}  />
                  </Grid>
                  <Grid size={{xs:4, sm:4, md:2}}>
                      <TextField label={t("Min Price")} variant="outlined"
                   {...register('minPrice')}  sx={{ mb: 3, display:'flex', }}
                   InputProps={{style: {borderRadius: '20px'},}}  />
                  </Grid>
                  <Grid size={{xs:4, sm:4, md:2}}>
                       <TextField label={t("Max Price")} variant="outlined"
                   {...register('maxPrice')}  sx={{ mb: 3, display:'flex', }}
                   InputProps={{style: {borderRadius: '20px'},}}  />
                  </Grid>
                  <Grid size={{xs:4, sm:4, md:2}}>
                      <FormControl fullWidth sx={{display:'flex', borderRadius:'20px'}} >
                    <InputLabel fullWidth>{t("Sort")}</InputLabel>
                     <Select labelId="sort-label" label={t("Sort")} defaultValue=""
                     sx={{borderRadius:'20px'}}
                      {...register("sort")}>
                      <MenuItem  value="" sx={{borderRadius:'20px'}}>Sort By</MenuItem>
                      <MenuItem value="name-asc" sx={{borderRadius:'20px'}}>Name A → Z</MenuItem>
                      <MenuItem value="name-desc" sx={{borderRadius:'20px'}}>Name Z → A</MenuItem>
                      <MenuItem value="price-asc" sx={{borderRadius:'20px'}}>Price Low → High</MenuItem>
                      <MenuItem value="price-desc" sx={{borderRadius:'20px'}}>Price High → Low</MenuItem>
                      </Select>
                     </FormControl>
                  </Grid>
                  <Grid size={{xs:4, sm:4, md:2}}>
                     <Button type='submit' variant='contained' color='primary' 
                   sx={{py:'15px', borderRadius:'20px'}}
                   >{t("Apply Filters")}</Button>
                  </Grid>
                </Grid>
                   </Box>
                {/* Search products */}

                 <Container maxWidth='xl'>
                  <Grid container sx={{display:'flex', justifyContent:'center'}}>
              {product.map((product)=>  
            <Grid  key={product.id} size={{xs:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
                   <Link component={RouterLink}  to={`/productDetails/${product.id}`} sx={{textDecoration:'none'}}>
                   <Card color='secondary' sx={{ cursor: 'pointer', borderRadius:'25px' }}>
                     <Box 
                     sx={{position: 'relative', overflow: 'hidden',
                      '&:hover img': {filter: 'brightness(0.5)', transform: 'scale(1.05)',},
                      '&:hover .details-btn': {opacity: 1, transform: 'translate(-50%, -50%)',},}}>
                        
                    <Button className="details-btn" variant="contained" color="primary"
                    sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)',
                      opacity: 0, transition: 'all 0.3s ease', zIndex: 2, px: 4, py: 1, borderRadius: '20px',
                     textTransform: 'none',fontWeight: 'bold',}}>
                   {t('Details')}
                   </Button>

                   <CardMedia component="img" image={product.image} title="product image"
                   sx={{height: '300px', objectFit: 'unset', transition: 'all 0.3s ease',}}/>
                   </Box>
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
          </Link>
         
  </Grid>
   )}
             </Grid>
            </Container>
          </Box>     

          <Pagination color="primary" sx={{ display: 'flex', justifyContent: 'center', my: 5}}
            count={data?.response?.totalCount || 1}
            page={activeFilters.page}
            onChange={(e, page) =>
           setActiveFilters(prev => ({
            ...prev,
            page: 1,
          }))}
          />

    </>
  )
}
