import React, { useState } from "react";
import useCart from "../../../hooks/useCart";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useCheckout from "../../../hooks/useCheckout";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const {
    mutate: checkout,
    isPending: isCheckoutPending,
    isError: isCheckotError,
  } = useCheckout();
  const handleCheckout = () => {
    checkout({ paymentMethod });
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  return (
    // <Container component='section' sx={{display:'flex', justifyContent:'center' }}>
    <Grid container component="section">
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <Typography
          component={"h2"}
          variant="h4"
          m={3}
          color="primary.main"
          sx={{
            textShadow: "2px 2px 2px rgba(0,0,0,0.3)",
            fontSize: "60px",
            textAlign: "center",
          }}
        >
          {t("Checkout")}
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 7, lg: 6 }}
        offset={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            minHeight: "70vh",
            m: 5,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderRadius: "5px",
          }}
        >
          <Typography
            component={"h2"}
            variant="h4"
            m={3}
            color="success.main"
            sx={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
          >
            {t("Order Summary")}
          </Typography>
          <TableContainer sx={{ mb: 3 }}>
            <Table sx={{}}>
              <TableHead>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }}>
                  {t("Product Name")}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }}>
                   {t("Price")}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }}>
                   {t("Quantity")}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "large" }}>
                   {t("Total")}
                </TableCell>
              </TableHead>

              <TableBody>
                {data.items.map((item) => (
                  <TableRow key={item.productId}>
                    <TableCell sx={{ fontSize: "17px" }}>
                      {item.productName}
                    </TableCell>
                    <TableCell sx={{ fontSize: "17px" }}>
                      {item.price}
                    </TableCell>
                    <TableCell sx={{ fontSize: "17px" }}>
                      {item.count}
                    </TableCell>
                    <TableCell sx={{ fontSize: "17px" }}>
                      {item.totalPrice}
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "large" }}
                  >
                    {t("Cart Total")}: {data.cartTotal}$
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl fullWidth sx={{ maxWidth: "30%" }}>
              <InputLabel id="payment-method">{t("Payment Method")}</InputLabel>
              <Select
                labelId="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                sx={{'&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,},}}
              >
                <MenuItem value={"cash"} sx={{ fontWeight: "bold" }}>
                  {t("Cash")}
                </MenuItem>
                <MenuItem value={"visa"} sx={{ fontWeight: "bold" }}>
                  {t("Visa")}
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{
                width: "30%",
                py: 2,
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "15px",
                '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,},
              }}
              onClick={handleCheckout}
            >
              {t("Pay Now")}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>

    // </Container>
  );
}
