import React from 'react';
import { Box, Typography } from '@mui/material';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { useTranslation } from 'react-i18next';

const NoReviews = () => {
  const { t } = useTranslation();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center'
      }}
    >
      <RateReviewOutlinedIcon sx={{ fontSize: 50, color: '#bdc3c7', mb: 2 }} />
      
      <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>
        {t("No reviews yet")}
      </Typography>
      
      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: '300px' }}>
        {t("Be the first to review this product and share your experience with others!")}
      </Typography>
    </Box>
  );
};

export default NoReviews;