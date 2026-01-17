import {
    Container, Box, Grid, Stack, Typography, Rating, IconButton, Button,
    Tabs, Tab, CircularProgress, List, ListItem, Avatar
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useParams } from 'react-router-dom';

import React from 'react'
import { useState } from 'react';
import {
    Add as AddIcon,
    Remove as RemoveIcon,
} from '@mui/icons-material';
import { Styles } from './Styles';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import WriteReviewForm from '../../components/WriteReviewForm/WriteReviewForm';
import { useProductsDetails } from '../../Hooks/useProductsDetails';
import useAddToCart from '../../Hooks/useAddToCart'
import { useTranslation } from 'react-i18next';

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
const relatedProducts = [
    { id: 1, name: "Waterproof Mascara", price: 187, rating: 4, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg" },
    { id: 2, name: "Dead Sea Bath Salts", price: 217, rating: 3, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/15/07/b5/1507b519f1976dd3090ae886fe67f0f7.jpg" },
    { id: 3, name: "Xiaomi", price: 171, rating: 5, category: "Watches", image: "https://i.pinimg.com/736x/86/6d/cf/866dcff7520d465f3dcd6635c82380ea.jpg" },
    { id: 5, name: "Kossil Watch Brown", price: 117, rating: 4, category: "Watches", image: "https://i.pinimg.com/736x/a8/e4/76/a8e4762d2a85f820df68722b1376a02c.jpg" },
];
export default function ProductDetails() {
    const { id } = useParams(); //product id 
    const { t } = useTranslation();

    let {  serverErrors, cartMutation } =useAddToCart()
    let {isPending,mutate:addToCart}=cartMutation
    const [quantity, setQuantity] = useState(0);
    const [tabValue, setTabValue] = useState("1");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity >= 1) setQuantity(quantity - 1);
    };
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ rating, comment });

    };
    const { isLoading, isError, data } = useProductsDetails(id);
    console.log("wefwefwef")
    console.log(data)

    if (isLoading) return <CircularProgress></CircularProgress>

    if (isError) return <Typography>error</Typography>

    console.log(data)

    let details = data.response
    return (
        <Box elevation={0} sx={{ minHeight: '100vh', py: 15 }}>
            <Container maxWidth="lg">

                {/* product Details */}
                <Grid container spacing={10}>
                    {/* photo */}
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={Styles.photoGrid}>
                        <Box
                            component="img"
                            src={details.image}//'https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg'
                            sx={Styles.photo}
                        />

                    </Grid>

                    {/* Details */}
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box sx={{ alignItems: "center" }}>
                            <Stack spacing={2} justifyContent="center" sx={{ py: 10 }}>
                                <Typography component={"h1"} sx={Styles.productName}>
                                    {details.name}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography component={"span"} sx={Styles.prodctuBrandTitle}>
                                    {t("Brand")}:
                                    </Typography>
                                    <Typography component={"span"} sx={Styles.prodctuBrand}>
                                        Ziaomi
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography component={"span"} sx={Styles.rate}>
                                       {t("Rated")} :
                                    </Typography>
                                    <Rating
                                        name="product-rating"
                                        value={details.rate || 0}
                                        precision={0.5}
                                        readOnly
                                        size="small"
                                        sx={{ color: 'customYellow.main', }}
                                    />

                                </Box>
                                <Typography component={"span"} sx={Styles.productPrice}>
                                    ${details.price}
                                </Typography>
                                <Typography component={"span"} sx={[Styles.productQuantity, { color: details.quantity > 0 ? 'secondary.main' : 'primary.main' }]}>
                                    {details.quantity > 0 ?`${t("Stock Available")}`:`${t("Rated")}`}
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
                                    onClick={() => addToCart({ ProductId: id, quantity })}
                                    disabled={isPending}
                                >{isPending? <CircularProgress /> :`${t("Add To Cart")}`}  </Button>
                            </Stack>
                        </Box>

                    </Grid>
                </Grid>



                {/* Tabs Section */}
                <Box sx={{ width: '100%', typography: 'body1', py: 15 }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label= {t("Description")} value="1" sx={Styles.tabTitle} />
                                <Tab label= {t("Review")} value="2" sx={Styles.tabTitle} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography
                                variant="h6"
                                sx={Styles.specificationTitle}>
                               {t("Specification")} :
                            </Typography>
                            <Box sx={{ color: 'muted', fontSize: '14px' }}>
                                <Typography >{details.description}</Typography>
                            </Box>


                        </TabPanel>
                        <TabPanel value="2">



                            <Typography variant="h6" sx={Styles.specificationTitle}>
                            {t("Customer Reviews")}  
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

                            <WriteReviewForm />

                        </TabPanel>
                    </TabContext>
                </Box>

                <Box sx={{ width: '100%', typography: 'body1', pb: 15 }}>
                    <Typography component={"h2"} sx={{ fontSize: "20px", marginBottom: "30px", fontWeight: 700 }}>
                    {t("Related Products")}    
                    </Typography>
                    <Grid container spacing={3}>

                        {relatedProducts.map(product =>
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                                <ProductGridCard product={product} />
                            </Grid>
                        )}


                    </Grid>


                </Box>

            </Container>
        </Box>
    )
}