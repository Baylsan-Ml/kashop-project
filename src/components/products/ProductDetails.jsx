import useProductDetails from '../../hooks/useProductDetails'
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Divider, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import useAddReview from '../../hooks/useAddReview';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ProductDetails() {
  const {id} = useParams();
 const { t } = useTranslation();
  const { isLoading, isError, data } = useProductDetails(id);
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const { mutate: addReview, isPending: isAddingReview } = useAddReview();

  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  const product = data.response;
  const reviews = product.reviews;
  

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
            <Typography component={'h3'} variant='span'>{t("Price")}: {product.price}$</Typography>
            <Rating value={product.rate} readOnly></Rating>
            <Typography variant='span'>{t("Available Quantity")}: {product.quantity}</Typography>
            <Button variant='contained' color='primary' 
            onClick={()=>addToCart({ProductId:product.id, Count:1})}
            disabled={isAddingToCart}
            >{t("Add To Cart")}</Button>
          </Grid>

         

        </Grid>

        <Box mt={3}>
          <Typography>
            {product.description}
          </Typography>
        </Box>

        

      </Card>

      <Box  component={'section'} sx={{py:5, textAlign:'center'}}>
         <Typography component={'h2'} variant='h3' sx={{textAlign:'center'}}>{t("Reviews")}</Typography>
       <Grid container component={'section'} sx={{py:5, textAlign:'center', display:'flex',justifyContent:'center', gap:3}}> 
       {/* <Swiper sx={{}}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > */}
            {reviews.map((review)=>
      //  <SwiperSlide>
             <Grid  key={review.userName} size={{xs:12, sm:6 , md:5, xl:4}} 
             sx={{ display:'flex', flexDirection:'column', gap:3}}> 
               <Card  sx={{display:'flex', flexDirection:'column', justifyContent:'center',
               borderRadius:'20px', height:'300px',
               }}>
              <CardContent 
              sx={{width:'100%', height:'auot',
              display:'flex', flexDirection:'column',alignItems:'center', gap:2}}>
             <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                 {review.userName}
             </Typography>
             <Rating value={review.rating} readOnly/>
      <Stack variant="body2" 
      sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:3}}
      >
        {review.comment}
        <Divider  flexItem />
       <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{review.createdAt}</Typography>
      </Stack>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
      <Button size="small" variant='contained' onClick={handleOpen}        
      sx={{py:1}}>{t("Add Review")}</Button>
   
       <Modal open={open} onClose={handleClose}>
        <Box sx={style}>

          <Typography variant="h6" mb={2} sx={{textAlign:'center'}}>
           {t("Add Review")}
          </Typography>
          <Typography sx={{display:'flex', fontSize:'19px'}}>Rate: 
            <Rating sx={{ mb: 2 }} value={userRating} 
          onChange={(e) => setUserRating(e.target.value)} />
          </Typography>
          
          <TextField fullWidth multiline rows={3} label={t("Add Your Comment")}
          value={userComment}
          onChange={(e)=>setUserComment(e.target.value)}
          />
           <Button fullWidth variant="contained" sx={{my:2}}
           disabled={!userRating || !userComment || isAddingReview}
          onClick={() => {addReview({
          rating: userRating,
          comment: userComment,
          productId: id,
        });
      }}
    >
      {t("Add")}
    </Button>
        </Box>
        
      </Modal>
     
    </CardActions>
  </Card>
                </Grid>
                // </SwiperSlide>
 
           
            )}
                          
         {/* </Swiper> */}
      </Grid>
      </Box> 
    </Box>


      
    </Container>
  )
}
