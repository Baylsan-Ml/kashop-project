import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
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
import useThemeStore from '../../store/useThemeStore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Navbar() {
 
  const { t, i18n } = useTranslation();
  const navigate=useNavigate();
  const token= useAuthStore((state)=>state.token);
  const logout=useAuthStore((state)=>state.logout);
  const user=useAuthStore((state)=>state.user);
  const{mode, toggleTheme} = useThemeStore();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const toggleLanguage = () => {
    const newLang= i18n.language === 'ar'?'en':'ar'
    i18n.changeLanguage(newLang);
  }
  const handleLogout=()=>{
    logout();
    navigate('/login');
  }
   const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box color='info' sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <AppBar position="static" color='primary'
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1.5, borderRadius:'5%',
             boxShadow: `0 6px 0 #fcc050, 0 10px 15px rgba(0,0,0,0.35)`, transform: 'translateY(0)', transition: 'all 0.2s ease',
             '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 8px 0 #fcc050, 0 14px 20px rgba(0,0,0,0.4)`,},
             '&:active': {transform: 'translateY(4px)', boxShadow: `0 2px 0 #fcc050, 0 4px 8px rgba(0,0,0,0.3)`,},}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:'flex' }}>
                  {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <AutoAwesomeIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,  }} />
            <CrueltyFreeIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,  }} />
          <Typography variant="h6" noWrap color= 'secondary' component="a" href="#app-bar-with-responsive-menu"
           sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none' }}>
            KA-Shop {user?.name && `- ${user.name}`}
          </Typography>
          </Box>
                 <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="secondary" onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>

            <Menu 
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}

               sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 8px 0 #b8a8fe, 0 14px 20px rgba(0,0,0,0.4)`,}, }}
            >
              <MenuItem component={RouterLink} to="/" onClick={handleCloseMenu} color="success"
              sx={{}}
              >
                <HomeIcon color="success" sx={{ mr: 1 , fontWeight:'bold'}} /> {t("Home")}
              </MenuItem>

              <MenuItem component={RouterLink} to="/category" onClick={handleCloseMenu} color="success">
                <CategoryIcon color="success" sx={{ mr: 1, fontWeight:'bold' }} /> {t("Categories")}
              </MenuItem>

              <MenuItem component={RouterLink} to="/products" onClick={handleCloseMenu} color="success">
                <Inventory2Icon color="success" sx={{ mr: 1, fontWeight:'bold' }} /> {t("Products")}
              </MenuItem>

              {token && (
                <MenuItem component={RouterLink} to="/cart" onClick={handleCloseMenu} color="tertiary">
                  <ShoppingCartIcon color="success" sx={{ mr: 1, fontWeight:'bold' }} /> {t("Cart")}
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              display: {xs: 'none', md: 'flex' },
              gap: 3,
              flex: 1,
              justifyContent: 'center',
              alignItems:'center'
            }}
          >

            {/* <Link component={RouterLink} to="/" color="secondary" underline="none"
             sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: '#79874f', borderRadius: '30%', p: 1.5,
             boxShadow: `0 6px 0 #5f6b3d, 0 10px 15px rgba(0,0,0,0.35)`, transform: 'translateY(0)', transition: 'all 0.2s ease',
             '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 8px 0 #5f6b3d, 0 14px 20px rgba(0,0,0,0.4)`,},
             '&:active': {transform: 'translateY(4px)', boxShadow: `0 2px 0 #5f6b3d, 0 4px 8px rgba(0,0,0,0.3)`,},}}>
              <HomeIcon />
               {t("Home")}
               </Link> */}


            <Link component={RouterLink} to="/" color="secondary" underline="none"  
            sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1, fontSize:'17px',
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}>
              <HomeIcon  /> {t("Home")}
            </Link>

            <Link component={RouterLink} to="/category" color="secondary" underline="none"
             sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px rgba(0,0,0,0.4)`,}, }}
            >
              <CategoryIcon /> {t("Categories")}
            </Link>

            <Link component={RouterLink} to="/products" color="secondary" underline="none" 
            sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px rgba(0,0,0,0.4)`,}, }}
            >
              <Inventory2Icon /> {t("Products")}
            </Link>

            {token && (
              <Link component={RouterLink} to="/cart" color="secondary" underline="none"
              sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px rgba(0,0,0,0.4)`,}, }}
              >
                <ShoppingCartIcon /> {t("Cart")}
              </Link>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            {token ? (
              <>
                <Tooltip title="Profile">
                  <IconButton component={RouterLink} to="/profile" 
                   sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
                  >
                    {/* <Avatar src="https://mui.com/static/images/avatar/2.jpg" /> */}
                    <AccountCircleIcon color='secondary' fontSize='large'/>
                  </IconButton>
                </Tooltip>

                <Button color="secondary" onClick={handleLogout} startIcon={<LogoutIcon />} 
                 sx={{bgcolor:'',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
                >
                  {t("Logout")}
                </Button>
              </>
            ) : (
              <>
                <Link component={RouterLink} to="/login" color="secondary"
                sx={{textDecoration:'none',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
                >
                  {t("Login")}
                </Link>
                <Link component={RouterLink} to="/register" color="secondary"
                sx={{textDecoration:'none',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
                >
                  {t("Register")}
                </Link>
              </>
            )}

            <IconButton onClick={toggleLanguage} color="secondary"
             sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
            >
              <TranslateIcon />
            </IconButton>

            <IconButton onClick={toggleTheme} color="secondary" 
             sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 1px 0 #fcc050, 0 10px 10px rgba(0,0,0,0.4)`,}, }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

                
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
