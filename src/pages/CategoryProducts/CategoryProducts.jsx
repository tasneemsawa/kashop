import { Style } from '@mui/icons-material';
import { CircularProgress, Grid, Typography, Box, Container, CardMedia, Card } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import EmptyShop from '../../components/EmptyShop/EmptyShop';
import CustomPagination from '../../components/Pagination/Pagination';
import ProductGridCard from '../../components/ProductGridCard/ProductGridCard';
import { useCategories } from '../../Hooks/useCategories';
import useGetProductsByCategory from '../../Hooks/useGetProductsByCategory.js'
import { Styles } from './Styles';
import InboxIcon from '@mui/icons-material/Inbox';
import ErrorState from '../../components/Errors/Errors';
export default function CategoryProducts() {
    const { id, name } = useParams(); //product id 
    const { t } = useTranslation();
    console.log(id)
    console.log(name)
    const { data: categories } = useCategories();
    const category = categories?.response?.find((c) => c.id == id);

    let { isLoading, isError, data } = useGetProductsByCategory(id)
    console.log(data)
    if (isLoading) return <CircularProgress></CircularProgress>

    console.log(data)
    return (
        <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 4, mt: 2, alignItems: 'center', display: "flex", flexDirection: "column" }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={Styles.titleView}>
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {category?.name?category.name:""}
                        </Box>
                        {t("Products")}
                    </Typography>
                    <Box sx={Styles.divider} />
                </Box>

                {/* Product Grid */}
                <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
                    <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
                        {isError ?
                            <Box sx={{ my: 7, display: "flex", flexGrow: 1 }}> <ErrorState /></Box>
                            : data?.response?.length == 0
                                ?
                                (
                                    <Container>
                                        <Box sx={Styles.alertView}>
                                            <InboxIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                {t("no_products_title")}
                                            </Typography>

                                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                                {t("no_products_desc")}
                                            </Typography>

                                        </Box>
                                    </Container>
                                )


                                : data?.response.map((product) => (
                                    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 3 }} key={product.id}>
                                        <ProductGridCard product={product} />
                                    </Grid>
                                ))}

                    </Grid>


                </Grid>

            </Container>
        </Box>)
}
