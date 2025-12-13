import { ThemeProvider, createTheme } from "@mui/material/styles";
 const MainTheme = createTheme({
  palette: {
    text: {
      primary: "#2B3445",    
     // secondary: "#777777", 
     mainColor:"#E94560"  
    },
  },
    typography: {
      fontFamily: '"Public Sans", "Public Sans Fallback", sans-serif',
    },
  });


  export default MainTheme