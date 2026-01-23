import { Box, Container, Grid, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const {t}= useTranslation();
  return (
    // <Container sx={{py:5}}>
        <Grid container py={5} sx={{display:'flex', justifyContent:'center'}}>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1, justifyContent:'center'}}>
                <RocketLaunchIcon color='success' sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5' color='success'>{t("Fast Shipping")}</Typography>
                <Typography component={'h5'} variant='p' color='success'>{t("Fast Shipping On All Order")}</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1, justifyContent:'center'}}>
                <ReplayCircleFilledIcon color='success' sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5' color='success'>{t("Money Guarantee")}</Typography>
                <Typography component={'h5'} variant='p' color='success'>{t("30 Day Money Back Guarantee")}</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1, justifyContent:'center'}}>
                <PeopleAltIcon color='success' sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5' color='success'>{t("Online Support 24/7")}</Typography>
                <Typography component={'h5'} variant='p' color='success'>{t("Technical Support 24/7")}</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1, justifyContent:'center'}}>
                <LoyaltyIcon  color='success' sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5' color='success'>{t("Member Discount")}</Typography>
                <Typography component={'h5'} variant='p' color='success'>{t("Upto 40% Discount All Products")}</Typography>
                </Box>
            </Grid>
        </Grid>
    // </Container>
  )
}
