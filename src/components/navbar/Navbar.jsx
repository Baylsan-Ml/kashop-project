import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <Box color='info' sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
             KAshop
          </Typography>
          
          <Box sx={{display:'flex', gap:2}}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none'>Home</Link>
            <Link component={RouterLink} to='/cart' color='inherit' underline='none'>Cart</Link>
            <Link component={RouterLink} to='/login' color='inherit' underline='none'>Login</Link>
            <Link component={RouterLink} to='/register' color='inherit' underline='none'>Register</Link>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
