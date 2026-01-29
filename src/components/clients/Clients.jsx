import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Badge, Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import denim from "../../assets/imgs/denim.jpg";
// import nike from "../../assets/imgs/nike.jpg";
// import casio from "../../assets/imgs/casio.jpg";
// import beatyofJoeson from "../../assets/imgs/beatyofJoeson.jpg";
// import asus from "../../assets/imgs/asus.jpg";


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
   
    const swiper = useSwiper();
  const clientsImages = [
    denim, 
    // nike,casio,beatyofJoeson,asus,
  ];
  const { t, i18n } = useTranslation();

  return (
        <Box component={'section'} sx={{textAlign:'center'}} >
                 <Box 
                //  sx={{ direction: "ltr" }}
                 >
           <Swiper
           key={i18n.language}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          // effect="coverflow"
          // grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 15 },
          900: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 2.5,
          //   slideShadows: false,
          // }}
          // autoplay={{ delay: 3000 }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          style={{  }}
        >
          {clientsImages.map((img, i) => (
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
