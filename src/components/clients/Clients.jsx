import { Box, Card, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import Swiper from 'swiper'
import { SwiperSlide, useSwiper } from 'swiper/react'

export default function Clients() {
  const { t, i18n } = useTranslation();
  const swiper = useSwiper();

  return (
     
        <Box component={'section'} pb={5}>
          Clients
           <Card>
            <CardMedia image=''></CardMedia>
           </Card>
        </Box>    
    
  )
}
