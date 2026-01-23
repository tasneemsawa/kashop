import React from 'react';
import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Styles from "./Styles";
import watch from "../../../assets/Images/Main/apple-watch-0.webp";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === "ar";

  const slides = [
    { title: "50% Off For Your First Shopping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: watch },
    { title: "New Apple Watch Collection 2026", description: "Experience the future of wearable technology.", image: watch }
  ];
  const theme = useTheme();
  return (
    <Box sx={{ ...Styles.hero, overflow: 'hidden', direction: 'ltr' ,backgroundColor: theme.palette.background.default,}}> 
      <Container maxWidth="lg">
        <Swiper
          key={i18n.language}
          dir={isRtl ? 'rtl' : 'ltr'}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          style={{ width: '100%', height: '100%' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Stack
                direction={{ xs: 'column-reverse', md: isRtl ? 'row-reverse' : 'row' }}
                alignItems="center"
                justifyContent="space-between"
                sx={{ 
                  minHeight: '450px', 
                  textAlign: isRtl ? 'right' : 'left',
                  px: { md: 4 },
                  direction: isRtl ? 'rtl' : 'ltr' 
                }}
              >
                <Box sx={{ flex: 1, maxWidth: { md: '50%' } }}>
                  <Typography variant="h2" sx={Styles.title}>
                    {slide.title}
                  </Typography>
                  <Typography sx={Styles.description}>
                    {slide.description}
                  </Typography>
                  <Button sx={Styles.shopButton} onClick={() => navigate("/shop")}>
                    {t("Shop Now")}
                  </Button>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={slide.image}
                    sx={{
                      ...Styles.image,
                      width: { xs: '80%', md: '100%' },
                      maxWidth: '400px',
                      transform: isRtl ? 'scaleX(-1)' : 'none'
                    }}
                  />
                </Box>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Hero;