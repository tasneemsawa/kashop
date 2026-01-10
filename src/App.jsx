import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './route.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import AuthContextProvider, { AuthContext } from './Context/AuthContext.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LanguageManger from './pages/utils/LanguageManger.js';


const queryClient = new QueryClient()

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
      <LanguageManger/>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      {/* </AuthContextProvider> */}
    </QueryClientProvider>

  )
}
