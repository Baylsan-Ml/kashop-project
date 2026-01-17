import { Box, Container, Grid, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

export default function Features() {
  return (
    <Container sx={{py:5}}>
        <Grid container sx={{display:'flex'}}>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1}}>
                <RocketLaunchIcon sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5'>Fast Shipping</Typography>
                <Typography component={'h5'} variant='p'>Fast Shipping On All Order</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1}}>
                <ReplayCircleFilledIcon sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5'>Money Guarantee</Typography>
                <Typography component={'h5'} variant='p'>30 Day Money Back Guarantee</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1}}>
                <PeopleAltIcon sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5'>Online Support 24/7</Typography>
                <Typography component={'h5'} variant='p'>Technical Support 24/7</Typography>
                </Box>
            </Grid>
            <Grid size={{xs:12, sm:6 , md:4, lg:3}} sx={{display:'flex', gap:1}}>
                <LoyaltyIcon sx={{ fontSize: "40px" }}/>
                <Box>
                <Typography component={'h3'} variant='h5'>Member Discount</Typography>
                <Typography component={'h5'} variant='p'>Upto 40% Discount All Products</Typography>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}
