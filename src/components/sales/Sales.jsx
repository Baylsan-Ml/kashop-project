import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import img1 from '../../assets/imgs/img1.jpg'


export default function Sales() {
   const { t, i18n } = useTranslation();
  return (
    <Container>
        <Box component={'section'} sx={{textAlign:'center'}} py={5}>
           <Typography component={'h2'} variant='h4' m={3} color='tertiary'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t("Sales")}
                </Typography>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={img1} alt="Slide 1" style={{ width: '100%', height: '500px' }} />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
        </Box>    
    </Container>
   
  )
}
