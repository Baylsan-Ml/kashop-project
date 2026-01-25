import React from "react";
import useProductByCategory from "../../hooks/useProductByCategory";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Link,
  Rating,
  Typography,
  Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

export default function ProductByCategory() {
  const { id } = useParams();
  // console.log(id);
  const { isLoading, isError, data: products } = useProductByCategory(id);
  // console.log(products);
  const { data: categories } = useCategories();
  // console.log(categories);
  const category = categories?.response?.find((cat) => cat.id == id);

  const { t, i18n } = useTranslation();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  return (
    <Container sx={{ minHeight: "70%" }}>
      <Box p={3} sx={{ textAlign: "center" }}>
        <Typography
          component={"h2"}
          variant="h4"
          m={3}
          color="success"
          sx={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)", fontSize: "60px" }}
        >
          {category.name}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            fontSize: "30px",
            color: "primary.main",
          }}
        >
          {t(
            "Discover our unique collection of products designed to suit all your needs.",
          )}
        </Typography>

        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {products.response.map((product) => (
            <Grid
              key={product.id}
              size={{ sx: 12, sm: 6, md: 4, lg: 4 }}
              sx={{ p: 4 }}
            >
              <Link
                component={RouterLink}
                to={`/productDetails/${product.id}`}
                sx={{ textDecoration: "none" }}
              >
                <Card sx={{ cursor: "pointer", borderRadius: "25px" }}>
                  {/* <CardMedia component="img"  sx={{maxHeight:'400px', objectFit:'unset', }}
                                     image={product.image} title="product image" /> */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      "&:hover img": {
                        filter: "brightness(0.5)",
                        transform: "scale(1.05)",
                      },
                      "&:hover .details-btn": {
                        opacity: 1,
                        transform: "translate(-50%, -50%)",
                      },
                    }}
                  >
                    <Button
                      className="details-btn"
                      variant="contained"
                      color="primary"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        zIndex: 2,
                        px: 4,
                        py: 1,
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {t("Details")}
                    </Button>

                    <CardMedia
                      component="img"
                      image={product.image}
                      title="product image"
                      sx={{
                        height: "400px",
                        objectFit: "unset",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ display: "flex", flexGrow: 1 }}>
                        {t("Price")} : {product.price}$
                      </Typography>
                      <Rating
                        sx={{ color: "gold" }}
                        value={product.rate}
                        readOnly
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
