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

export default function Cart() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  let { data, isLoading, isError } = useCart()
  let { removeCartMutation } = useRemoveFromCart()
  let { mutate: removeItem, isPending } = removeCartMutation

  let { updateCartMutation } = useUpdateCartItem()
  let { mutate: updateItem, isPending: updatePending } = updateCartMutation


  console.log(data)
  const [products, setProducts] = useState([
    { id: 1, qty: 10, name: "Waterproof Mascara", price: 187, rating: 4, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/80/20/03/802003da540474e882c6211d28cf1d45.jpg" },
    { id: 2, qty: 2, name: "Dead Sea Bath Salts", price: 217, rating: 3, category: "Eyeglasses", image: "https://i.pinimg.com/1200x/15/07/b5/1507b519f1976dd3090ae886fe67f0f7.jpg" },
    { id: 3, qty: 4, name: "Xiaomi", price: 171, rating: 5, category: "Watches", image: "https://i.pinimg.com/736x/86/6d/cf/866dcff7520d465f3dcd6635c82380ea.jpg" },
    { id: 4, qty: 1, name: "Kossil Watch Brown", price: 117, rating: 4, category: "Watches", image: "https://i.pinimg.com/736x/a8/e4/76/a8e4762d2a85f820df68722b1376a02c.jpg" },
  ]);
  const updateQty = (id, type) => {
    setProducts(products.map(item =>
      item.id === id
        ? { ...item, qty: type === 'add' ? item.qty + 1 : Math.max(1, item.qty - 1) }
        : item
    ));
  };
  const deleteItem = (id) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const handleCount = (id, type, currentCount) => {
    let newCount = type === 'add' ? currentCount + 1 : currentCount - 1
    console.log(newCount)

    updateItem({ id, count: newCount })
  }
  const totalAmount = products.reduce((acc, item) => acc + (item.price * item.qty), 0);
  if (isLoading) return <CircularProgress></CircularProgress>

  if (isError) return <Typography>error</Typography>

  return (

    <Box elevation={0} sx={{ minHeight: '100vh', py: 7 }}>
      <Container maxWidth="lg">
        {/* payment cycle */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomStepper indexStep={0} />
        </Box>
        <TableContainer>
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
        </TableContainer>
        {/* <Stack spacing={2} sx={{ my: 7, mx: 10 }}>
          {products.map((item) => (
            <Card
              key={item.id}
              variant="outlined"
              sx={Styles.card}
            >
              <IconButton
                onClick={() => deleteItem(item.id)}
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
                  image={item.image}
                  title={item.name}
                  alt={item.name}
                />
                <Box sx={{ flexGrow: 1, alignSelf: "flex-start", py: 3 }}>
                  <Typography fontWeight="500" color="secondary" sx={{ fontSize: "18px", mb: 5 }}>
                    {item.name}
                  </Typography>
                  <Typography color="muted">
                    ${item.price.toFixed(2)} x {item.qty} =
                    <Typography component={"span"} sx={{ color: 'primary.main', fontWeight: 'bold', marginLeft: '8px' }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </Typography>
                  </Typography>
                </Box>

                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <IconButton
                    onClick={() => updateQty(item.id, 'remove')}
                    size="small"
                    sx={Styles.actionButton}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography fontWeight="bold" color={"secondary"}>{item.qty}</Typography>

                  <IconButton
                    onClick={() => updateQty(item.id, 'add')}
                    size="small"
                    sx={Styles.actionButton}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack> */}


        {/* footer */}
        {products.length > 0 && (
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
              Total: <Typography component={"span"} sx={{ color: 'primary.main', fontWeight: "700", fontSize: "18px" }}>${totalAmount.toFixed(2)}</Typography>
            </Typography>
          </Box>
        )}

      </Container>
    </Box>
  )
}
