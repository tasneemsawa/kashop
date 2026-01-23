import { ThemeProvider, createTheme } from "@mui/material/styles";
//const MainTheme = 
const MainTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      text: {
        primary: mode === 'dark' ? '#ffffff !important' : "#2B3445",
        mainColor: "#E94560"
      },
      primary: {
        main: "#E94560"
      },
      secondary: {
        main: mode === 'dark' ? '#ffffff !important' : '#2B3445',
      },
      muted: {
        main: mode === 'dark' ? '#ffffff !important' : '#7d879c',
      },
      customGray: {
        main: '#f8f9fa',

      },
      background: {
        default: mode === 'dark' ? '#121212 !important' : '#f8f9fa',
        paper: mode === 'dark' ? '#1e1e1e !important' : '#ffffff',
      },
      customYellow: {
        main: "#ffcd4e"
      }
    },
    typography: {
      fontFamily: '"Public Sans", "Public Sans Fallback", sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#000000 !important' : '#ffffff',
          },
        },
      },

      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#000000 !important' : '#ffffff',
          },

          select: {
            color: mode === 'dark' ? '#000000 !important' : 'inherit',
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#000000 !important' : '#ffffff',
          },

          select: {
            color: mode === 'dark' ? '#000000 !important' : 'inherit',
          },
        },
      },

    }
  });

}
export default MainTheme