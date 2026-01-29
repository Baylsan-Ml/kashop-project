import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Button,
  Link,
  TextField,
  CircularProgress,
  IconButton,
  Rating,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ProductCard from "../../components/product/ProductCard.jsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAddToCart from "../../hooks/useAddToCart.js";

export default function Products() {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      categoryId: "",
      minPrice: "",
      maxPrice: "",
      page: 1,
      limit: 8,
      sortBy: null,
      order: null,
    },
  });
  const [activeFilters, setActiveFilters] = useState({
    page: 1,
    limit: 8,
  });
  const { isLoading, isError, data } = useProducts(activeFilters);
  const product = data?.response.data || [];
  //  console.log(product);

  const applyFilters = (values) => {
    let sortBy = "";
    let ascending = true;
    if (values.sort) {
      const [field, order] = values.sort.split("-");
      sortBy = field;
      ascending = order === "asc";
    }
    setActiveFilters({
      search: values.search || "",
      categoryId: values.categoryId || "",
      minPrice: values.minPrice || "",
      maxPrice: values.maxPrice || "",
      page: 1,
      limit: values.limit || 8,
      sortBy,
      ascending,
    });
  };

    const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  
  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  return (
    <>
      <Box p={3} sx={{ textAlign: "center" }}>
        <Typography
          component={"h2"}
          variant="h4"
          m={3}
          color="success"
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
          {/* <InsertEmoticonIcon fontSize="large" /> */}
        </Typography>
        {/* Search and Sort */}
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", pt: 3 }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component={"form"} onSubmit={handleSubmit(applyFilters)}>
              <TextField
                fullWidth
                size="small"
                label={t("Search products...")}
                {...register("search")}
                InputProps={{
                  startAdornment: <ManageSearchIcon sx={{ mr: 1 }} />,
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Box
              component={"form"}
              onSubmit={handleSubmit(applyFilters)}
              sx={{
                py: 3,
              }}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid size={{ xs: 4, md: 2, lg: 1.5 }}>
                  <FormControl fullWidth>
                    <TextField
                      {...register("categoryId")}
                      label={t("Category")}
                      size="small"
                    />
                  </FormControl>
                </Grid>

                {/* Sort */}
                <Grid size={{ xs: 4, md: 2, lg: 1.5 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{t("Sort By")}</InputLabel>
                    <Select {...register("sort")} label={t("Sort By")}>
                      <MenuItem value="">{t("None")}</MenuItem>
                      <MenuItem value="name-asc">{t("Name A → Z")}</MenuItem>
                      <MenuItem value="name-desc">{t("Name Z → A")}</MenuItem>
                      <MenuItem value="price-asc">
                        {t("Price Low → High")}
                      </MenuItem>
                      <MenuItem value="price-desc">
                        {t("Price High → Low")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* Min Price */}
                <Grid size={{ xs: 4, md: 2, lg: 1.5 }}>
                  <TextField
                    size="small"
                    label={t("Min Price")}
                    type="number"
                    {...register("minPrice")}
                    fullWidth
                  />
                </Grid>
                {/* Max Price */}
                <Grid size={{ xs: 4, md: 2, lg: 1.5 }}>
                  <TextField
                    size="small"
                    label={t("Max Price")}
                    type="number"
                    {...register("maxPrice")}
                    fullWidth
                  />
                </Grid>
                {/* Apply Button */}
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{ py: 1 }}
                  >
                    {t("Apply Filters")}
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Search and Sort */}

        <Container maxWidth="xl">
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            {product.map((product) => (
              <Grid
                key={product.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                sx={{ p: 4, display:'flex', justifyContent:'center'}}
              >
                <Link
                  component={RouterLink}
                  to={`/productDetails/${product.id}`}
                  sx={{ textDecoration: "none" }}
                >
                  <Card
                    color="secondary"
                    sx={{ cursor: "pointer", borderRadius: "10px", width:'100%', height:'100%'
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
                        "&:hover .cart-btn": {
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
                          borderRadius: "10px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        {t("Details")}
                      </Button>
                      {/* <Link component={RouterLink} to={'/cart'}> */}
                      <Button
                        className="cart-btn"
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart({ ProductId: product.id, Count: 1 })}
                        sx={{
                          position: "absolute",
                          top: "65%",
                          left: "50%",
                          transform: "translate(-50%, -60%)",
                          opacity: 0,
                          transition: "all 0.3s ease",
                          zIndex: 2,
                          // px: 2,
                          // py: 1,
                          borderRadius: "10px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        <ShoppingCartIcon/>
                      </Button>

                      {/* </Link> */}

                      <CardMedia
                        component="img"
                        image={product.image}
                        title="product image"
                        sx={{
                          height: "300px",
                          objectFit: "unset",
                          transition: "all 0.3s ease",
                        }}
                      />
                    </Box>
                    <CardContent>
                     
                        <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{fontSize: { xs: "10px", sm: "12px", md: "20px" },}}
                      >
                        {product.name}
                      </Typography>
                       {/* <LocalMallIcon
                          sx={{ fontSize: "1.2rem", color: "primary.main" }}
                        /> */}
                    
                      
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ display: "flex", flexGrow: 1, }}>
                          {t("Price")}: {product.price}$
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Pagination
        color="primary"
        sx={{ display: "flex", justifyContent: "center", my: 5 }}
        count={data?.response?.totalCount || 1}
        page={activeFilters.page}
        onChange={(e, page) =>
          setActiveFilters((prev) => ({
            ...prev,
            page: 1,
          }))
        }
      />
    </>
  );
}
