import React, { useState } from 'react'
import {
  Box, Card, Typography, TextField, MenuItem, Select,
  Button, StepButton, Stack, Stepper, Step, Container, CircularProgress, CardMedia, FormControlLabel, Paper, FormControl, RadioGroup, Radio
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import CustomStepper from '../../components/CustomStepper/CustomStepper';
import { useTranslation } from 'react-i18next';
import useCart from '../../Hooks/useCart';
import { useProducts } from '../../Hooks/useProducts';
import { Styles } from './Styles';

//image
import PixIcon from '@mui/icons-material/Pix';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import PaymentsIcon from '@mui/icons-material/Payments'; // للكاش
import CreditCardIcon from '@mui/icons-material/CreditCard'; // للفيزا
import useCheckout from '../../Hooks/useCheckout';
export default function Checkout() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  let { isLoading: isLoadingProduct, isError: isErrorProduct, data: products } = useProducts()
  let { data, isLoading, isError } = useCart()

  
  const { serverErrors,checkout } = useCheckout();
  const{mutate:checkoutFun ,isError:isErrorCheckout, isPending:isPendingCheckout}=checkout

  const [method, setMethod] = useState('cash');

  if (isLoading||isPendingCheckout||isLoadingProduct) return <CircularProgress></CircularProgress>

  if (isError||isErrorCheckout||isErrorProduct) return <Typography>error</Typography>

  return (
    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">

        {/* payment cycle */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomStepper indexStep={1} />
        </Box>
        <Stack spacing={2} sx={{ my: 7, mx: 10 }}>
          {data.items.map((item) => (
            <Card
              key={item.productId}
              variant="outlined"
              sx={Styles.card}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <CardMedia
                  component="img"
                  height="100%"
                  sx={Styles.cardMedia}
                  image={products.response.data.find(p => p.id === item.productId).image}
                  title={item.productName}
                  alt={item.productName}
                />
                <Box sx={{ flexGrow: 1, alignSelf: "flex-start", py: 3 }}>
                  <Typography fontWeight="500" color="secondary" sx={{ fontSize: "18px", mb: 5 }}>
                    {item.productName}
                  </Typography>
                  <Typography color="muted">
                    ${item.price.toFixed(2)} x {item.count} =
                    <Typography component={"span"} sx={{ color: 'primary.main', fontWeight: 'bold', marginLeft: '8px' }}>
                      ${(item.totalPrice).toFixed(2)}
                    </Typography>
                  </Typography>
                </Box>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Box sx={{ mt: 3, py: 5 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: "20px" }}>
            <PixIcon sx={{ color: 'primary.main', fontSize: '32px' }} />
            <Typography fontWeight="bold" fontSize={"25px"} color="secondary.main">{t("Payment Method")}</Typography>
          </Stack>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              variant={method === 'cash' ? 'contained' : 'outlined'}
              fullWidth
              startIcon={<MonetizationOnIcon />}
              onClick={() => setMethod('cash')}
              sx={Styles.paymentMethodButoon}
            > <Typography sx={{ m: "5px" }}> {t("Cash")}</Typography>

            </Button>
            <Button
              variant={method === 'visa' ? 'contained' : 'outlined'}
              fullWidth
              startIcon={<CreditCardIcon />}
              onClick={() => setMethod('visa')}
              sx={Styles.paymentMethodButoon}
            > <Typography sx={{ m: "5px" }}>  {t("Visa")}</Typography>
            </Button>
          </Box>
        </Box>

        {/* footer */}
        {data.items.length > 0 && (
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 30 }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button variant="contained"
                onClick={() => checkoutFun({paymentMethod:method})}
                sx={Styles.addButton}
              >{t("Pay Now")}</Button>
              <Button variant="contained"
                onClick={() => navigate("/shop")}
                sx={Styles.addButton}
              >{t("Continue Shopping")}</Button>
            </Box>
            <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
              Total: <Typography component={"span"} sx={{ color: 'primary.main', fontWeight: "700", fontSize: "18px" }}>${data.cartTotal.toFixed(2)}</Typography>
            </Typography>
          </Box>
        )}


      </Container>
    </Box>)
}
