import { ThemeProvider, createTheme } from "@mui/material/styles";
//const MainTheme = 
const MainTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
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
        default: mode === 'dark' ? '#121212' : '#f8f9fa',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },
      customYellow: {
        main: "#ffcd4e"
      }
    },
    typography: {
      fontFamily: '"Public Sans", "Public Sans Fallback", sans-serif',
    },
  });

}
export default MainTheme