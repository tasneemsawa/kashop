import React, { useContext } from 'react'
import {
  Box, Grid, Typography, TextField, MenuItem, Select,
  Button, StepButton, Stack, Stepper, Step, Container
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import CustomStepper from '../../components/CustomStepper/CustomStepper';

export default function Checkout() {
  return (
    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">

        {/* payment cycle */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomStepper indexStep={1}/>
        </Box>


      </Container>
    </Box>  )
}
