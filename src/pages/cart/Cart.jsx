import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function Cart() {
    const {data, isLoading, isError}= useCart();
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
                    <TableRow key={item.id}>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                        <TableCell>
                            <Button color='error' variant='contained'>remove</Button>
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
