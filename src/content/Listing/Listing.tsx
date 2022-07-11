import React from 'react'
import {
  Box, Container, CssBaseline, Grid, Toolbar
} from '@mui/material'

import Product from '../../components/molecules/Product'
import { Sidebar } from '../../components/organisms/Sidebar'

function Listing() {

  const products = [
    {
      name: 'Nike Air Force 1 NDESTRUKT', cover: 'test', price: '45,00', salePrice: '20,00', status: 'sale'
    },
    {
      name: 'Nike Air Force 1 NDESTRUKT', cover: 'test', price: '89,60', salePrice: '11,13', status: 'sale'
    },
    {
      name: 'Nike Air Force 1 NDESTRUKT', cover: 'test', price: '450,23', status: 'sale'
    },
    {
      name: 'Nike Air Force 1 NDESTRUKT', cover: 'test', price: '39,21', status: 'sale'
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light'
            ? 'rgb(249, 250, 251)'
            : theme.palette.grey[900]),
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.name} item xs={12} sm={6} md={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Listing
