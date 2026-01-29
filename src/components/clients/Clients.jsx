
import {
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import denim from "../../assets/imgs/denim.jpg";
import asus from "../../assets/imgs/asus.jpg";
import nike from "../../assets/imgs/nike.jpg";
import casio from "../../assets/imgs/casio.jpg";
import beautyofJoeson from "../../assets/imgs/beautyofJoeson.jpg";



export default function Clients() {

  const clientsImages = [
    denim,
    asus,
    nike,
    casio,
    beautyofJoeson,
    denim,
    asus,
    nike,
    casio,
    beautyofJoeson,
    denim,
    asus,
    nike,
    casio,
    beautyofJoeson,
  ];
  const { t, i18n } = useTranslation();

  return (
    <Box component={"section"} sx={{ py: 5, borderRadius: "10px" }}>
      <Typography
        color="primary"
        pb={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          fontSize: { xs: "22px", sm: "30px", md: "35px" },
          fontStyle:'italic',
          textShadow: "1px 1px 1px rgba(56, 31, 18, 0.3)",
        }}
      >
        {t("Trusted By Our Clients.")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          py: 1,
          "&::-webkit-scrollbar": {
            height: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "primary.main",
            borderRadius: "10px",
          },
        }}
      >
        {clientsImages.map((img, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              height: "80px",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: 0,
              px: 0,
            }}
          >
            <Box
              component="img"
              src={img}
              alt="client logo"
              sx={{
                height: "100%", 
                width: "auto", 
                display: "block",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
