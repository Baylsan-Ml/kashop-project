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
          <Typography sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px'}}>
                  {t("Trusted by our Customers and Partners")}
                
                </Typography>
           <Card>
            <CardMedia image=''></CardMedia>
           </Card>
        </Box>    
    
  )
}
