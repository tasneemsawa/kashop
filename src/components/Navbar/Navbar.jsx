import { Button, Link } from '@mui/material';
import { Link as RouterLink,useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

export default function Navbar() {
  const { token, logout } = useContext(AuthContext)
  const navigate = useNavigate()


  const handelLogout=()=>{
    logout()
    navigate('/auth/login')

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KAshop
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2,alignItems:"center" }}>
            <Link
              component={RouterLink}
              to="/home"
              color="inherit"
              underline="none"
            >
              Home
            </Link>


            {token ?
              <>
                <Link
                  component={RouterLink}
                  to="/cart"
                  color="inherit"
                  underline="none"
                >
                  Cart
                </Link>
                <Button
                  color="inherit"
                  onClick={handelLogout}
                >
                  Logout
                </Button>
              </>
              :
              <>

                <Link
                  component={RouterLink}
                  to="/auth/login"
                  color="inherit"
                  underline="none"
                >Login

                </Link>
                <Link
                  component={RouterLink}
                  to="/auth/register"
                  color="inherit"
                  underline="none"
                >
                  Register
                </Link>
              </>

            }

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
