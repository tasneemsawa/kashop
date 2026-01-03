

import React from 'react';
import { Box, Container, Typography, Card, IconButton, Rating, Stack, styled, Badge } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import BoltIcon from '@mui/icons-material/Bolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
//images
import boat from "../../../assets/Images/flashDeals/boat.webp"
import watch1 from "../../../assets/Images/flashDeals/watch1.webp"
import watch2 from "../../../assets/Images/flashDeals/watch2.webp"
import phone from "../../../assets/Images/flashDeals/phone.webp"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
//  Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import ProductGridCard from '../../../components/ProductGridCard/ProductGridCard';
import { useNavigate } from 'react-router-dom';
import Styles from './Styles';

const FlashDeals = () => {
    const products = [
        { id: 1, name: "NikeCourt Zoom Vapor Cage", discount: "25", price: 187.50, oldPrice: 250.00, rating: 4, image: boat },
        { id: 2, name: "Classic Rolex Watch", discount: "15", price: 297.50, oldPrice: 350.00, rating: 4, image: watch2 },
        { id: 3, name: "IPhone 13 Pro Max", discount: "28", price: 108.00, oldPrice: 150.00, rating: 5, image: phone },
        { id: 4, name: "Mi Led Smart Watch", discount: "21", price: 142.20, oldPrice: 180.00, rating: 4, image: watch1 },
        { id: 5, name: "Mi Led Smart Watch", discount: "21", price: 142.20, oldPrice: 180.00, rating: 4, image: watch1 },

    ];

    const navigate = useNavigate()

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <BoltIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                    <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">Flash Deals</Typography>
                </Stack>
                <Typography onClick={() => navigate("/shop")} sx={Styles.viewAll}>
                    View all <ChevronRightIcon fontSize="small" />
                </Typography>
            </Stack>

            <Box sx={{ position: 'relative', px: { xs: 0, md: 2 } ,"&:hover .nav-button":{visibility:'visible',transform: 'translateY(0)',}}}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    // navigation
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductGridCard product={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton className="prev-btn nav-button" sx={[Styles.swiperButton,{left: -20}]}><ArrowBackIosNewOutlinedIcon /></IconButton>
                <IconButton className="next-btn nav-button" sx={[Styles.swiperButton,{right: -20}]}><ArrowForwardIosOutlinedIcon /></IconButton>
            </Box>
        </Container>
    );
};



export default FlashDeals;