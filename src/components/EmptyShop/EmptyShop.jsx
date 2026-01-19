
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { useTranslation } from 'react-i18next';
import {Styles} from "./Styles"
const EmptyShop = ({ onReset }) => {
    const { t } = useTranslation();
  
    return (
      <Box sx={[Styles.container]}>
        <SearchOffIcon sx={Styles.icon} />
        
        <Typography variant="h5" sx={Styles.title}>
          {t("No products found")}
        </Typography>
        
        <Typography variant="body1" sx={Styles.description}>
          {t("We couldn't find any matches. Try changing your filters or searching for something else.")}
        </Typography>
        
        <Button
          variant="contained"
          onClick={onReset}
          sx={Styles.button}
        >
          {t("Clear All Filters")}
        </Button>
      </Box>
    );
  };
  
  export default EmptyShop;


  