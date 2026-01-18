import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Styles } from './Styles';

const EmptyCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={Styles.main}
    >
      <Box
        sx={Styles.subView}
      >
        <ShoppingCartOutlinedIcon
          sx={{ fontSize: 80, color: '#E94560' }}
        />
      </Box>

      <Typography variant="h5" fontWeight="700" gutterBottom>
        {t("Your cart is empty")}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '350px' }}>
        {t("Looks like you haven't added anything to your cart yet. Go ahead and explore our top categories.")}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/shop')}
        sx={Styles.goShopping}
      >
        {t("Go Shopping")}
      </Button>
    </Box>
  );
};

export default EmptyCart;