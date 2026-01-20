
import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { t } from 'i18next';
import { Styles } from './Styles';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ErrorState from '../../../components/Errors/Errors';
import EmptyOrders from '../../../components/EmptyOrders/EmptyOrders';

const Orders = () => {
  let  data = useOutletContext();
  let {i18n}=useTranslation()
  console.log(data)
  return (
    <Box sx={{ maxWidth: '1200px', width: '100%' }}>
      <Box sx={{ mb: 3, display: "flex", gap: 1, alignItems: "center" }}>
        <LocalMallOutlinedIcon sx={{ color: 'primary.main', fontSize: 28 }} />
        <Typography sx={Styles.title}>
          {t("My Orders")}
        </Typography>
      </Box>

      {/*Table Header */}
      <Box sx={Styles.headerTitle}>
        <Typography sx={[Styles.header, { flex: 1, }]}>{t("Order ID")}</Typography>
        <Typography sx={[Styles.header, { flex: 1, }]}>{t("Status")}</Typography>
        <Typography sx={[Styles.header, { flex: 1.5 }]}>{t("payment Status")}</Typography>
        <Typography sx={[Styles.header, { flex: 1.5, }]}>{t("Date")}</Typography>
        <Typography sx={[Styles.header, { flex: 1.9, }]}>{t("Amount Paid")}</Typography>
        {/* <Box sx={{ width: 40 }} /> */}
      </Box>

      {data &&data.orders?.length?data.orders.map((order, index) => (
        <Box key={index} sx={Styles.rowView}>
          <Typography sx={Styles.orderId}> #{order.id} </Typography>

          <Box sx={{ flex: 1, mb: { xs: 1, md: 0 } }}>
            <Box component="span" sx={[Styles.orderStatus, {
              bgcolor: order.status == 5 ? " #e7f9ed" :
                order.status == 3 ? "#E3F2FD" : "#0f346033",
              color: order.status == 5 ? " #2fb45d" :
                order.status == 3 ? "#1976D2" : "#4b5563",

            }]}>
              {order.status == 3 ? t("Paid") :
                order.status == 5 ? t("Delivered") : order.status}
            </Box>
          </Box>

          <Box sx={{ flex: 1.5, mb: { xs: 1, md: 0 } }}>
            <Box component="span" sx={[Styles.orderStatus, {
              bgcolor: order.paymentStatus == "paid" ? "#E3F2FD" :
                order.paymentStatus == "unpaid" ? "#FCE4EC" : "#FFF3E0",
              color: order.paymentStatus == "paid" ? "#1976D2" :
                order.paymentStatus == "unpaid" ? "#C2185B" : "#E65100",

            }]}>
              {order.paymentStatus || t('Pending')}
            </Box>
          </Box>

          <Typography sx={Styles.orderDate}>
            {new Date(order.orderDate).toLocaleDateString()}
          </Typography>

          <Typography sx={Styles.orderDate}>
            ${order.amountPaid}
          </Typography>

          <IconButton size="small" sx={Styles.arrowButton}>
            <ArrowForwardIcon sx={{ color: '#7D879C', fontSize: 20,transform:i18n.language == "ar"?'rotate(180deg)' : 'rotate(0deg)' }} />
          </IconButton>
        </Box>
      )):data.orders?.length==0?
      <EmptyOrders/>
      :<ErrorState/>
    
      }
    </Box>
  );
};

export default Orders;