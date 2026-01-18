import React, { useState } from 'react'
import useCart from '../../../hooks/useCart';
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCheckout from '../../../hooks/useCheckout';

export default function Checkout() {

  const {data, isLoading, isError}=useCart();
  const[paymentMethod, setPaymentMethod]= useState('cash');
  const{mutate:checkout, isPending:isCheckoutPending, isError:isCheckotError}=useCheckout();

  if(isLoading) return <CircularProgress/>
  if(isError) return <Typography>Error</Typography>
  console.log(data);



  return (
    <Container component='section' sx={{display:'flex', justifyContent:'center' }}>
      <Box sx={{minHeight:'70vh', m:5, width:'100%',
   display:'flex', flexDirection:'column', justifyContent:'flex-start', borderRadius: '5px'}}>
    <TableContainer sx={{mb:3}}>
        <Table sx={{}}>
            <TableHead>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
            </TableHead>

            <TableBody>
               {data.items.map(item=>
                <TableRow key={item.productId}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.count}</TableCell>
                  <TableCell>{item.totalPrice}</TableCell>
                </TableRow>
               )}

               <TableRow >
                    <TableCell colSpan={4} align='right' > Cart Total:{data.cartTotal}$</TableCell>
                   </TableRow>
            </TableBody>
            </Table>
    </TableContainer>

    <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <FormControl fullWidth sx={{maxWidth:'30%'}}>
      <InputLabel id="payment-method">Payment Method</InputLabel>
       <Select labelId="payment-method"
       value={paymentMethod}
       onChange={(e)=>setPaymentMethod(e.target.value)}
       >
    <MenuItem value={'cash'}>Cash</MenuItem>
    <MenuItem value={'visa'}>Visa</MenuItem>
  </Select>
    </FormControl>

    <Button variant='contained' sx={{width:'30%', py:2, borderRadius:'10px'}}>Pay Now</Button>
    </Box>
       
    </Box>
    </Container>

        
  )
}
