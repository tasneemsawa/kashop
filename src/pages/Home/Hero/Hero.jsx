import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

//image
import watch from "../../../assets/Images/Main/apple-watch-0.webp"

//style
import Styles from "./Styles"
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const slides = [
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
      image: watch
    },
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
      image: watch,
    }
  ];

  const navigate=useNavigate()
  return (
    <Box sx={Styles.hero}>
      <Container maxWidth="lg">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 9000 }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Grid container alignItems="center" spacing={2} sx={{ minHeight: '400px' }}>
                {/* text */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ paddingLeft: { md: 9 } }}>
                    <Typography
                      variant="h2"
                      sx={Styles.title} >
                      {slide.title}
                    </Typography>
                    <Typography
                      sx={Styles.description}
                    >
                      {slide.description}
                    </Typography>
                    <Button sx={Styles.shopButton}
                    onClick={()=>navigate("/shop")}
                    >Shop Now</Button>
                  </Box>
                </Grid>

                {/* image */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={slide.image}
                    alt="product"
                    sx={Styles.image}
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Hero;