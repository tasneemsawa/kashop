
import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Styles from './Styles';
import { useTranslation } from 'react-i18next';

const features = [
    { icon: <LocalShippingOutlinedIcon fontSize="large" />, title: 'Worldwide Delivery' },
    { icon: <PaymentOutlinedIcon fontSize="large" />, title: 'Safe Payment' },
    { icon: <VerifiedUserOutlinedIcon fontSize="large" />, title: 'Shop With Confidence' },
    { icon: <HeadsetMicOutlinedIcon fontSize="large" />, title: '24/7 Support' },
];

const FeaturesCards = () => {
    const { t } = useTranslation();

    return (
        <Box  sx={{ py: 8 }}>
            <Grid container spacing={3}>
                {features.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Card sx={Styles.mainBox} elevation={0}>
                            <Box sx={Styles.iconCircle}>
                                {item.icon}
                            </Box>
                            <Typography
                                sx={Styles.title}
                            >
                                {t(item.title)}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesCards;