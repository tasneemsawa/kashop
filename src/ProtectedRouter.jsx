import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from './Store/useAuthStore'

export default function ProtectedRouter({children}) {
    const token =useAuthStore(state=>state.token)

    if(!token)
    return <Navigate to="/auth/login"/>
  return children
}
