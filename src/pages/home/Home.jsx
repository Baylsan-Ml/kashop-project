import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sales from '../../components/sales/Sales';
import Hero from '../../components/hero/Hero';
import Clients from '../../components/clients/Clients';
import Features from '../../components/features/Features';
import ProductsSection from '../../components/productSection/ProductsSection';
import StatsSection from '../../components/statsSection/StatsSection';

export default function Home() {

  return (
    <>
    <Hero />
    <Categories />
    <Sales />
    <StatsSection/>
    <ProductsSection />
    <Features/>
    <Clients />
    </>
  )
}
