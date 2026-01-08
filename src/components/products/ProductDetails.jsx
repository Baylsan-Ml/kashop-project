import useProductDetails from '../../hooks/useProductDetails'
import { Box, Button, Card, CardMedia, CircularProgress, Container, Grid, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const {id} = useParams();
  console.log(id);
  const {isLoading, isError, data}=useProductDetails(id);
  console.log(data);
  if(isLoading) return <CircularProgress />;
  if(isError) return <Typography>Error</Typography>;
  const product=data.response;
  console.log(product);

  return (
    <Container>
    <Box component={'section'} sx={{py:5}}>
      <Card sx={{p:3}}>
        <Grid sx={{display:'flex', alignItems:'center'}} container spacing={3}>
          <Grid size={{xs:12, md: 5}}>
            <CardMedia component={'img'}
            image={product.image}
            sx={{height:500, objectFit:'contain'}}
            >  
            </CardMedia>
          </Grid>

          <Grid size={{xs:12, md:7}} sx={{display:'flex', flexDirection:'column',gap:2 , alignItems:'flex-start'}}>
            <Typography component={'h1'} variant='h3'>{product.name}</Typography>
            <Typography component={'h3'} variant='span'>Price: {product.price}$</Typography>
            <Rating value={product.rate} readOnly></Rating>
            <Typography variant='span'>Available Quantity: {product.quantity}</Typography>
            <Button variant='contained' color='error'>Add To Cart</Button>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography>
            {product.description}
          </Typography>
        </Box>

      </Card>
    </Box>
    </Container>
  )
}
