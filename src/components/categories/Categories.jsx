import { Box, Card, CircularProgress, Container, Grid, Typography, Link} from '@mui/material';
import { useCategories } from '../../hooks/useCategories';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink} from 'react-router-dom';

export default function Categories() {
  
    const {isLoading, isError, data}= useCategories();
    
     const { t, i18n } = useTranslation();
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography>Error</Typography>
  return (
    <>
        <Box p={3} sx={{textAlign:'center'}}>
        <Typography component={'h2'} variant='h4' color='error'
         m={3} sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', fontSize:'60px'}} >
          {t("Categories")}</Typography>
          <Typography color='primary'  sx={{display:'flex', justifyContent:'center', gap:1, fontSize:'30px', textShadow: '2px 2px 2px rgba(56, 31, 18, 0.3)'}}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo saepe, nobis obcaecati nesciunt labore.</Typography>
        <Container maxWidth='xl'>
        <Grid container sx={{textAlign:'center'}}>
            {data.response.map((category)=>
      <Grid  key={category.id} size={{xs:12, sm:6 , md:4, lg:3}} sx={{p:1, display:'flex', flexDirection:'column'}}>
        <Link component={RouterLink}  to={`/Products/category/${category.id}`} sx={{textDecoration:'none'}}>
         <Card  bgColor='info.main'
             sx={{p:1 ,cursor: 'pointer', width:'100%', fontWeight:'bold', bgcolor:'success.main', color:'secondary.main',
               borderRadius:'50%',boxShadow: 1,
               '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}
             }}>
              <Typography>{category.name}</Typography>
              
              </Card> 
        </Link>
            
            </Grid>
      )
      }
        </Grid>
        </Container>
    </Box> 
    </>
  )
}
