import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Badge, Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import sales from '../../assets/imgs/sales.jpg'
import sale2 from '../../assets/imgs/sale2.jpg'
import sale3 from '../../assets/imgs/sale3.jpg'
import sale4 from '../../assets/imgs/sale4.jpg'
import sale5 from '../../assets/imgs/sale5.jpg'
import sale6 from '../../assets/imgs/sale6.jpg'


export default function Sales() {
   const { t, i18n } = useTranslation();
    const saleImages = [sale3, sale6, sales, sale5, sale4];

  return (
        <Box component={'section'} sx={{textAlign:'center'}} py={5}>
           <Typography component={'h2'} variant='h4' m={3} color='error.main'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t("Sales")}
                </Typography>
                <Typography color='primary' pb={3}
                sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', textShadow: '2px 2px 2px rgba(56, 31, 18, 0.3)'}} 
                >
                  {t("Explore special discounts made just for you.")}
                </Typography>
                <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 15 },
          900: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {saleImages.map((img, index) => (
          <SwiperSlide key={index} style={{ position: 'relative' }}>
            <Badge badgeContent="30% OFF"  color="primary"
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              sx={{"& .MuiBadge-badge": { fontSize: { xs: 12, md: 16 }, height: { xs: 40, md: 60 }, minWidth: { xs: 80, md: 100 },
                  borderRadius: '30%', boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                  position: 'absolute', top: { xs: 15, md: 30 },right: { xs: 20, md: 50 },}
              }}
            >
              <img src={img} alt="Sale"
                style={{ width: '100%', height: '500px', maxHeight: '500px', borderRadius: '10%',  objectFit: 'cover',}}
              />
            </Badge>
          </SwiperSlide>
        ))}
      </Swiper>
    
        </Box>    

   
  )
}
