import {
    Container, Box, Grid, Stack, Typography, Rating, IconButton, Button,
    Tabs, Tab, Divider, List, ListItem, Avatar
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';


import React from 'react'
import { useState } from 'react';
import {
    Add as AddIcon,
    Remove as RemoveIcon,
} from '@mui/icons-material';
import { Styles } from './Styles';

const detailes =
    { id: 1, quantity: 100, name: "Waterproof Mascara", description: "product one description", price: 187, rating: 4, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg" }
const reviews = [
    {
        id: 1,
        name: 'Jannie Schumm',
        rating: 4.7,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
        avatar: 'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        id: 2,
        name: 'Joe Kenan',
        rating: 4.7,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
        avatar: 'https://mui.com/static/images/avatar/2.jpg'
    }
];
export default function ProductDetails() {
    const [quantity, setQuantity] = useState(0);
    const [tabValue, setTabValue] = useState("1");

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity >= 1) setQuantity(quantity - 1);
    };
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <Box elevation={0} sx={{ minHeight: '100vh', py: 15 }}>
            <Container maxWidth="lg">

                {/* product Details */}
                <Grid container spacing={10}>
                    {/* photo */}
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={Styles.photoGrid}>
                        <Box
                            component="img"
                            src='https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg'
                            sx={Styles.photo}
                        />

                    </Grid>

                    {/* Details */}
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box sx={{ alignItems: "center" }}>
                            <Stack spacing={2} justifyContent="center" sx={{ py: 10 }}>
                                <Typography component={"h1"} sx={Styles.productName}>
                                    {detailes.name}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography component={"span"} sx={Styles.prodctuBrandTitle}>
                                        Brand:
                                    </Typography>
                                    <Typography component={"span"} sx={Styles.prodctuBrand}>
                                        Ziaomi
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography component={"span"} sx={Styles.rate}>
                                        Rated:
                                    </Typography>
                                    <Rating
                                        name="product-rating"
                                        value={detailes.rating || 0}
                                        precision={0.5}
                                        readOnly
                                        size="small"
                                        sx={{ color: 'customYellow.main', }}
                                    />

                                </Box>
                                <Typography component={"span"} sx={Styles.productPrice}>
                                    ${detailes.price}
                                </Typography>
                                <Typography component={"span"} sx={[Styles.productQuantity, { color: detailes.quantity > 0 ? 'secondary.main' : 'primary.main' }]}>
                                    {detailes.quantity > 0 ? "Stock Available" : "Out Of Stock"}
                                </Typography>

                                <Stack spacing={2} direction="row"  >
                                    <IconButton
                                        onClick={handleDecrease}
                                        sx={Styles.actionButoon}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography
                                        sx={Styles.quantity}
                                    >
                                        {quantity}
                                    </Typography>
                                    <IconButton
                                        onClick={handleIncrease}
                                        sx={Styles.actionButoon}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Stack>

                                <Button variant="contained"
                                    sx={Styles.addButton}

                                >Add To Cart</Button>
                            </Stack>
                        </Box>

                    </Grid>
                </Grid>



                {/* Tabs Section */}
                <Box sx={{ width: '100%', typography: 'body1', py: 15 }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Description" value="1" sx={Styles.tabTitle} />
                                <Tab label="Review" value="2" sx={Styles.tabTitle} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography
                                variant="h6"
                                sx={Styles.specificationTitle}>
                                Specification:
                            </Typography>
                            <Box sx={{ color: 'muted', fontSize: '14px' }}>
                                <Typography >{detailes.description}</Typography>
                            </Box>


                        </TabPanel>
                        <TabPanel value="2">



                            <Typography variant="h6" sx={Styles.specificationTitle}>
                                Customer Reviews
                            </Typography>
                            <List sx={{ width: '100%' }}>
                                {reviews.map((review, index) => (
                                    <React.Fragment key={review.id}>
                                        <ListItem alignItems="flex-start" sx={{ px: 0, py: 2, flexDirection: 'column' }}>
                                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                                                <Avatar alt={review.name} src={review.avatar} sx={{ width: 48, height: 48 }} />
                                                <Box>
                                                    <Typography fontWeight="700">
                                                        {review.name}
                                                    </Typography>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Rating value={review.rating} precision={0.1} size="small" readOnly sx={{ color: "customYellow.main" }} />
                                                        <Typography fontWeight="700">
                                                            {review.rating}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {review.date}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                            <Typography
                                                color="text.primary"
                                                sx={{ color: 'secondary.main', fontSize: "14px" }}>
                                                {review.comment}
                                            </Typography>
                                        </ListItem>

                                    </React.Fragment>
                                ))}
                            </List>



                        </TabPanel>
                    </TabContext>
                </Box>


            </Container>
        </Box>
    )
}