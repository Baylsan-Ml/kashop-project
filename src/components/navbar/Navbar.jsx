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
    <Box color='info' sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: '#353d24' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:'flex' }}>
            <Box sx={{display:'flex', flexGrow: 1}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
           sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',  fontWeight: 700, letterSpacing: '.3rem',
             color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            KA-Shop -{username}
          </Typography>
          </Box>
          <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none'>
            <HomeIcon title='Home' fontSize="large" />
            </Link>

            <Link component={RouterLink} to='/products' color='inherit' underline='none'>
            <CategoryIcon fontSize="large" />
            </Link>
            {token!=null?
            <>
            <Link component={RouterLink} to='/cart' color='inherit' underline='none'>
            <ShoppingCartIcon fontSize="large" />
            </Link>
            <Box>
            <Button color='inherit' onClick={handleLogout} sx={{gap:1}}>
              <LogoutIcon fontSize="large" />
              Logout
              </Button>
              </Box>
            </>
            :
            <>
            <Link component={RouterLink} to='/login' color='inherit' underline='none'>Login</Link>
            <Link component={RouterLink} to='/register' color='inherit' underline='none'>Register</Link>
            </>
            }
          </Box>

          <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Tooltip title="Profile">
              <IconButton  component={RouterLink} onClick={handleOpenUserMenu} to='/' sx={{ p: 0, m: 3 }}>
                <Avatar alt="Avatar" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
          </Box>
          
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
