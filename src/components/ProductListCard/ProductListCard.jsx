import * as React from 'react';
import {
  Box, Grid, Typography,
  CardMedia, Rating,  Card, CardContent, IconButton,
} from '@mui/material';
import {  Add } from '@mui/icons-material';
import { Styles } from './Styles';
import { useNavigate } from 'react-router-dom';

export default function ProductListCard({product}) {
 
  const navigate=useNavigate()



  return (
    <Card elevation={0} sx={Styles.card} onClick={() => navigate(`/productDetails/${product.id}`)}>
      <CardMedia
        component="img"
        height="100%"
        sx={Styles.cardMedia}
        image={product.image}
        title={product.name}
        alt={product.name}
      />
      <CardContent sx={{ p: "20px" ,width:"100%"}}>
        <Typography variant="subtitle1" noWrap sx={Styles.productName} >{product.name}</Typography>
        <Rating
          name="product-rating"
          value={product.rating || 0}
          precision={0.5}
          readOnly
          size="small"
          sx={{ color: 'customYellow.main', mt: 1 }}
        />
        <Typography color="primary" sx={Styles.price}>
          ${product.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -3 ,alignItems:"flex-end"}}>
          <IconButton size="small" sx={Styles.addButoon}>
            <Add fontSize="small" sx={Styles.addIcon} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>




  );
}
