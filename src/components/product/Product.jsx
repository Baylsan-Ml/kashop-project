import { Box, Container, Grid, Card, Typography, Button, Link, TextField, CircularProgress, IconButton, Rating } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link as RouterLink} from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useTranslation } from 'react-i18next';

export default function ProductsSection() {
    const { t, i18n } = useTranslation();
    const {isLoading, isError, data}= useProducts();
    const prod=data?.response.data || [];
    console.log(prod);

  return (
     <> 
              <Container maxWidth='xl'>
              <Grid container sx={{}}>
                  {prod.map((product)=>
            <Grid  key={product.id} size={{xs:12, sm:6 , md:4, lg:3}} sx={{p:4}}>
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
    </Card> 
                   </Link>
  </Grid>
            )
            }
              </Grid>
              </Container>
    </>
  )
}
