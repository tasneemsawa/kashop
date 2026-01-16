import { Box, Card, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCategories } from '../../Hooks/useCategories'

export default function Categories() {
    const navigate=useNavigate()
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
                            {data.response.map(categorie =>
                                <Grid key={categorie.id} 
                                onClick={()=>navigate(`CategoryProducts/${categorie.id}/${categorie.name}`)}
                                size={{ xs: 12, sm: 6, md: 5, lg: 3 }}><Card>{categorie.name}</Card></Grid>


                            )

                            }
                        </Grid>
                    }
                </Box>
            </Container>
        </>
    )
}
