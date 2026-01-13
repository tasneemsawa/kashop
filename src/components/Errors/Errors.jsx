import React from 'react';
import {  Typography,  Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Styles} from "./Styles"
import { useTranslation } from 'react-i18next';


const ErrorState = ({ message }) => {
  const { t } = useTranslation();
  return (
      <Paper sx={Styles.mainView} elevation={0}>
        <ErrorOutlineIcon sx={Styles.errorIcon}/>
        <Typography variant="h5" fontWeight="700" color="primary.main" gutterBottom>
        {t("Something went wrong!")}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '400px' }}>
          {message ||t("We couldn't fetch the data right now. Please check your internet connection.") }
        </Typography>
      </Paper>
  );
};

export default ErrorState;