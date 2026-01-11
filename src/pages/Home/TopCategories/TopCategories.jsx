

import React, { useRef } from 'react';
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
    const { t } = useTranslation();

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <WidgetsIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                    <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">{t("Top Categories")}</Typography>
                </Stack>
                <Typography onClick={() => navigate("/shop")} sx={Styles.viewAll}>
                {t("View all")} <ChevronRightIcon fontSize="small" />
                </Typography>
            </Stack>

            <Box sx={{ position: 'relative', px: { xs: 0, md: 2 }, "&:hover .nav-button-cat": { visibility: 'visible', transform: 'translateY(0)', } }}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    {categories.map((item) => (
                        <SwiperSlide key={item.id}>

                            <Paper sx={{ boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px", padding: "16px", borderRadius: "8px" }}>
                                <Stack sx={{ position: "absolute", top: 25, left: 25 }} spacing={16} direction="row" >
                                    <Typography sx={Styles.catName}> {item.name}</Typography>
                                    <Typography sx={{ padding: "4px 10px", borderRadius: "300px", backgroundColor: "#e3e9ef", color: "secondary.main", zIndex: 2, fontSize: "10px", fontWeight: 600, textAlign: "center" }}>{item.ordersNumber} orders this week </Typography>
                                </Stack>
                                <Box
                                    component="img"
                                    src={item.image}
                                    sx={Styles.cateNumber}
                                />
                            </Paper>




                        </SwiperSlide>
                    ))}
                </Swiper>

                <IconButton ref={prevRef} className="prev-btn-cat nav-button-cat" sx={[Styles.swiperButton, { left: -20 }]}><ArrowBackIosNewOutlinedIcon /></IconButton>
                <IconButton ref={nextRef} className="next-btn-cat nav-button-cat" sx={[Styles.swiperButton, { right: -20 }]}><ArrowForwardIosOutlinedIcon /></IconButton>
            </Box>
        </Container>
    );
};



export default TopCategories;