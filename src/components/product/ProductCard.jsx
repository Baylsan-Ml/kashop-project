import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <Link
      component={RouterLink}
      to={`/productDetails/${product.id}`}
      sx={{ textDecoration: "none" }}
    >
      <Card sx={{ cursor: "pointer", borderRadius: "25px" }}>
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
            title={product.name}
            sx={{
              height: "300px",
              objectFit: "unset",
              transition: "all 0.3s ease",
            }}
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ flexGrow: 1 }}>
              {t("Price")} : {product.price}$
            </Typography>
            <Rating sx={{ color: "gold" }} value={product.rate} readOnly />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
