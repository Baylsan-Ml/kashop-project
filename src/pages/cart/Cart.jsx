import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const {data, isLoading, isError}= useCart();
    console.log(data);
    const {mutate:removeItem, isPending:isRemovingItem}=useRemoveFromCart();
    const {mutate:updateItem, isPending:isUpdatingItem}=useUpdateCartItem();
    const navigate = useNavigate();
    const handleUpdate=(productId, action)=>{
        const item= data.items.find(i=>i.productId== productId)
        if(action== '-'){
            updateItem({productId, count:item.count-1})
        }else{
            updateItem({productId, count:item.count+1})
        }
    }
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography>Error</Typography>

  return (
    <Container component='section' sx={{display:'flex', justifyContent:'center' }}>
        <Box sx={{minHeight:'70vh', m:5, width:'100%',
   display:'flex', flexDirection:'column', justifyContent:'flex-start', borderRadius: '5px'}}>
            <TableContainer>
        <Table sx={{}}>
            <TableHead>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Product Name</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Price</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Quantity</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Total</TableCell>
                <TableCell sx={{fontWeight:'bold', fontSize:'large'}}>Action</TableCell>
            </TableHead>

            <TableBody>
                {data.items.map(item=>
                    <TableRow key={item.productId}>
                        <TableCell sx={{fontSize:'17px', fontWeight:'bold'}}>{item.productName}</TableCell>
                        <TableCell sx={{fontSize:'17px'}}>{item.price}</TableCell>
                        <TableCell sx={{fontSize:'17px'}}>
                            <IconButton
                            onClick={()=>handleUpdate(item.productId, '-')}
                            > <RemoveIcon sx={{color:'#e38792', mr:1}} /></IconButton>
                            {item.count}
                             <IconButton
                            onClick={()=>handleUpdate(item.productId, '+')}
                            > <AddIcon sx={{color:'#e38792', ml:1}}/> </IconButton>
                            </TableCell>
                        <TableCell sx={{fontSize:'17px'}}>{item.totalPrice}</TableCell>
                        <TableCell sx={{fontSize:'17px'}}>
                            <Button sx={{ color:'#f2efe8', borderRadius:'10px', fontWidth:'bold'}} color='tertiary' variant='contained'
                            onClick={()=>removeItem(item.productId)}
                            disabled={isRemovingItem}>
                                remove</Button>
                        </TableCell>
                    </TableRow>
                )}

                <TableRow>
                    <TableCell colSpan={5} align='right' sx={{fontSize:'17px', fontWeight:'bold', pr:11}}> Cart Total:{data.cartTotal}$</TableCell>
                   </TableRow>
            </TableBody>
        </Table>
    </TableContainer>

    <Box sx={{display:'flex', gap:2, mt:5, justifyContent:'space-between'}}>
        <Button variant='contained' onClick={()=>navigate('/')} 
        sx={{ color:'#4e090a', borderRadius:'10px', fontWeight:'bold'}}
        >Continue Shopping
        </Button>
          <Button variant='contained' onClick={()=>navigate('/checkout')} color='info'
        sx={{ color:'#f2efe8',  borderRadius:'10px', fontWeight:'bold'}}>
            Proceed to Checkout
            </Button>
    </Box>
        </Box>
    </Container>
  )
}
