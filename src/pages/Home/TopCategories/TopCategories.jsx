

import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography, Card, IconButton, Stack, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
//images
import sunglass from "../../../assets/Images/TopCategories/sunglass.webp"
import watch from "../../../assets/Images/TopCategories/watch.webp"
import headPhone from "../../../assets/Images/TopCategories/headPhone.webp"

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
//  Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import Styles from './Styles';
import { useTranslation } from 'react-i18next';

const TopCategories = () => {
    const categories = [
        { id: 1, name: "HeadPhone", ordersNumber: "3k", image: headPhone },
        { id: 2, name: "Watch", ordersNumber: "3k", image: watch },
        { id: 3, name: "Sunglass", ordersNumber: "3k", image: sunglass },
        { id: 4, name: "Watch", ordersNumber: "3k", image: watch },

    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === "ar";
    return (
        <Box sx={{ py: 6 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <WidgetsIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                    <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">{t("Top Categories")}</Typography>
                </Stack>
                <Typography onClick={() => navigate("/shop")} sx={Styles.viewAll}>
                    {t("View all")} <ChevronRightIcon fontSize="small" sx={{ transform: i18n.language == "ar" ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </Typography>
            </Stack>

            <Box sx={{
                position: 'relative',
                px: { xs: 1, md: 2 },
                "&:hover .nav-button-cat": {
                    visibility: { xs: 'hidden', md: 'visible' },
                    opacity: 1,
                    transform: 'translateY(0)',
                }
            }}>
                <Swiper
                    key={i18n.language}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={25}
                    loop={true}
                    navigation={{
                        prevEl: '.prev-btn-cat',
                        nextEl: '.next-btn-cat',
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        950: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 4000 }}
                >
                    {categories.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Paper sx={{
                                boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
                                padding: "16px",
                                borderRadius: "8px",
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                mb: 1,
                                '&:hover': {
                                    boxShadow: '0px 0px 10px rgba(0,0,0,0.15)',
                                    transform: 'translateY(-2px)',
                                    cursor: 'pointer'
                                }
                            }}>
                                <Stack
                                    sx={{
                                        position: "absolute",
                                        top: 25,
                                        [isRtl ? 'right' : 'left']: 25,
                                        zIndex: 3
                                    }}
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Typography sx={Styles.catName}> {item.name}</Typography>
                                    <Typography sx={{
                                        padding: "4px 10px",
                                        borderRadius: "300px",
                                        backgroundColor: "#e3e9ef",
                                        color: "secondary.main",
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {item.ordersNumber} {t("orders this week")}
                                    </Typography>
                                </Stack>

                                <Box
                                    component="img"
                                    src={item.image}
                                    sx={{
                                        ...Styles.cateNumber,
                                        width: '100%',
                                        display: 'block'
                                    }}
                                />
                            </Paper>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton
                    className="prev-btn-cat nav-button-cat"
                    sx={[Styles.swiperButton, {
                        left: isRtl ? 'auto' : -20,
                        right: isRtl ? -20 : 'auto',
                        opacity: 0,
                        transition: '0.3s',
                        display: { xs: 'none', md: 'flex' },
                        zIndex: 10
                    }]}
                >
                    {isRtl ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />}
                </IconButton>

                <IconButton
                    className="next-btn-cat nav-button-cat"
                    sx={[Styles.swiperButton, {
                        right: isRtl ? 'auto' : -20,
                        left: isRtl ? -20 : 'auto',
                        opacity: 0,
                        transition: '0.3s',
                        display: { xs: 'none', md: 'flex' },
                        zIndex: 10
                    }]}
                >
                    {isRtl ? <ArrowBackIosNewOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
                </IconButton>
            </Box>        </Box>
    );
};



export default TopCategories;