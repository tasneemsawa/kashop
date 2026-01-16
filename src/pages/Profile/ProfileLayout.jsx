import {
    Box, Grid, Typography, Card, IconButton, Select,
    Button, CircularProgress, Stack, CardMedia, Step, Container, TableContainer, Table, TableHead, TableCell, TableBody, TableRow
  } from '@mui/material';
  import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile'

export default function ProfileLayout() {
    
    let { data, isLoading, isError } = useProfile()
    if (isLoading) return <CircularProgress></CircularProgress>

    if (isError ) return <Typography>error</Typography>
  console.log(data)
  return (
<Box component={'section'}>
    
    <Typography>My Profile</Typography>

    <Button component={NavLink} to=''>Info</Button>
    <Button component={NavLink} to='orders'>Orders</Button>
<Outlet/>
  </Box>
  )
}
