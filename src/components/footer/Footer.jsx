import { Box, Button, Card, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import useAuthStore from '../../store/authStore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
      const user=useAuthStore((state)=>state.user);
      const { t, i18n } = useTranslation();
  return (
   
    <Box component={'footer'} mt='5'  elevation={0}
    sx={{background: 'radial-gradient(circle,rgba(227, 135, 146, 1) 15%, rgba(144, 64, 70, 1) 40%, rgba(78, 9, 10, 1) 60%, rgba(78, 9, 10, 1) 86%);',
       minHeight: '30vh', py: 7, color:'#eaebe5'
     }}>
    <Grid container sx={{textAlign:'center', display:'flex', justifyContent:'center'}}>
       <Container maxWidth="xl" sx={{display:'flex', justifyContent:'space-between'}}>
      <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center', display:'flex', flexDirection:'column', gap:2}}>
     <Typography variant="h6" noWrap color= 'secondary' component="a" href="#app-bar-with-responsive-menu"
           sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none' }}>
            KA-Shop - {user?.name}
          </Typography>
          <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
            <Typography component={'address'} variant='h6'
            sx={{display:'flex', justifyContent:'center'}}
            >{t("Tokyo's Beika Ward")}</Typography>
            <Typography sx={{display:'flex', justifyContent:'center'}} >0011881188</Typography>
            <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" color="secondary" focused 
            sx={{display:'flex', justifyContent:'center'}} />
            <Box sx={{display:'flex', gap:2, justifyContent:'center' }}>
              <InstagramIcon  fontSize="large"/>
              <FacebookIcon  fontSize="large"/>
              <WhatsAppIcon  fontSize="large"/>
              <TwitterIcon  fontSize="large"/>
              <YouTubeIcon  fontSize="large"/>
            </Box>
          </Box>
           
</Grid>
{/* <Divider orientation="vertical" flexItem fullWidth /> */}
      <Grid size={{xs:12, sm:6 , md:4, lg:6}} sx={{textAlign:'center'}}>
 <Typography variant="h6" noWrap color= 'secondary' 
           sx={{  fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none', pb:2 }}>
            {t("Support")}
          </Typography>
            <Grid container sx={{display:'flex', justifyContent:'center'}}>
          <Grid size={{xs:12, sm:6 , md:4, lg:3}}>
            <Typography sx={{fontSize:'19px', pb:2}}>{t("Information")}</Typography>
            <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
            <Typography sx={{fontSize:'13px'}}>{t("Privicy Policy")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Customer Services")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Shipping & Return")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Terms & Conditions")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Refud Policy")}</Typography>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid size={{xs:12, sm:6 , md:4, lg:3}}>
            <Typography sx={{fontSize:'19px', pb:2}}>{t("Support")}</Typography>
            <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
            <Typography sx={{fontSize:'13px'}}>{t("Privicy Policy")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Customer Services")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Shipping & Return")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Terms & Conditions")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Refud Policy")}</Typography>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid size={{xs:12, sm:6 , md:4, lg:3}}>
            <Typography sx={{fontSize:'19px', pb:2}}>{t("Contact Us")}</Typography>
            <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
            <Typography sx={{fontSize:'13px'}}>{t("About Us")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Contact Us")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("FAQ's")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Store Location")}</Typography>
            <Typography sx={{fontSize:'13px'}}>{t("Call Us")}</Typography>
            </Box>
          </Grid>
        </Grid>   
</Grid>

 <Grid size={{xs:12, sm:6 , md:4, lg:3}} 
 sx={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'flex-end', gap:2}}>
<Typography variant="h6" noWrap color= 'secondary' 
           sx={{fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none' }}>
                  {t("Subscribe to our newsletter")}
          </Typography>

          <Typography>
            {t("Get the latest updates on new products and upcoming sales")}
          </Typography>
   <TextField id="outlined-basic" label="" variant="outlined" fullWidth  multiline
      color="secondary" focused 
         rows={4} />
         <Button variant="outlined" color='secodary' sx={{width:'30%', borderRadius:'10px'}}  >Send</Button>
</Grid>
    </Container>
    </Grid>
     </Box>  
  )
}
