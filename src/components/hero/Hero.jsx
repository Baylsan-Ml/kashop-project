import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import {
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import hero from "../../assets/imgs/hero.jpg";
import hero1 from "../../assets/imgs/hero1.jpg";
import hero4 from "../../assets/imgs/hero4.jpg";
import hero5 from "../../assets/imgs/hero5.jpg";
import img8 from "../../assets/imgs/img8.jpg";
import hero8 from "../../assets/imgs/hero8.jpg";
import img33 from "../../assets/imgs/img33.jpg";
import hero6 from "../../assets/imgs/hero6.jpg";
import hero7 from "../../assets/imgs/hero7.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const swiper = useSwiper();
  const heroImgs = [
    hero,
    hero1,
    hero6,
    hero8,
    hero4,
    hero5,
    img8,
    img33,
    hero7,
  ];
  const { t, i18n } = useTranslation();
  return (
    <>
      <Container sx={{ py: 5, textAlign: i18n.language === "ar" ? "right" : "center"  }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          {t("EXPRESSIVE")}
        </Typography>
        <Typography variant="h4" sx={{ fontStyle: "italic", mb: 4 }}>
          {t("TIMELESS ELEGANT")}
        </Typography>

         <Box sx={{ direction: "ltr" }}>
           <Swiper
           key={i18n.language}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          style={{ paddingBottom: "50px" }}
        >
          {heroImgs.map((img, i) => (
            <SwiperSlide
              key={i}
              style={{
                width:'350px',
                height:'400px'
              }}
            >
              <Box
                component="img"
                src={img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
         </Box>
       
      </Container>
    </>
  );
}
