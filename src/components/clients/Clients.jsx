import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Badge, Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import hero from "../../assets/imgs/hero.jpg";
import heroo from "../../assets/imgs/heroo.jpg";
import hero1 from "../../assets/imgs/hero1.jpg";
import hero4 from "../../assets/imgs/hero4.jpg";
import hero5 from "../../assets/imgs/hero5.jpg";
import img8 from "../../assets/imgs/img8.jpg";
import hero6 from "../../assets/imgs/hero6.jpg";
import hero7 from "../../assets/imgs/hero7.jpg";
import hero8 from "../../assets/imgs/hero8.jpg";
import hero9 from "../../assets/imgs/hero9.jpg";
import hero11 from "../../assets/imgs/hero11.jpg";
import hero2 from "../../assets/imgs/hero2.jpg";

import {
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Clients() {
    const clientsImages = [ ];
    const swiper = useSwiper();
  const heroImgs = [
    hero,
    heroo,
    hero1,
    hero2,
    hero6,
    hero8,
    hero4,
    hero5,
    img8,
    hero7,
    hero9,
    hero11,
  ];
  const { t, i18n } = useTranslation();

  return (
        <Box component={'section'} sx={{textAlign:'center'}} py={5}>
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
        </Box>    

   
  )
}
