import React from 'react'
import useProfile from '../../hooks/useProfile';
import { Box, CircularProgress, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ProfileOrders() {
  const{data, isLoading, isError}= useProfile();
      const {t}= useTranslation();
  
      if(isLoading) return <CircularProgress color='primary.main'/>
      if(isError) return <Typography>Error</Typography>
  
      console.log(data);
  return (
    <Container>
      <Typography variant='h3' sx={{textAlign: 'center', textShadow:'2px 2px 1px #fcc050', py:5}} color='primary.main' >
              {t("Orders")}
              </Typography>
       <Box sx={{minHeight:'70vh', m:5, width:'100%',
   display:'flex', flexDirection:'column', justifyContent:'flex-start', borderRadius: '5px'}}>
     <TableContainer>
      <Table >
            <TableHead>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>{t("Order Number")}</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>{t("Order Price")}</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>{t("Payment Status")}</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>{t("Order Status")}</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>{t("Order Date")}</TableCell>
            </TableHead>
            
            <TableBody sx={{textAlign:'center'}}>
              {data.orders.map((order)=>
              <TableRow key={order.id}>
                 <TableCell sx={{fontSize:'17px', fontWeight:'bold', textAlign:'center'}}>{order.id}</TableCell>
                 <TableCell sx={{fontSize:'17px', textAlign:'center' }}>{order.amountPaid}</TableCell>
                 <TableCell sx={{fontSize:'17px', textAlign:'center' }}>{order.paymentStatus}</TableCell>
                 <TableCell sx={{fontSize:'17px', textAlign:'center' }}>{order.status}</TableCell>
                 <TableCell sx={{fontSize:'17px', textAlign:'center'}}>{order.orderDate}</TableCell>
              </TableRow>
              )}
            </TableBody>
            </Table>
     </TableContainer>
   </Box>
    </Container>
  )
}
