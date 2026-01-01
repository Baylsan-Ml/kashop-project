 import {Box, Container, Grid, Card, CardMedia, Typography, IconButton, Button, Divider} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useProducts } from "../../hooks/useProducts";

export default function Cart() {
  const {isLoading, isError, data}= useProducts();
  return (
    <Container maxWidth="xl" sx={{ mt: 5, }}>
      <Typography variant="h4" mb={4} fontWeight="bold" sx={{display:'flex', gap:1}}>
        Shopping Cart 
        <ShoppingCartCheckoutIcon fontSize="large" fontWeight="bold" />
      </Typography>

      <Grid container spacing={4}>
        <Grid item size={{sx:12, sm:6 , md:4, lg:3}}>
            <Card sx={{ display: "flex", mb: 3, p: 2, alignItems: "center" }} >
              <CardMedia component="img"
                image=""
                sx={{ width: 120, borderRadius: 2 }}/>

              <Box sx={{ flex: 1, ml: 3 }}>
                <Typography variant="h6">Product Name</Typography>
                <Typography color="text.secondary">Price</Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton size="small">
                    <RemoveIcon />
                  </IconButton>

                  <Typography mx={2}>1</Typography>

                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
              <IconButton color="error">
                <DeleteOutlineIcon />
              </IconButton>
            </Card>
          
        </Grid>
         <Grid item size={{sx:12, sm:6 , md:4, lg:3}}>
            <Card sx={{ display: "flex", mb: 3, p: 2, alignItems: "center" }} >
              <CardMedia component="img"
                image=""
                sx={{ width: 120, borderRadius: 2 }}/>

              <Box sx={{ flex: 1, ml: 3 }}>
                <Typography variant="h6">Product Name</Typography>
                <Typography color="text.secondary">Price</Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton size="small">
                    <RemoveIcon />
                  </IconButton>

                  <Typography mx={2}>1</Typography>

                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
              <IconButton color="error">
                <DeleteOutlineIcon />
              </IconButton>
            </Card>
          
        </Grid>

        
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Order Summary
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>price</Typography>
              <Typography>90</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Shipping</Typography>
              <Typography>10</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography fontWeight="bold">Total Price</Typography>
              <Typography fontWeight="bold">100</Typography>
            </Box>

            <Button fullWidth size="large"
             sx={{backgroundColor: "#e38792", color: "#fff","&:hover": { backgroundColor: "#d26f7b" }
              }}>
              Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>

  );
}
