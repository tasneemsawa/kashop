
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid, Paper, Avatar, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useTranslation } from 'react-i18next';
import { Styles } from './Styles';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useUpdateProfile from '../../../Hooks/useUpdateProfile';
import useUpdateEmail from '../../../Hooks/useUpdateEmail';
import useUpdatePassword from '../../../Hooks/useUpdatePassword';
import ResetPassword from './ResetPassword/ResetPassword';
import UpdateEmail from './UpdateEmail/UpdateEmail';

const Settings = () => {
  const { t } = useTranslation();
  let data = useOutletContext();
  const navigate = useNavigate()
  console.log(data)

  const [errors, setErrors] = useState({});

  const [userInfo, setUserInfo] = useState({
    fullName: data?.fullName || "",
    phoneNumber: data?.phoneNumber || "",
    city: data?.city || "",
  });

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState({
    CurrentPassword: "",
    NewPassword: "",
    ConfirmNewPassword: ""
  });


  const { mutate: updateProfile, isPending: updateProfilePending } = useUpdateProfile();
  const { mutate: updateEmail, isPending: updateEmailPending } = useUpdateEmail();
  const { mutate: updatePassword, isPending: updatePassPending } = useUpdatePassword();


  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });
  };




  const validate = () => {
    let tempErrors = {};
    
    // فحص الاسم الأول
    if (!userInfo.firstName) tempErrors.firstName = t("first_name_required");
    
    // فحص الإيميل (بشرط يكون مش فاضي ويكون فورمات إيميل صح)
    if (!userInfo.email) {
      tempErrors.email = t("email_required");
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      tempErrors.email = t("email_invalid");
    }
  
    // فحص الهاتف (مثلاً لازم يكون رقم)
    if (!formData.phone) tempErrors.phone = t("phone_required");
  
    setErrors(tempErrors);
    
    // إذا الـ tempErrors فاضي يعني كل شي تمام (برجع true)
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, bgcolor: "#F6F9FC" }}>
      <Box sx={Styles.headerView}>
        <Box sx={Styles.personView}>
          <PersonIcon sx={Styles.personIcon} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: "secondary.main" }}>
            {t("editProfile")}
          </Typography>
        </Box>
      </Box>

      <Paper elevation={0} sx={{ p: 3, borderRadius: "12px", mb: 4, width: "100%" }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          {t("personal_info")}
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("fullName")} variant="outlined"
              name="fullName"
              value={userInfo.fullName}
              onChange={handleChangeProfile}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("phone")} variant="outlined"
              name="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleChangeProfile}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label={t("city")} variant="outlined"
              name="city"
              value={userInfo.city}
              onChange={handleChangeProfile}
            />
          </Grid>
        </Grid>

        <Box sx={{ justifyContent: "center", display: "flex", mt: "20px" }}>
          <Button variant="contained" sx={Styles.actioNbutton}
            onClick={() => updateProfile(userInfo)}
          >{t("save_profile_info")}</Button>
        </Box>
      </Paper>

      {/* PASSWORD AND EMAIL */}
      <Grid container spacing={4} >
        <Grid size={{ xs: 12, md: 6 }}>
          <UpdateEmail/>
          {/* <Paper elevation={0} sx={{ p: 3, borderRadius: "12px", height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{t("change_email")}</Typography>
            <TextField fullWidth label={t("new_email")} variant="outlined" sx={{ mb: "20px" }}
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Button variant="contained" sx={Styles.actioNbutton}
              onClick={() => updateEmail({ NewEmail: newEmail })}
            >{t("update_email")}</Button>
          </Paper> */}
        </Grid>



        <Grid size={{ xs: 12, md: 6 }}>
          <ResetPassword/>
          {/* <Paper elevation={0} sx={{ p: 3, borderRadius: "12px" }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>{t("change_password")}</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mb: "20px" }}>
              <TextField fullWidth label={t("current_password")} variant="outlined" type="password"
                name="CurrentPassword"
                value={newPassword.CurrentPassword}
                onChange={handleChangePassword}
              />
              <TextField fullWidth label={t("new_password")} variant="outlined" type="password"
                name="NewPassword"
                value={newPassword.NewPassword}
                onChange={handleChangePassword}
              />
              <TextField fullWidth label={t("ConfirmNewPassword")} variant="outlined" type="password"
                name="ConfirmNewPassword"
                value={newPassword.ConfirmNewPassword}
                onChange={handleChangePassword}
              />
            </Box>


            <Button variant="contained" sx={Styles.actioNbutton}
              onClick={() => updatePassword(newPassword)}
            >{t("update_password")}</Button>
          </Paper> */}
        </Grid>
      </Grid>

    </Box>
  );
};

export default Settings;
