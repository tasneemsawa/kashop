

import React, { useRef } from 'react';
import { Box, Container, Card, CardMedia, Stack } from '@mui/material';
//images
import offer1 from "../../../assets/Images/offers/offer1.webp"
import offer2 from "../../../assets/Images/offers/offer2.webp"

//  Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import Styles from './Styles';
import { Style } from '@mui/icons-material';

const Offers = () => {
    const offer = [
        { id: 1,  image: offer1 },
        { id: 2, image: offer2 },
    ];
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>

            <Box sx={{ position: 'relative', px: { xs: 0, md: 2 } }}>
                <Stack direction={"row"} spacing={3} sx={Style.mainContainer}>
                    {offer.map((item) => (

                        <Card elevation={0} sx={{ boxShadow: "0", backgroundColor: "transparent" }}>
                            <CardMedia
                                component="img"
                                height="350px"
                                sx={Styles.cardMedia}
                                image={item.image}
                                title={"offer"}
                                alt={"offer"}
                            />
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};



export default Offers;