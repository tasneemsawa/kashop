import React from 'react'
import {
  Box, Grid, Typography, Card, IconButton, Select,
  Button, CircularProgress, Stack, CardMedia, Step, Container, TableContainer, Table, TableHead, TableCell, TableBody, TableRow
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
import CustomStepper from '../../components/CustomStepper/CustomStepper';
import { useState } from 'react';
import { Styles } from './Styles';
import useCart from '../../Hooks/useCart';
import useRemoveFromCart from '../../Hooks/useRemoveFromCart';
import useUpdateCartItem from '../../Hooks/useUpdateCartItem';
import { useTranslation } from 'react-i18next';
import { useProducts } from '../../Hooks/useProducts';

export default function Cart() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  let { isLoading :isLoadingProduct, isError :isErrorProduct, data : products } = useProducts()
  // console.log(products.response.data)

  let { data, isLoading, isError } = useCart()
  let { removeCartMutation } = useRemoveFromCart()
  let { mutate: removeItem, isPending } = removeCartMutation

  let { updateCartMutation } = useUpdateCartItem()
  let { mutate: updateItem, isPending: updatePending } = updateCartMutation


  console.log(data)


  const handleCount = (id, type, currentCount) => {
    let newCount = type === 'add' ? currentCount + 1 : currentCount - 1
    console.log(newCount)

    updateItem({ id, count: newCount })
  }
  if (isLoading||isLoadingProduct) return <CircularProgress></CircularProgress>

  if (isError ||isErrorProduct) return <Typography>error</Typography>

  return (

    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">
        {/* payment cycle */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomStepper indexStep={0} />
        </Box>
        {/* <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Name</TableCell>
                <TableCell> Price</TableCell>
                <TableCell> Quantity</TableCell>
                <TableCell> Total</TableCell>
                <TableCell> Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.items.map(item => <TableRow key={item.productId}>
                <TableCell> {item.productName}</TableCell>
                <TableCell>  {item.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleCount(item.productId, "remove", item.count)} variant='contained' disabled={updatePending}>-</Button>
                  {item.count}
                  <Button onClick={() => handleCount(item.productId, "add", item.count)} variant='contained' disabled={updatePending} >+</Button>

                </TableCell>
                <TableCell>  {item.totalPrice}</TableCell>

                <TableCell> <Button
                  disabled={isPending}

                  onClick={() => removeItem(item.productId)}
                  color='error' variant='contained'>
                  "remove"
                </Button></TableCell>
              </TableRow>)}
              <TableRow>
                <TableCell align="right" colSpan={5}>  cart total : ${data.cartTotal}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
        <Stack spacing={2} sx={{ my: 7, mx: 10 }}>
          {data.items.map((item) => (
            <Card
              key={item.productId}
              variant="outlined"
              sx={Styles.card}
            >


              <IconButton
                disabled={isPending}
                onClick={() => removeItem(item.productId)}
                size="small"
                sx={Styles.iconButton}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

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
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <IconButton
                    onClick={() => handleCount(item.productId, "remove", item.count)}
                    disabled={updatePending}
                    size="small"
                    sx={Styles.actionButton}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography fontWeight="bold" color={"secondary"}>{item.count}</Typography>

                  <IconButton
                    onClick={() => handleCount(item.productId, "add", item.count)}
                    size="small"
                    disabled={updatePending}
                    sx={Styles.actionButton}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>


        {/* footer */}
        {data.items.length > 0 && (
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 30 }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button variant="contained"
                onClick={() => navigate("/checkout")}
                sx={Styles.addButton}
              >{t("Checkout")}</Button>
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
    </Box>
  )
}
