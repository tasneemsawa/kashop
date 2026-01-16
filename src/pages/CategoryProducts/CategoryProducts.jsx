import { CircularProgress, Grid, Typography, Box, Container, CardMedia, Card } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import CustomPagination from '../../components/Pagination/Pagination';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import useGetProductsByCategory from '../../Hooks/useGetProductsByCategory.JS'

export default function CategoryProducts() {
    const { id, name } = useParams(); //product id 
    const { t } = useTranslation();
    console.log(id)
    console.log(name)

    let { isLoading, isError, data } = useGetProductsByCategory(id)
    if (isLoading) return <CircularProgress></CircularProgress>

    if (isError) return <Typography>error</Typography>

    console.log(data)
    return (
        <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
            <Container maxWidth="lg">

                <Box>
                    <Typography component={"h1"}>
                        <Typography component={"h1"} sx={{ color: "primary.main" }}>{name} </Typography>
                        Products

                    </Typography>
                </Box>

                {/* Product Grid */}
                <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
                    <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
                        {data.response.map((product) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={product.id}>
                                {/* <ProductGridCard product={product} /> */}
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={product.image}
                                        title="green iguana"
                                    />
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent> */}

                                </Card>

                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination */}
                    <CustomPagination />
                </Grid>
            </Container>
        </Box>)
}
