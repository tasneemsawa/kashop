import { Box, Card, CircularProgress, Container, Grid, Typography, Stack, Backdrop } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
export default function Loading({ open }) {

    const { t, i18n } = useTranslation();

    return (<Backdrop
        sx={{
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}
        open={open}
    >
        <CircularProgress
            color="inherit"
            size={60}
            thickness={4}
            sx={{
                filter: 'drop-shadow(0px 0px 10px rgba(255,255,255,0.5))'
            }}
        />
        <Typography
            variant="h6"
            sx={{
                fontWeight: 500,
                animation: 'pulse 1.5s infinite ease-in-out',
                '@keyframes pulse': {
                    '0%': { opacity: 0.6 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0.6 },
                }
            }}
        >
            {t("please_wait")}
        </Typography>
    </Backdrop>
    )
}


