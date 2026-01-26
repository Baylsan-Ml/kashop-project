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

export default function NavbarNoOne() {
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
    <Box>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}

          <Box sx={{ flexGrow: 1 }}>
            {token && (
              <Link component={RouterLink} to="/cart" color="secondary" underline="none"
              sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-2px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
              >
                <ShoppingCartIcon /> {t("Cart")}
              </Link>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex:1}}>

            {token ? (
              <>
                <Tooltip title="Profile">
                  <IconButton component={RouterLink} to="/profile" 
                   sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-0.5px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
                  >
                    <AccountCircleIcon color='secondary' fontSize='large'/>
                  </IconButton>
                </Tooltip>

                <Button color="secondary" onClick={handleLogout} startIcon={<LogoutIcon />} 
                 sx={{bgcolor:'',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
                >
                  {t("Logout")}
                </Button>
              </>
            ) : (
              <>
                <Link component={RouterLink} to="/login" color="secondary"
                sx={{textDecoration:'none',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
                >
                  {t("Login")}
                </Link>
                <Link component={RouterLink} to="/register" color="secondary"
                sx={{textDecoration:'none',borderRadius:'40%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
                >
                  {t("Register")}
                </Link>
              </>
            )}

            <IconButton onClick={toggleLanguage} color="secondary"
             sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
            '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
            >
              <TranslateIcon />
            </IconButton>

            <IconButton onClick={toggleTheme} color="secondary" 
             sx={{bgcolor:'',borderRadius:'50%', p:1, display:'flex',justifyContent:'center', gap:1,
           '&:hover': {transform: 'translateY(-1px)', boxShadow: `0 2px 0 #fcc050, 0 14px 20px #ff734c7b`,}, }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>

         
      </AppBar>
    </Box>
  );
}
