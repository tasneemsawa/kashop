import { Box, Card, CircularProgress, Container, Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCategories } from '../../../Hooks/useCategories'
import Styles from './Styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useTranslation } from 'react-i18next'
import ErrorState from '../../../components/Errors/Errors'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useProducts } from '../../../Hooks/useProducts'
import ProductGridCard from '../../../components/ProductGridCard/ProductGridCard'
import InboxIcon from '@mui/icons-material/Inbox';

export default function ProductsSection() {
    const navigate = useNavigate()
    const { t,i18n } = useTranslation();
    let { isError, isLoading, data } = useProducts({
        limit:12
      })
    if (isLoading)
        return <CircularProgress></CircularProgress>
    if (isError)
        return <Box sx={{ my: 7, mx: 8 }}> <ErrorState /></Box>

    return (
        <>
            <Box sx={{ py: 7 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>

                    <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 4 }}>
                        <Inventory2OutlinedIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                        <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">{t("Products")}</Typography>
                    </Stack>
                    <Typography onClick={() => navigate("/shop")} sx={[Styles.viewAll,]}>
                        {t("View all")} <ChevronRightIcon fontSize="small" sx={{transform: i18n.language == "ar" ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                    </Typography>
                </Stack>


          {/* Product Grid */}
          <Grid size={{ xs: 12, sm: 8, md: 9, lg: 9 }}>
                    <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
                        {isError ?
                            <Box sx={{ my: 7, display: "flex", flexGrow: 1 }}> <ErrorState /></Box>
                            :data?.response?.data?.length == 0
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


                                : data?.response.data.map((product) => (
                                    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 3 }} key={product.id}>
                                        <ProductGridCard product={product} />
                                    </Grid>
                                ))}

                    </Grid>


                </Grid>

            </Box>
        </>
    )
}
