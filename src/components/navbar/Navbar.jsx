import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import useAuthStore from '../../store/authStore';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';



export default function Navbar() {
 
  const { t, i18n } = useTranslation();
  const navigate=useNavigate();
  const token= useAuthStore((state)=>state.token);
  const logout=useAuthStore((state)=>state.logout);
  const user=useAuthStore((state)=>state.user);

  const toggleLanguage = () => {
    const newLang= i18n.language === 'ar'?'en':'ar'
    i18n.changeLanguage(newLang);
  }

  

  const handleLogout=()=>{
    logout();
    navigate('/login');
  }


  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
 

  return (
    <Box color='info' sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <AppBar position="static" sx={{ bgcolor: '#9dac71' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:'flex' }}>
            <Box color={'secondary'} sx={{display:'flex', flex: 1}}>
          <AdbIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap color= 'secondary' component="a" href="#app-bar-with-responsive-menu"
           sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none' }}>
            KA-Shop - {user?.name}
          </Typography>
          </Box>
          
            <Box  sx={{flex: 1, display: 'flex', justifyContent: 'center',gap: 3}}>
            <Link color='secondary' component={RouterLink} to='/home'  underline='none' 
            sx={{display:'flex', flexDirection:'column', alignItems:'center' ,}}>
            <HomeIcon title='Home' fontSize="large" /> {t("Home")}
            </Link>
            <Link component={RouterLink} to='/category' color='secondary' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <CategoryIcon fontSize="large" /> {t("Categories")}
            </Link>
            <Link component={RouterLink} to='/products' color='secondary' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Inventory2Icon fontSize="large" /> {t("Products")}
            </Link>
            {token&&
            <Link component={RouterLink} to='/cart' color='secondary' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <ShoppingCartIcon fontSize="large" /> {t("Cart")}
            </Link>
           }
            </Box>

            <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1,}}>
             {token ? 
             (
             <Button color="secondary" onClick={handleLogout} startIcon={<LogoutIcon />}>
              {t("Logout")}
             </Button>
            ) : (
             <>
              <Link component={RouterLink} to="/login" sx={{textDecoration:'none'}} color="secondary">
              {t("Login")}
               </Link>
                <Link component={RouterLink} to="/register" sx={{textDecoration:'none'}} color="secondary">
                {t("Register")}
                </Link>
               </>
               )
             }

             <Button color='secondary'
             onClick={toggleLanguage}
             >
              {/* {i18n.language=='ar' ? 'EN' : 'ع'} */}
              <TranslateIcon color='secondary' />
              
             </Button>
              <Tooltip title="Profile">
                 <IconButton sx={{ p: 0 }}>
                 <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                  </IconButton>
                 </Tooltip>
                </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
