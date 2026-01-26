import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { EffectFade } from "swiper/modules";
import hero from "../../assets/imgs/hero.jpg";
import hero4 from "../../assets/imgs/hero4.jpg";
import img8 from "../../assets/imgs/img8.jpg";
import img22 from "../../assets/imgs/img22.jpg";
import hero6 from "../../assets/imgs/hero6.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Categories from "../categories/Categories";

export default function Hero() {
  const swiper = useSwiper();
  const heroImgs = [hero, hero6, hero4, img8, img22];
  const { t } = useTranslation();
  return (
    <>
    
    <Box
      component={"section"}
      pb={5}
      sx={{ height: { xs: "40vh", md: "60vh" }, position: "relative", borderRadius: 2,
        overflow: "hidden", }}
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, A11y, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {heroImgs.map((heroImg, i) => (
          <SwiperSlide key={i} style={{ borderRadius: "20%" }}>
            <Box
              component="img"
              src={heroImg}
              alt="hero slide"
              width={"100%"}
              sx={{
                
                objectFit: "contain",
                
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.23), rgba(0,0,0,0))",
          zIndex: 1,
          maxHeight: "70vh",
        }}
      />

      <Container
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "90%", sm: "70%", md: "500px" },
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            inset: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
             fontSize: { xs: "24px", sm: "32px", md: "42px" },
              fontWeight: "bold",
              background: "linear-gradient(to right, #ef660c, rgba(0,0,0,0))",
            }}
          >
            {t("Discover Your Style")}
          </Typography>

          <Typography
            sx={{
              my: 2,
              background: "linear-gradient(to right, #ef660c, rgba(0,0,0,0))",
            }}
          >
            {t("Unique products designed just for you")}
          </Typography>

          <Link component={RouterLink} to={"/products"}>
            <Button variant="contained" color="primary"
             sx={{ mt: 2 }}
            >
              {t("Shop Now")}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
   
    </>
  );
}
