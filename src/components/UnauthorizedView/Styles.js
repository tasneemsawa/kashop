import { BorderColor } from "@mui/icons-material";
import { color } from "framer-motion";

export const Styles = {
  mainView:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    p: 4,
    minHeight: '300px',
    bgcolor: 'transparent' 

  },
  errorIcon:{ 
    fontSize: 80, 
    color: 'warning.main', 
    mb: 2 
  },
  loginButton:{
    borderRadius: '10px',
    px: "70px",
    py:"10px",
    textTransform: 'none',
    fontWeight: 'bold',
    color:"white",
    bgcolor:"primary.main",
  }
};
