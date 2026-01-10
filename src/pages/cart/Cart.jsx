import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Cart() {
    const {data, isLoading, isError}= useCart();
    const {mutate:removeItem, isPending:isRemovingItem}=useRemoveFromCart();
    const {mutate:updateItem, isPending:isUpdatingItem}=useUpdateCartItem();
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
    <Container>
        <Box component='section' sx={{py:5}}>
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
                            <Button sx={{backgroundColor:'#4e090a'}} variant='contained'
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
        </Box>
    </Container>
  )
}
