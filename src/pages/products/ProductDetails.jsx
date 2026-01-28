import useProductDetails from "../../hooks/useProductDetails";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useAddToCart from "../../hooks/useAddToCart";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import useAddReview from "../../hooks/useAddReview";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useAuthStore from "../../store/authStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ProductDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isLoading, isError, data } = useProductDetails(id);
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const { mutate: addReview, isPending: isAddingReview } = useAddReview();

  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

   const token= useAuthStore((state) => (state.token));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  const product = data.response;
  const reviews = product.reviews;

  return (
    <Container>
      <Box component={"section"} sx={{ py: 5 }}>
        <Card sx={{ p: 3,  }}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            container
            spacing={3}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <CardMedia
                component={"img"}
                image={product.image}
                sx={{ height: 500, objectFit: "contain", borderRadius: "15px" }}
              ></CardMedia>
            </Grid>

            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              <Typography component={"h1"} variant="h3"
              sx={{fontSize: { xs: "32px", sm: "42px", md: "56px" },}}
              >
                {product.name}
              </Typography>
              <Typography component={"h3"} variant="span">
                {t("Price")}: {product.price}$
              </Typography>
              <Rating value={product.rate} readOnly></Rating>
              <Typography variant="span">
                {t("Available Quantity")}: {product.quantity}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart({ ProductId: product.id, Count: 1 })}
                disabled={isAddingToCart}
                sx={{ 
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,
                  },
                }}
              >
                {t("Add To Cart")}
              </Button>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Typography>{product.description}</Typography>
          </Box>
        </Card>

        <Box component={"section"} sx={{ textAlign: "center" }} py={5}>
          <Typography
            component={"h2"}
            variant="h4"
            m={3}
            color="info.main"
            sx={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)",
              fontSize: { xs: "32px", sm: "42px", md: "56px" },
             }}
          >
            {t("Reviews")}
          </Typography>
          <Typography
            color="primary"
            pb={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: "12px", sm: "20px", md: "25px" },
              textShadow: "2px 2px 2px rgba(56, 31, 18, 0.3)",
            }}
          >
            {t("See What Our Customers Said About This Product..")}
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              py: 3,
            }}
          >
           <Button
              size="small"
              variant="contained"
              onClick={handleOpen}
              disabled={!token}
              sx={{
                py: 1,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,
                },
              }}
            >
              {t("Add Review")}
            </Button>
           

            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
                  {t("Add Review")}
                </Typography>
                <Typography sx={{ display: "flex", fontSize: "19px" }}>
                  Rate:
                  <Rating
                    sx={{ mb: 2 }}
                    value={userRating}
                    onChange={(e) => setUserRating(e.target.value)}
                  />
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label={t("Add Your Comment")}
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    my: 2,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,
                    },
                  }}
                  disabled={!userRating || !userComment || isAddingReview}
                  onClick={() => {
                    addReview({
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
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              600: { slidesPerView: 2, spaceBetween: 15 },
              900: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  height: "350px",
                  alignItems: "center",
                }}
              >
                <Card
                  sx={{
                    height: "270px",
                    width:'100%',
                    display: "flex",
                    alignItems: "center",
                    border: 1,
                    borderColor: "primary.main",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 1px 0 #fcc050, 0 5px 10px #ffbd77`,
                    },
                  }}
                >
                  <CardContent sx={{ height: "auto", width:'100%' }}>
                    <Typography
                      gutterBottom
                      sx={{ color: "primary.main", fontSize: 14 }}
                    >
                      {review.userName}
                    </Typography>
                    <Rating value={review.rating} readOnly />
                    <Stack
                      variant="body2"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                        fontSize:'0.85rem'
                      }}
                    >
                      {review.comment}
                      <Divider flexItem />
                      <Typography sx={{ color: "text.secondary", mb: 1.5, fontSize:'0.8rem'}}>
                        {review.createdAt}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
}
