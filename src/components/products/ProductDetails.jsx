import React from 'react'
import useProductDetails from '../../hooks/useProductDetails'
import { CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const {id} = useParams();
  const {isLoading, isError, data}=useProductDetails(id);
  if(isLoading) return <CircularProgress />;
  if(isError) return <Typography>Error</Typography>;



  return (
    <>
      <Typography variant="h4">Product name: {data.name}</Typography>
      <Typography variant="h4">Price: {data.price}</Typography>
    </>
  )
}
