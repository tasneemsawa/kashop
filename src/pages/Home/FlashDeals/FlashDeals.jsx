

import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import BoltIcon from '@mui/icons-material/Bolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Images
import boat from "../../../assets/Images/flashDeals/boat.webp"
import watch1 from "../../../assets/Images/flashDeals/watch1.webp"
import watch2 from "../../../assets/Images/flashDeals/watch2.webp"
import phone from "../../../assets/Images/flashDeals/phone.webp"

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

import ProductGridCard from '../../../components/ProductGridCard/ProductGridCard';
import Styles from './Styles';

const FlashDeals = () => {
    const products = [
        { id: 1, name: "NikeCourt Zoom Vapor Cage", discount: "25", price: 187.50, oldPrice: 250.00, rating: 4, image: boat },
        { id: 2, name: "Classic Rolex Watch", discount: "15", price: 297.50, oldPrice: 350.00, rating: 4, image: watch2 },
        { id: 3, name: "IPhone 13 Pro Max", discount: "28", price: 108.00, oldPrice: 150.00, rating: 5, image: phone },
        { id: 4, name: "Mi Led Smart Watch", discount: "21", price: 142.20, oldPrice: 180.00, rating: 4, image: watch1 },
        { id: 5, name: "Mi Led Smart Watch", discount: "21", price: 142.20, oldPrice: 180.00, rating: 4, image: watch1 },
    ];

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";

    return (
        <Box sx={{ py: 6 }}>
            {/* Header Section */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <BoltIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                    <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">
                        {t("Flash Deals")}
                    </Typography>
                </Stack>
                <Typography
                    onClick={() => navigate("/shop")}
                    sx={[Styles.viewAll, { cursor: 'pointer', display: 'flex', alignItems: 'center' }]}
                >
                    {t("View all")}
                    <ChevronRightIcon
                        fontSize="small"
                        sx={{ transform: isRtl ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                </Typography>
            </Stack>

            {/* Slider Container */}
            <Box sx={{
                position: 'relative',
                px: { xs: 1, md: 2 },
                "&:hover .nav-button": {
                    visibility: { xs: 'visible', md: 'visible' },
                    transform: 'translateY(0)',
                    opacity: 1
                }
            }}>
                <Swiper
                    key={i18n.language}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={25}
                    loop={true}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    style={{ paddingBottom: '20px' }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductGridCard product={item} disable={true} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IconButton
                    className="prev-btn nav-button"
                    sx={[
                        Styles.swiperButton,
                        {
                            position: 'absolute',
                            zIndex: 10,
                            top: '40%',
                            left: isRtl ? 'auto' : -20,
                            right: isRtl ? -20 : 'auto',
                            display: { xs: 'none', md: 'flex' }, // إخفاء عالموبايل عشان ما يغطي الكرت
                            opacity: 0,
                            transition: '0.3s'
                        }
                    ]}
                >
                    {isRtl ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />}
                </IconButton>

                <IconButton
                    className="next-btn nav-button"
                    sx={[
                        Styles.swiperButton,
                        {
                            position: 'absolute',
                            zIndex: 10,
                            top: '40%',
                            right: isRtl ? 'auto' : -20,
                            left: isRtl ? -20 : 'auto',
                            display: { xs: 'none', md: 'flex' },
                            opacity: 0,
                            transition: '0.3s'
                        }
                    ]}
                >
                    {isRtl ? <ArrowBackIosNewOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </IconButton>
            </Box>
        </Box>
    );
};

export default FlashDeals;