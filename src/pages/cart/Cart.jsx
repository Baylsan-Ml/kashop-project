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
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Action</TableCell>
            </TableHead>

            <TableBody>
                {data.items.map(item=>
                    <TableRow key={item.productId}>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell >
                            <IconButton
                            onClick={()=>handleUpdate(item.productId, '-')}
                            > <RemoveIcon sx={{color:'#e38792', mr:1}} /></IconButton>
                            {item.count}
                             <IconButton
                            onClick={()=>handleUpdate(item.productId, '+')}
                            > <AddIcon sx={{color:'#e38792', ml:1}}/> </IconButton>
                            </TableCell>
                        <TableCell >{item.totalPrice}</TableCell>
                        <TableCell>
                            <Button sx={{ color:'#f2efe8', borderRadius:'10px'}} color='tertiary' variant='contained'
                            onClick={()=>removeItem(item.productId)}
                            disabled={isRemovingItem}>
                                remove</Button>
                        </TableCell>
                    </TableRow>
                )}

                <TableRow>
                    <TableCell colSpan={4} align='right' > Cart Total:{data.cartTotal}$</TableCell>
                   </TableRow>
            </TableBody>
        </Table>
    </TableContainer>

    <Box sx={{display:'flex', gap:2, mt:5, justifyContent:'space-between'}}>
        <Button variant='contained' onClick={()=>navigate('/')} 
        sx={{ color:'#4e090a', borderRadius:'10px'}}
        >Continue Shopping
        </Button>
          <Button variant='contained' onClick={()=>navigate('/checkout')} color='info'
        sx={{ color:'#f2efe8',  borderRadius:'10px'}}>
            Proceed to Checkout
            </Button>
    </Box>
        </Box>
    </Container>
  )
}
