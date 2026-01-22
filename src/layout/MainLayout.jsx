import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (

<>
<Navbar/>
<Outlet/>
<Footer/>

</>    )
}
