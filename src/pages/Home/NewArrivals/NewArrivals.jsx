

import React, { useRef } from 'react';
import { Box, Container, Typography, Card, CardMedia, Stack, CardContent } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//images
import makeup from "../../../assets/Images/newArrivals/makeup.webp"
import greenPlant from "../../../assets/Images/newArrivals/greenPlant.webp"
import bonsaiTree from "../../../assets/Images/newArrivals/bonsaiTree.webp"
import lipstick1 from "../../../assets/Images/newArrivals/lipstick1.webp"
import watch from "../../../assets/Images/newArrivals/watch.webp"
import sunglass from "../../../assets/Images/newArrivals/sunglass.webp"

//  Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import Styles from './Styles';
import { Style } from '@mui/icons-material';

const NewArrivals = () => {
    const products = [
        { id: 1, name: "Makeup", price: 250, image: makeup },
        { id: 2, name: "Smart Watch", price: 350, image: watch },
        { id: 3, name: "Lipstick", price: 15, image: lipstick1 },
        { id: 4, name: "Green Plant", price: 55, image: greenPlant },
        { id: 5, name: "Bonsai Tree", price: 535, image: bonsaiTree },
        { id: 6, name: "Sunglass", price: 150, image: sunglass },

    ];
    const navigate = useNavigate()

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <GradeIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                    <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">New Arrivals</Typography>
                </Stack>
                <Typography onClick={() => navigate("/shop")} sx={Styles.viewAll}>
                    View all <ChevronRightIcon fontSize="small" />
                </Typography>
            </Stack>

            <Box sx={{ position: 'relative', px: { xs: 0, md: 2 }, "&:hover .nav-button-cat": { visibility: 'visible', transform: 'translateY(0)', } }}>
                <Stack direction={"row"} spacing={3} sx={Style.mainContainer}>
                    {products.map((item) => (

                        <Card elevation={0} sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="170px"
                                sx={Styles.cardMedia}
                                image={item.image}
                                title={item.name}
                                alt={item.name}
                            />
                            <CardContent sx={Styles.cardContent}>
                                <Typography variant="subtitle1" noWrap sx={Styles.productName} >{item.name}</Typography>

                                <Typography color="primary" sx={Styles.price}>
                                    ${item.price.toFixed(2)}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};



export default NewArrivals;