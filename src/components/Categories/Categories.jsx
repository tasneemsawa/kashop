import { Box, Card, CircularProgress, Container, Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCategories } from '../../Hooks/useCategories'
import Styles from './Styles'
import {
    Widgets as WidgetsIcon,

} from '@mui/icons-material';
import { useTranslation } from 'react-i18next'
import ErrorState from '../Errors/Errors'
export default function Categories() {
    const navigate = useNavigate()
    const { isError, isLoading, data } = useCategories()
    const { t } = useTranslation();

    if (isLoading)
        return <CircularProgress></CircularProgress>
    if (isError)
        return <Box sx={{ my: 7, mx: 8 }}> <ErrorState /></Box>

    return (
        <>
                <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 4 }}>
                        <WidgetsIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
                        <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">{t("Categories")}</Typography>
                    </Stack>
                    {
                        <Grid container spacing={3}>
                            {data.response.map(categorie =>
                                <Grid key={categorie.id}
                                    onClick={() => navigate(`CategoryProducts/${categorie.id}/${categorie.name}`)}
                                    size={{ xs: 12, sm: 6, md: 5, lg: 3 }}>
                                    <Card sx={Styles.mainBox} elevation={0}>
                                        <Typography
                                            sx={Styles.title}
                                        >
                                            {categorie.name}
                                        </Typography>
                                    </Card>
                                </Grid>


                            )

                            }
                        </Grid>
                    }
                </Box>
        </>
    )
}
