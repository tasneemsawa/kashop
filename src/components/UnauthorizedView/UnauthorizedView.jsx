import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson'; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Styles } from './Styles';

const UnauthorizedView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Paper elevation={0}  sx={Styles.mainView}>
      <LockPersonIcon  sx={Styles.errorIcon} />
      <Typography variant="h5" fontWeight="700" color="secondary.main" gutterBottom>
        {t("Access Restricted")}
      </Typography>
      <Typography variant="body1" color="muted.main" sx={{ mb: 4, maxWidth: '400px' }}>
        {t("Please login to access this page and see your data.")}
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/auth/login')}
        sx={Styles.loginButton}>
        {t("Go to Login")}
      </Button>
    </Paper>
  );
};

export default UnauthorizedView;