/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box, Card, Stack, styled, Typography
} from '@mui/material'
import { Label } from 'recharts'

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

type Props = {
  product: {
    name: string,
    price: string,
    status: string,
    salePrice?: string
  }
}

const Product: React.FC<Props> = ({ product }) => {
  const {
    name, price, status, salePrice
  } = product
  return (
    <Card sx={{
      borderRadius: 5,
      height: 'auto',
      width: 'auto',
      color: 'rgb(33, 43, 54)',
      margin: '5px',
    }}
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            color={(status === 'sale' && 'error') || 'info'}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle
          alt={name}
          src="https://minimal-kit-react.vercel.app/static/mock-images/products/product_1.jpg"
        />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="/dashboard" color="inherit" style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle2" noWrap style={{ color: '#000', fontWeight: 600 }}>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          {salePrice && (
            <Stack direction="row" justifyContent="flex-start">
              <Typography style={{ textDecoration: 'line-through', marginRight: 15 }}>
                $
                {salePrice}
              </Typography>
            </Stack>
          )}
          <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
            $
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default Product
