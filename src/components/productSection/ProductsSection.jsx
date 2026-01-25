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
  Button,
} from "@mui/material";
import Product from "./../product/Product.jsx";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts.js";
import { Link as RouterLink } from "react-router-dom";

export default function ProductsSection() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useProducts();
  const product = data?.response.data || [];
  console.log(product);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;
  return (
    <Box p={3} sx={{ textAlign: "center" }}>
      <Typography
        component={"h2"}
        variant="h4"
        m={3}
        color="error"
        sx={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)", fontSize: "60px" }}
      >
        {t("Products")}
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
        <InsertEmoticonIcon fontSize="large" />
      </Typography>

      <Container maxWidth="xl">
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {product.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{ p: 4 }}
            >
              <Link
                component={RouterLink}
                to={`/productDetails/${product.id}`}
                sx={{ textDecoration: "none" }}
              >
                <Card
                  color="secondary"
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    borderRadius: "25px",
                  }}
                >
                  {/* <CardMedia component={'img'}  sx={{height:'400px', objectFit:'unset' }}
                     image={product.image} title="product image"  /> */}
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
                {/* <Product/> */}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
