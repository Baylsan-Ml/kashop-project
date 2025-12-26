import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';




export default function Navbar() {
  const{token, logout}=useContext(AuthContext);
  const {username , setUsername}= useContext(UserContext);
  const navigate=useNavigate();

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
            <Box sx={{display:'flex', flex: 1}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
           sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
             color: 'inherit', textDecoration: 'none' }}>
            KA-Shop -{username}
          </Typography>
          </Box>
          
            <Box sx={{flex: 1, display: 'flex', justifyContent: 'center',gap: 3}}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none' 
            sx={{display:'flex', flexDirection:'column', alignItems:'center' ,}}>
            <HomeIcon title='Home' fontSize="large" /> Home
            </Link>
            <Link component={RouterLink} to='/category' color='inherit' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <CategoryIcon fontSize="large" /> Categories
            </Link>
            <Link component={RouterLink} to='/products' color='inherit' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Inventory2Icon fontSize="large" /> Products
            </Link>
            {token&&
            <Link component={RouterLink} to='/cart' color='inherit' underline='none'
            sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <ShoppingCartIcon fontSize="large" /> Cart
            </Link>}
            </Box>

            <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1,}}>
             {token ? (
             <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
              Logout
             </Button>
            ) : (
             <>
              <Link component={RouterLink} to="/login" color="inherit">
              Login
               </Link>
                <Link component={RouterLink} to="/register" color="inherit">
                Register
                </Link>
               </>
               )}

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
