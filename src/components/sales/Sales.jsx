import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Container } from '@mui/material';

export default function Sales() {
  return (
    <Container>
        <Box component={'section'} py={5}>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
        </Box>    
    </Container>
   
  )
}
