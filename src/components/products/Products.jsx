import { Box, Container, Grid, Card, Typography, Button, Link, TextField, CircularProgress, IconButton } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link as RouterLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useProducts } from '../../hooks/useProducts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StarIcon from '@mui/icons-material/Star';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
export default function Products() {

  
   const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
   const {username}=useContext(UserContext);
       const {isLoading, isError, data}= useProducts();
       const [filteredProducts, setFilteredProducts] = useState([]);
        useEffect(() => {
    const result = data.response.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search]);

       if(isLoading) return <CircularProgress/>
       if(isError) return <Typography>Error</Typography>
  
  return (
    <>
       <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} 
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                Products
                </Typography>
                <Typography sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px'}}>
                  Check out our products, don't forget to add your favorites to cart 
                  <InsertEmoticonIcon fontSize='large'/>
                </Typography>
                {/* Search products */}
                <Box sx={{display:'flex'}}>
                  <ManageSearchIcon />
                  <TextField id="outlined-basic" label="Search products..." variant="outlined"
                sx={{ mb: 3 }} value={search} onChange={(e)=>setSearch(e.target.value)}  />
                </Box>
                {/* Search products end */}
              <Container maxWidth='xl'>
              <Grid container sx={{}}>
                  {filteredProducts.map((product)=>
            <Grid item key={product.id} size={{sx:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
                   <Card sx={{backgroundColor:'#d2cabd',  cursor: 'pointer', width:'100%',}}>
                     <CardMedia  sx={{ height: 250,  }}
                    image={product.image} title="green iguana"/>
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Box sx={{display:'flex',}}>
          <Typography sx={{display:'flex', flexGrow:1}}>Price: {product.price}</Typography>
          <Typography sx={{display:'flex'}}>
            <StarIcon sx={{color:'gold'}}/>
            {product.rate}</Typography>  
        </Box> 
      </CardContent>
      <CardActions sx={{display:'flex', flexDirection:'column'}}>
        <Box sx={{display:'flex',p:'8px'}}>
           <Button size="small" sx={{color:'#767759', backgroundColor:'eaebe5', display:'flex', flexGrow:1}}>
            <AddShoppingCartIcon sx={{color:'#767759'}}/>
            Add to Cart</Button>
        <Button size="small" sx={{color:'#767759', display:'flex', flexGrow:1}}>
          <FavoriteBorderIcon />
          Favorite</Button>
        </Box>
        <Button fullWidth sx={{display:'flex', py:1,color:'#eaebe5', backgroundColor:'#767759', m:1}}>
          <StickyNote2Icon/>
           <Link component={RouterLink} to={`/productDetails/${product.id}`} color='inherit' underline='none' >
            Details</Link>
        </Button>
      </CardActions>
    </Card> 
  </Grid>
            )
            }
              </Grid>
              </Container>
          </Box>
            
    </>
  )
}
