import useCart from "../../hooks/useCart";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useClearCart from "../../hooks/useClearCart";

export default function Cart() {
  const { data, isLoading, isError } = useCart();
  const { t } = useTranslation();
  const { mutate: removeItem, isPending: isRemovingItem } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isUpdatingItem } = useUpdateCartItem();
  const { mutate: clearCart, isPending: isClearing } = useClearCart();
  const navigate = useNavigate();
  const handleUpdate = (productId, action) => {
    const item = data.items.find((i) => i.productId == productId);
    if (action == "-") {
      if (item.count === 1) {
        removeItem(productId);
      }
      updateItem({ productId, count: item.count - 1 });
    } else {
      updateItem({ productId, count: item.count + 1 });
    }
  };
  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  return (
    <Container
      component="section"
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
        <TableContainer>
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
              <TableCell sx={{ fontWeight: "bold", fontSize: "large" }}>
                {t("Action")}
              </TableCell>
            </TableHead>

            <TableBody>
              {data.items.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell sx={{ fontSize: "17px", fontWeight: "bold" }}>
                    {item.productName}
                  </TableCell>
                  <TableCell sx={{ fontSize: "17px" }}>{item.price}</TableCell>
                  <TableCell sx={{ fontSize: "17px" }}>
                    <IconButton
                      onClick={() => handleUpdate(item.productId, "-")}
                    >
                      {" "}
                      <RemoveIcon sx={{ color: "primary.main", mr: 1 }} />
                    </IconButton>
                    {item.count}
                    <IconButton
                      onClick={() => handleUpdate(item.productId, "+")}
                    >
                      {" "}
                      <AddIcon sx={{ color: "primary.main", ml: 1 }} />{" "}
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ fontSize: "17px" }}>
                    {item.totalPrice}
                  </TableCell>
                  <TableCell sx={{ fontSize: "17px" }}>
                    <Button
                      sx={{
                        color: "#f2efe8",
                        borderRadius: "10px",
                        fontWidth: "bold",
                      }}
                      color="info"
                      variant="contained"
                      onClick={() => removeItem(item.productId)}
                      disabled={isRemovingItem}
                    >
                      {t("remove")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => clearCart()}
                    disabled={isClearing}
                    sx={{alignSelf: "flex-end", borderRadius: "10px", fontWeight: "bold",}}>
                    {t("Clear Cart")}
                  </Button>
                </TableCell>
                <TableCell
                  colSpan={5}
                  align="right"
                  sx={{ fontSize: "17px", fontWeight: "bold", pr: 11 }}
                >
                  {" "}
                  {t("Cart Total")}:{data.cartTotal}$
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 5,
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              color: "secondary.main",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            {t("Continue Shopping")}
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/checkout")}
            sx={{
              color: "secondary.main",
              bgcolor: "success.main",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            {t("Proceed to Checkout")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
