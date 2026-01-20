  
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; 
import { useTranslation } from 'react-i18next';
import { Styles } from "./Styles";
import { useNavigate } from 'react-router-dom'; 

const EmptyOrders = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
  
    return (
      <Box sx={Styles.container}>
        <ShoppingBagIcon sx={{ ...Styles.icon, fontSize: 80, color: '#dae1e7' }} />
        <Typography variant="h5" sx={{ ...Styles.title, mt: 2, fontWeight: 700 }}>
          {t("No orders found")} 
        </Typography>
        <Typography variant="body1" sx={{ ...Styles.description, color: 'text.secondary', mb: 3 }}>
          {t("You haven't placed any orders yet. Start shopping and fill your bag!")}
        </Typography>
        
        <Button
          variant="contained"
          onClick={() => navigate('/shop')} 
          sx={{ 
            ...Styles.button, 
            textTransform: 'none', 
            px: 4, 
            borderRadius: '8px',
            backgroundColor: 'primary.main' 
          }}
        >
          {t("Go to Shop")}
        </Button>
      </Box>
    );
  };
  
  export default EmptyOrders;