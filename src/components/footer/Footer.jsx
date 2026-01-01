import { Box, Card, Container, Grid, Typography } from '@mui/material';
export default function Footer() {
  return (
   
    <Box component={'footer'} mt='5'  elevation={0}
    sx={{background:'linear-gradient(140deg,rgba(227, 135, 146, 1) 25%, rgba(78, 9, 10, 1) 65%)',
       minHeight: '30vh', py: 7,
       color:'#eaebe5'
     }}>
    <Grid container sx={{textAlign:'center'}}>
       <Container maxWidth="xl" sx={{display:'flex', justifyContent:'space-between'}}>
      <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
      <Typography component={'h4'}>KA- Shop </Typography>
</Grid>
      <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
Support
<Typography component={'br'}></Typography>
</Grid>
 <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
Contact Us</Grid>
    </Container>
      <Container maxWidth="xl" sx={{display:'flex', justifyContent:'space-between', mt:3}}>
      <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem ab voluptatum dolores dignissimos corporis magni. Atque, ratione. Quasi sint omnis dolor corporis voluptatum maxime laboriosam commodi, iure rerum sunt ipsam? Non ut, assumenda perspiciatis nisi perferendis consequatur quia tempora beatae, odio voluptas tenetur aliquid voluptatem id modi natus at.      
</Grid>
      <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempore neque hic, tenetur unde ad exercitationem assumenda fuga velit quas, magni atque iste illum saepe. Quaerat distinctio incidunt aut eos atque sint quo perferendis, tempora voluptatum laudantium quibusdam aliquid nostrum earum accusantium magni quis quod asperiores. Modi ipsa error explicabo.      
</Grid>
 <Grid size={{sx:12, sm:6 , md:4, lg:3}} sx={{textAlign:'center'}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempore neque hic, tenetur unde ad exercitationem assumenda fuga velit quas, magni atque iste illum saepe. Quaerat distinctio incidunt aut eos atque sint quo perferendis, tempora voluptatum laudantium quibusdam aliquid nostrum earum accusantium magni quis quod asperiores. Modi ipsa error explicabo.      
</Grid>
    </Container>
    </Grid>
     </Box>
      
  )
}
