import React from 'react'
import {
  Box,
  Button, Stepper, Step,
} from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useNavigate } from 'react-router-dom';

export default function CustomStepper({ indexStep }) {

  const navigate = useNavigate()
  const steps = ['Cart', 'Checkout', 'Payment', 'Review']

  const handleStep = (step, label) => () => {
    navigate(`/${label.toLowerCase()}`)
  };


  return (
    <>
      <Box sx={{ width: '60%' }}>
        <Stepper nonLinear activeStep={indexStep}
          connector={
            <StepConnector
              sx={{
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: "#ffe1e6",
                  borderTopWidth: 4,
                  borderRadius: 1,
                },
                [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
                  borderColor: 'primary.main',
                },
                [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
                  borderColor: 'primary.main',
                },
              }}
            />
          }
        >
          {steps.map((label, index) => (
            <Step key={label} completed={indexStep >= index}  >
              <Button onClick={handleStep(index, label)} disabled={index == 3}
                sx={{
                  borderRadius: "300px",
                  color: index <= indexStep ? "white" : "primary.main",
                  padding: "7px 20px",
                  backgroundColor: index > indexStep ? "#ffe1e6" : "primary.main",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 600
                }}

              >
                {index + 1}.{" " + label}
              </Button>
            </Step>
          ))}
        </Stepper>

      </Box>


    </>



  );
}
