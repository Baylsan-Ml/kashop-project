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
      <AppBar position="static" color='info'>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:'flex' }}>
            {/* <Box color={'secondary'} sx={{display:'flex', flex: 1}}>
          <AdbIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap color= 'secondary' component="a" href="#app-bar-with-responsive-menu"
           sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
              textDecoration: 'none' }}>
            KA-Shop {user?.name && `- ${user.name}`}
          </Typography>
          </Box>
          
            <Box  sx={{flex: 1, display: 'flex', justifyContent: 'center',gap: 3}}>
            <Link color='secondary' component={RouterLink} to='/'  underline='none' 
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
             {token? 
             (
              <>
              <Tooltip title="Profile">
                 <IconButton sx={{ p: 0 }}>
                  <Link component={RouterLink} to="/profile" sx={{textDecoration:'none'}} color="secondary">
                  <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                  </Link>
                  </IconButton>
                 </Tooltip>
             <Button color="secondary" onClick={handleLogout} startIcon={<LogoutIcon />}>
              {t("Logout")}
             </Button>
              </>
             
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

             <Button color='secondary' onClick={toggleLanguage}>
              <TranslateIcon color='secondary' />
             </Button>

              <IconButton
               onClick={toggleTheme}
              sx={{color:'secondary.main', transition: '0.3s','&:hover': { transform: 'rotate(20deg)'}}}>
               {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              
                </Box> */}

                  {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <AdbIcon color="secondary" sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              color="secondary"
              sx={{ fontWeight: 700 }}
            >
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
            >
              <MenuItem component={RouterLink} to="/" onClick={handleCloseMenu}>
                <HomeIcon sx={{ mr: 1 }} /> {t("Home")}
              </MenuItem>

              <MenuItem component={RouterLink} to="/category" onClick={handleCloseMenu}>
                <CategoryIcon sx={{ mr: 1 }} /> {t("Categories")}
              </MenuItem>

              <MenuItem component={RouterLink} to="/products" onClick={handleCloseMenu}>
                <Inventory2Icon sx={{ mr: 1 }} /> {t("Products")}
              </MenuItem>

              {token && (
                <MenuItem component={RouterLink} to="/cart" onClick={handleCloseMenu}>
                  <ShoppingCartIcon sx={{ mr: 1 }} /> {t("Cart")}
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Link component={RouterLink} to="/" color="secondary" underline="none">
              <HomeIcon /> {t("Home")}
            </Link>

            <Link component={RouterLink} to="/category" color="secondary" underline="none">
              <CategoryIcon /> {t("Categories")}
            </Link>

            <Link component={RouterLink} to="/products" color="secondary" underline="none">
              <Inventory2Icon /> {t("Products")}
            </Link>

            {token && (
              <Link component={RouterLink} to="/cart" color="secondary" underline="none">
                <ShoppingCartIcon /> {t("Cart")}
              </Link>
            )}
          </Box>

          {/* Right actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            {token ? (
              <>
                <Tooltip title="Profile">
                  <IconButton component={RouterLink} to="/profile">
                    <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>

                <Button color="secondary" onClick={handleLogout} startIcon={<LogoutIcon />}>
                  {t("Logout")}
                </Button>
              </>
            ) : (
              <>
                <Link component={RouterLink} to="/login" color="secondary">
                  {t("Login")}
                </Link>
                <Link component={RouterLink} to="/register" color="secondary">
                  {t("Register")}
                </Link>
              </>
            )}

            <IconButton onClick={toggleLanguage} color="secondary">
              <TranslateIcon />
            </IconButton>

            <IconButton onClick={toggleTheme} color="secondary">
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

                
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
