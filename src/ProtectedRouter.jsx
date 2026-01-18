import React from 'react'
import { Navigate } from 'react-router-dom'
import UnauthorizedView from './components/UnauthorizedView/UnauthorizedView'
import { useAuthStore } from './Store/useAuthStore'

export default function ProtectedRouter({children}) {
    const token =useAuthStore(state=>state.token)

    if(!token)
    return <UnauthorizedView/>
    // <Navigate to="/auth/login"/> //We can use this to navigate directly to the login when trying to enter the cart screen
  return children
}
