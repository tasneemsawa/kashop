


import React from 'react';
import {
  Box, Typography, Button, Grid, Paper, Avatar, Divider
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Styles } from './Styles';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';

const ProfileInfo = ({ userData }) => {
  const { t } = useTranslation()
  let data = useOutletContext();
  const navigate=useNavigate()
  console.log(data)

  let totalOrder = data?.orders?.length || 0
  let totalpayments = data?.orders?.filter(orders => orders.paymentStatus !== "paid").length || 0
  let totaldelivery = data?.orders?.filter(orders => orders.status !== 5).length || 0


  return (
    <Box sx={{ px: { xs: 2, md: 4 }, bgcolor: "#F6F9FC", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={Styles.headerView}>
        <Box sx={Styles.personView}>
          <PersonIcon sx={Styles.personIcon} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: "secondary.main" }}>
            {t("profile_title")}
          </Typography>
        </Box>
        <Button variant="contained" sx={Styles.edit_profileButton} onClick={()=>navigate("/profile/settings")} >
          {t("edit_profile")}
        </Button>
      </Box>

      {/* Top Cards Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* User Info  */}
        <Grid size={{ xs: 12, md: 6 }} >
          <Paper elevation={0} sx={Styles.paperView}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={Styles.avatarView} >
                {data.fullName[0]}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{data.fullName}</Typography>
                <Typography variant="body2" color="secondary.main">
                  {t("balance")}: <span style={{ color: "#E94560", fontWeight: 600 }}>$500</span>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Stats  */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 4 }}  >
              <Paper elevation={0} sx={Styles.StatsView}>
                <Typography variant="h5" sx={Styles.StatsTotal}>{totalOrder}</Typography>
                <Typography variant="caption" sx={Styles.StatsLable}>
                  {t("all_orders")}
                </Typography>
              </Paper>
            </Grid>


            <Grid size={{ xs: 6, md: 4 }}  >
              <Paper elevation={0} sx={Styles.StatsView}>
                <Typography variant="h5" sx={Styles.StatsTotal}>{totalpayments}</Typography>
                <Typography variant="caption" sx={Styles.StatsLable}>
                  {t("awaiting_payments")}
                </Typography>
              </Paper>
            </Grid>


            <Grid size={{ xs: 6, md: 4 }}  >
              <Paper elevation={0} sx={Styles.StatsView}>
                <Typography variant="h5" sx={Styles.StatsTotal}>{totaldelivery}</Typography>
                <Typography variant="caption" sx={Styles.StatsLable}>
                  {t("awaiting_delivery")}
                </Typography>
              </Paper>
            </Grid>


          </Grid>
        </Grid>
      </Grid>

      {/* Detailed Info Card */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: "10px" }}>
        <Grid container spacing={3}>
          {[
            { label: t("fullName"), value: data.fullName, size: { xs: 12, sm: 6, md: 3 } },
            { label: t("email"), value: data.email, size: { xs: 12, sm: 6, md: 4 } },
            { label: t("phone"), value: data.phoneNumber, size: { xs: 12, sm: 6, md: 3 } },
            { label: t("city"), value: data.city, size: { xs: 12, sm: 6, md: 2 } },
          ].map((item, index) => (
            <Grid size={item.size} key={index}>
              <Typography variant="caption" sx={{ color: "#7D879C", fontWeight: 500 }}>
                {item.label}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, color: "#2B3445", mt: 0.5 }}>
                {item.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

    </Box>
  );
};

export default ProfileInfo;