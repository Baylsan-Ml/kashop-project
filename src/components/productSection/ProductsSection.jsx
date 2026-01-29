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
    <Box p={3} sx={{}}>
      <Typography
        component={"h2"}
        variant="h4"
        m={3}
        color="info.main"
        sx={{
          textShadow: "2px 2px 2px rgba(0,0,0,0.3)",
          fontSize: { xs: "32px", sm: "42px", md: "56px" },
          textAlign:'center'
        }}
      >
        {t("Products")}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          color: "primary.main",
          fontSize: { xs: "12px", sm: "20px", md: "25px" },
          textShadow: "1px 1px 1px rgba(56, 31, 18, 0.3)",
        }}
      >
        {t(
          "Discover our unique collection of products designed to suit all your needs.",
        )}
        <InsertEmoticonIcon fontSize="large" />
      </Typography>

      <Container maxWidth="xl">
        <Grid container sx={{ display: "flex", justifyContent: "center", py:3}}>
          {product.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }}
              sx={{ }}
            >
              <Link
                component={RouterLink}
                to={`/productDetails/${product.id}`}
                sx={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    cursor: "pointer",
                    borderRadius: 3,
                    width:'90%',
                    height:'100%',
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
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
                        transform: "translate(-90%, -70%)",
                        opacity: 0,
                        transition: "all 0.4s ease",
                        zIndex: 2,
                        px: 2,
                        py: 1,
                        borderRadius: "10px",
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
                        objectFit: "unset",
                        transition: "all 0.3s ease",
                        height: "250px",
                      }}
                    />
                  </Box>
                  <CardContent sx={{}}>
                    <Typography gutterBottom variant="h5" component="div"
                    sx={{fontSize:{xs:'20px', md:'20px'}}}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ display: "flex", flexGrow: 1, fontSize:'13px' }}>
                        {t("Price")} : {product.price}$
                      </Typography>
                      <Rating
                        sx={{ color: "gold" }}
                        value={product.rate}
                        readOnly
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
                {/* <Product/> */}
              </Link>
            </Grid>
          ))}
        </Grid>

        <Link component={RouterLink} to={"/products"} sx={{display:'flex', justifyContent:'center'}}>
          <Button
            variant="contained"
            sx={{
              boxShadow: `0 1px 0 #fcc050, 0 5px 10px rgba(0,0,0,0.35)`,
              transform: "translateY(0)",
              transition: "all 0.2s ease",
              p: 1,
              fontSize: "12px",
              px: 3,
              py: 1,
              borderRadius: "10px",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 1px 0 #fcc050, 0 3px 20px #9a3b11`,
              },
            }}
          >
            {t("Show More")}
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
