import { ThemeProvider, createTheme } from "@mui/material/styles";
const MainTheme = createTheme({
  palette: {
    text: {
      primary: "#2B3445",
      // secondary: "#777777", 
      mainColor: "#E94560"
    },
    primary: {
      main: "#E94560"
    },
    secondary: {
      main: '#2B3445',
    },
    muted: {
      main: '#7d879c',
    },
    customGray: {
      main: '#f8f9fa',

    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    customYellow:{
      main:"#ffcd4e"
    }
  },
  typography: {
    fontFamily: '"Public Sans", "Public Sans Fallback", sans-serif',
  },
});


export default MainTheme