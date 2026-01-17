import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Box, Button, Container } from '@mui/material';
import { EffectFade } from 'swiper/modules';
import img1 from '../../assets/imgs/img1.jpg'
import img3 from '../../assets/imgs/img3.jpg'
import img5 from '../../assets/imgs/img5.jpg'
import img6 from '../../assets/imgs/img6.jpg'



export default function Hero() {
    const swiper = useSwiper();
  return (
     
        <Box component={'section'} pb={5}>
            <Swiper modules={[EffectFade]} effect="fade"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <img src={img3} alt="Slide 1" style={{ width: '100%', height: '500px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="Slide 1" style={{ width: '100%', height: '500px' }} />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
      <Button onClick={()=> swiper.slideNext()}>next slide</Button>
    </Swiper>
        </Box>    
    
  )
}
