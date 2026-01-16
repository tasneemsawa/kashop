import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './route.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import AuthContextProvider, { AuthContext } from './Context/AuthContext.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LanguageManger from './utils/LanguageManger.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useThemeStore from './Store/useThemeStore.js';
import MainTheme from './Themes/MainTheme'


const queryClient = new QueryClient()

export default function App() {
  const mode = useThemeStore((state)=>state.mode);
  const theme = MainTheme(mode);
console.log(theme)
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
      <LanguageManger/>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <RouterProvider router={router} />
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </QueryClientProvider>

  )
}
