import { Box, Typography } from '@mui/material'
import Product from './../product/Product.jsx'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useTranslation } from 'react-i18next';

export default function ProductsSection() {
    const { t, i18n } = useTranslation();
  return (
    <Box p={3} sx={{textAlign:'center'}}>
              <Typography component={'h2'} variant='h4' m={3} color='tertiary'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
                {t("Products")}
                </Typography>
                <Typography sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', color:'#e38792'}}>
                  Check out our products, don't forget to add your favorites to cart 
                  <InsertEmoticonIcon fontSize='large'/>
                </Typography>
   <Product/>

   </Box>
  )
}
