import { Box, Card, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCategories } from '../../Hooks/useCategories'

export default function Categories() {

    const { isError, isLoading, data } = useCategories()
    if (isLoading)
        return <CircularProgress></CircularProgress>
    if (isError)
        return <Typography> error</Typography>

    return (
        <>
            <Container maxWidth="lg">
                <Box>
                    {
                        <Grid container spacing={3}>
                            {data.map(categorie =>
                                <Grid key={categorie.id} item size={{ xs: 12, sm: 6, md: 5, lg: 3 }}><Card>{categorie.name}</Card></Grid>


                            )

                            }
                        </Grid>
                    }
                </Box>
            </Container>
        </>
    )
}
