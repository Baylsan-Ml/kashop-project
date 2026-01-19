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



export default function Products() {
   const [sort, setSort] = useState('');
   const [search, setSearch] = useState('');
   const [page, setPage]=useState(1);
   const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    setSort(event.target.value);
  }
       const {isLoading, isError, data}= useProducts();
       const [filteredProducts, setFilteredProducts] = useState([]);

        useEffect(() => {  
           if (!data) {
          setFilteredProducts([]); 
         return;
  }
    const result = data.response.data.filter(product =>
      product.name?.toLowerCase().includes(search.toLowerCase())
    );

     switch(sort) {
      case 'name-asc':
        result.sort((a, b) => a.name?.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name?.localeCompare(a.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(result);
  }, [search,sort, data]);

      const pageItems=[];
        pageItems.push(
              <Pagination key={pageItems.indexOf(pageItems)} count={10} onClick={()=> setPage(i)} sx={{display:'flex', justifyContent:'center'}}/>
        )
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
                  Check out our products, don't forget to add your favorites to cart 
                  <InsertEmoticonIcon fontSize='large'/>
                </Typography>
                {/* Search products */}
                <Container maxWidth={'xl'} sx={{display:'flex', justifyContent:'space-between' }}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 1, width: "50%" }}>
                    <ManageSearchIcon fontSize="large" fullWidth sx={{display:'flex', alignItems:'center', marginBottom:'auto'}} />
                   <TextField id="outlined-basic" label="Search products..." variant="outlined"
                sx={{ mb: 3, display:'flex', }} value={search} onChange={(e)=>setSearch(e.target.value)} />
                </Box>
               {/* Search products */}
             <FormControl sx={{display:'flex',width: "20%"}} >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={(e) => setSort(e.target.value)}>
          <MenuItem value=''>Sort By</MenuItem>
          <MenuItem value='name-asc'>Name A-Z</MenuItem>
          <MenuItem value='name-desc'>Name Z-A</MenuItem>
          <MenuItem value='price-asc'>Price Low-High</MenuItem>
          <MenuItem value='price-desc'>Price High-Low</MenuItem>
        </Select>
      </FormControl>
                </Container>
                {/* Sort */}
              <Container maxWidth='xl'>
              <Grid container sx={{}}>
                  {filteredProducts.map((product)=>
            <Grid  key={product.id} size={{sx:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
                   <Link component={RouterLink}  to={`/productDetails/${product.id}`} sx={{textDecoration:'none'}}>
                   <Card color='secondary' sx={{ cursor: 'pointer', width:'100%',  }}>
                     <CardMedia  sx={{height:'500px', objectFit:'contain', p:2}}
                     image={product.image} title="product image"  />
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Box sx={{display:'flex',}}>
          <Typography sx={{display:'flex', flexGrow:1}}>{t("Price")} : {product.price}$</Typography>
            <Rating sx={{color:'gold'}}/>
        </Box> 
      </CardContent>
      {/* <CardActions sx={{display:'flex', flexDirection:'column'}}>
        <Box sx={{display:'flex',p:'8px'}}>
           <Button size="small" sx={{color:'#767759', backgroundColor:'eaebe5', display:'flex', flexGrow:1}}>
            <AddShoppingCartIcon sx={{color:'#767759'}}/>
            Add to Cart</Button>
        <Button size="small" sx={{color:'#767759', display:'flex', flexGrow:1}}>
          <FavoriteBorderIcon />
          Favorite</Button>
        </Box>
      </CardActions> */}
    </Card> 
                   </Link>
  </Grid>
            )
            }
              </Grid>
              </Container>
              {/* Pagination */}
              {pageItems}
          </Box>       
    </>
  )
}
