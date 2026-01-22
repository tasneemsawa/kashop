import * as React from 'react';
import {
  Box, Grid, Typography,
  CardMedia, Rating, Card, CardContent, IconButton, Stack
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { Styles } from './Styles';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function ProductGridCard({product,disable=false}) {


  const navigate = useNavigate()

  return (
    <Card elevation={0} sx={Styles.card} >
      {product.discount ?
        <Box sx={Styles.discountLable}>
          {product.discount}% off
        </Box>
        : null}
      <Box className="action-buttons" sx={Styles.actionButtons}>
        <IconButton size="small"         onClick={() => {disable?null: navigate(`/productDetails/${product.id}`)}}><VisibilityOutlinedIcon fontSize="small" /></IconButton>
        <IconButton size="small" onClick={() => navigate("/")}><FavoriteBorderOutlinedIcon fontSize="small" /></IconButton>

      </Box>
      <CardMedia
      disabled={disable}
        component="img"
        height="300px"
        sx={Styles.cardMedia}
        image={product.image}
        title={product.name}
        alt={product.name}
        onClick={() => {disable?null: navigate(`/productDetails/${product.id}`)}}
      />
      <CardContent       
        sx={{ p: "16px" }} onClick={() =>{disable?null: navigate(`/productDetails/${product.id}`)}}>
        <Typography variant="subtitle1" noWrap sx={Styles.productName} >{product.name}</Typography>
        <Rating
          name="product-rating"
          value={product.rate || 0}
          precision={0.5}
          readOnly
          size="small"
          sx={{ color: 'customYellow.main', mt: 1 }}
        />

        <Typography color="primary" sx={Styles.price}>

        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontWeight="700" color="#E94560">${product.price.toFixed(2)}</Typography>
         {product.oldPrice? <Typography fontWeight="500" sx={{ textDecoration: 'line-through', color: '#7D879C' }}>
            ${product.oldPrice.toFixed(2)}
          </Typography>:null}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -3 }}>
          <IconButton size="small" sx={Styles.addButoon}>
            <Add fontSize="small" sx={Styles.addIcon} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>




  );
}
