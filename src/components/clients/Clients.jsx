import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Badge, Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';





export default function Features() {
   const { t } = useTranslation();
    const clientsImages = [ ];

  return (
        <Box component={'section'} sx={{textAlign:'center'}} py={5}>
                {/* <Typography color='primary' pb={3}
                sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', textShadow: '2px 2px 2px rgba(56, 31, 18, 0.3)'}} 
                >
                  {t("Trusted by our Customers and Partners")}
                </Typography>
              */}
        </Box>    

   
  )
}
