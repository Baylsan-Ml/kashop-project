import { Box, Button, Card, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import useAuthStore from '../../store/authStore';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


export default function Footer() {
      const user=useAuthStore((state)=>state.user);
      const { t, i18n } = useTranslation();
  return (
  
    <Box 
      component={'footer'} 
      elevation={0} 
      // bgcolor={'info.main'}
      sx={{ 
       
        py: 5, 
        color: '#eaebe5', 
        overflowX: 'hidden',
        background: 'radial-gradient(circle,rgba(10, 23, 29, 1) 0%, rgba(10, 23, 29, 1) 20%, rgba(202, 151, 96, 1) 50%, rgba(8, 20, 26, 1) 84%, rgba(10, 23, 29, 1) 99%);'
        // 'radial-gradient(circle,rgba(10, 23, 29, 1) 0%, rgba(89, 70, 47, 1) 30%, rgba(202, 151, 96, 1) 43%, rgba(255, 189, 119, 1) 52%, rgba(175, 132, 84, 1) 61%, rgba(89, 70, 47, 1) 70%, rgba(10, 23, 29, 1) 99%);'
        //  'radial-gradient(circle,rgba(54, 54, 54, 1) 14%, rgba(106, 65, 46, 1) 32%, rgba(154, 59, 17, 1) 50%, rgba(115, 64, 41, 1) 67%, rgba(69, 69, 69, 1) 89%);'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid size={{ xs: 12, md: 4, lg: 3 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {/* <AutoAwesomeIcon
              color="secondary"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontStyle:'oblique',
                transform: i18n.language === "ar" ? 
                "scaleX(-1)" : "none",
                transition: "transform 0.1s ease",
              }}
            /> */}
            <Typography
              variant="h6"
              noWrap
              color="secondary"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                 fontFamily: "Lugrasimo", 
                fontWeight: 900,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}>
              Helix
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography component={'address'} variant='h6' sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {t("Tokyo's Beika Ward")}
              </Typography>
              <Typography sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                0011881188
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mt: 1 }}>
                <InstagramIcon fontSize="large" />
                <FacebookIcon fontSize="large" />
                <WhatsAppIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <YouTubeIcon fontSize="large" />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5, lg: 6 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12 }} sx={{textAlign: 'center', mb: 2}}>
                 <Typography variant="h6" color='secondary' sx={{ fontWeight: 700, letterSpacing: '.3rem' }}>
                    {t("Support")}
                 </Typography>
              </Grid>

              {/* Information Column */}
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '19px', pb: 2 }}>{t("Information")}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography sx={{ fontSize: '13px' }}>{t("Privacy Policy")}</Typography>
                        <Typography sx={{ fontSize: '13px' }}>{t("Customer Services")}</Typography>
                    </Box>
                </Box>
              </Grid>
              {/* Support Column */}
              <Grid size={{ xs: 12, sm: 4 }}>
                 <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '19px', pb: 2 }}>{t("Support")}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography sx={{ fontSize: '13px' }}>{t("Shipping & Return")}</Typography>
                        <Typography sx={{ fontSize: '13px' }}>{t("Terms & Conditions")}</Typography>
                    </Box>
                 </Box>
              </Grid>

              {/* Contact Column */}
              <Grid size={{ xs: 12, sm: 4 }}>
                 <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '19px', pb: 2 }}>{t("Contact Us")}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography sx={{ fontSize: '13px' }}>{t("About Us")}</Typography>
                        <Typography sx={{ fontSize: '13px' }}>{t("FAQ's")}</Typography>
                    </Box>
                 </Box>
              </Grid>

            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} 
          sx={{textAlign: { xs: 'center', md: 'right' }, display: 'flex', flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' }, gap: 2}}>
            <Typography variant="h6" color='secondary' 
            sx={{fontWeight: 700,  letterSpacing: '.1rem', fontSize: { xs: '16px', md: '18px' } }}>
              {t("Subscribe to newsletter")}
            </Typography>
            
            <Typography variant="body2" sx={{maxWidth: '300px'}}>
              {t("Get the latest updates...")}
            </Typography>
            
            <TextField  label={t("Enter Your Email")}  variant="outlined"  fullWidth size="small" 
                sx={{ maxWidth: 350, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
                color="secondary"  focused />
            <Button component={NavLink} to='/register' variant="outlined" color='secondary'
                sx={{ width: { xs: '30%', md: 'auto' }, minWidth: '100px', borderRadius: '10px' }}>
                {t("Send")}
            </Button>
          </Grid>

        </Grid>
      </Container>
    </Box>

   

  )
}
