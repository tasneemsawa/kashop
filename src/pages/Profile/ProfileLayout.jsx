import {
  Box, Grid, Typography, Card, IconButton, Select,
  Button, CircularProgress, Stack, CardMedia, Step, Container, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, List
} from '@mui/material';
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile'
// import Sidebar from "./Sidebar/Sidebar"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useTranslation } from 'react-i18next';
import StylesF from './Styles';
export default function ProfileLayout() {

  let { data, isLoading, isError } = useProfile()
  const { t, i18n } = useTranslation();
  const Styles = StylesF();

  if (isLoading) return <CircularProgress></CircularProgress>

  if (isError) return <Typography>error</Typography>
  console.log(data)
  return (
    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* sidebar */}
          <Grid item  size={{ xs: 12, md: 3 }} >
            <Box sx={Styles.mainSideBar}>
              <Typography variant="caption" sx={Styles.titleSideBar}>
                
                {t("DASHBOARD")}
              </Typography>

              <List sx={{ marginTop:"3px", }}>
                <Button
                  component={NavLink}
                  to="orders"
                  fullWidth
                  startIcon={<LocalMallOutlinedIcon />}
                  sx={Styles.buttons}
                >{t("Orders")}

                 
                </Button>

                <Button
                  component={NavLink}
                  to="/profile"
                  end
                  fullWidth
                  startIcon={<PersonOutlineIcon />}
                  sx={Styles.buttons}
                >
                  {t("Profile Info")}
                </Button>
              </List>
            </Box>
          </Grid>

        

          <Grid item size={{ xs: 12, md: 9 }}>
              <Outlet context={data} />
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

