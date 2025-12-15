import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './route.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  )
}
