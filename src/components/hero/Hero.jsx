import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Box, Button, Container } from '@mui/material';
import { EffectFade } from 'swiper/modules';
import hero from '../../assets/imgs/hero.jpg'
import hero4 from '../../assets/imgs/hero4.jpg'
import img8 from '../../assets/imgs/img8.jpg'
import img22 from '../../assets/imgs/img22.jpg'
import hero6 from '../../assets/imgs/hero6.jpg'
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export default function Hero() {
    const swiper = useSwiper();
  return (
     
        <Box component={'section'} pb={5}>
            <Swiper
          modules={[EffectFade, Autoplay,Pagination, A11y, Navigation]}
          effect="fade"
          autoplay={{ delay: 5000 }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      <SwiperSlide>
       <img src={hero} alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero6} alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero4} alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img8} alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img22} alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
      </SwiperSlide>
      
    </Swiper>
        </Box>    
    
  )
}
