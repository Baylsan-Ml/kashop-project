import React, { useState } from 'react'
import useCart from '../../../hooks/useCart';
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCheckout from '../../../hooks/useCheckout';

export default function Checkout() {

  const {data, isLoading, isError}=useCart();
  const[paymentMethod, setPaymentMethod]= useState('cash');
  const{mutate:checkout, isPending:isCheckoutPending, isError:isCheckotError}=useCheckout();
  const handleCheckout= ()=>{
    checkout({paymentMethod})
  }

  if(isLoading) return <CircularProgress/>
  if(isError) return <Typography>Error</Typography>
  



  return (
    <Container component='section' sx={{display:'flex', justifyContent:'center' }}>
      <Box sx={{minHeight:'70vh', m:5, width:'100%',
   display:'flex', flexDirection:'column', justifyContent:'flex-start', borderRadius: '5px'}}>
    <TableContainer sx={{mb:3}}>
        <Table sx={{}}>
            <TableHead >
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Product Name</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Price</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Quantity</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Total</TableCell>
            </TableHead>

            <TableBody>
               {data.items.map(item=>
                <TableRow key={item.productId}>
                  <TableCell sx={{fontSize:'17px'}}>{item.productName}</TableCell>
                  <TableCell sx={{fontSize:'17px'}}>{item.price}</TableCell>
                  <TableCell sx={{fontSize:'17px'}}>{item.count}</TableCell>
                  <TableCell sx={{fontSize:'17px'}}>{item.totalPrice}</TableCell>
                </TableRow>
               )}

               <TableRow >
                    <TableCell colSpan={4} align='right' sx={{fontWeight:'bold', fontSize:'large'}}
                    > Cart Total: {data.cartTotal}$</TableCell>
                   </TableRow>
            </TableBody>
            </Table>
    </TableContainer>

    <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <FormControl fullWidth sx={{maxWidth:'30%'}}>
      <InputLabel id="payment-method" >Payment Method</InputLabel>
       <Select labelId="payment-method" 
       value={paymentMethod}
       onChange={(e)=>setPaymentMethod(e.target.value)}
       >
    <MenuItem value={'cash'} sx={{fontWeight:'bold'}}>Cash</MenuItem>
    <MenuItem value={'visa'}  sx={{fontWeight:'bold'}}>Visa</MenuItem>
  </Select>
    </FormControl>

    <Button variant='contained' sx={{width:'30%', py:2, borderRadius:'10px', fontWeight:'bold', fontSize:'15px'}}
    onClick={handleCheckout}
    >Pay Now</Button>
    </Box>
       
    </Box>
    </Container>

        
  )
}
