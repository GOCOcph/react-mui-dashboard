/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { Props } from 'react-apexcharts'
import Typography from '@mui/material/Typography'

export const Title: React.FC<Props> = ({ text, sx }) => (
  <Typography
    variant="h1"
    sx={{
      fontSize: '1.8rem',
      fontFamily: 'Poppins',
      lineHeight: '2.7',
      color: 'rgba(0, 0, 0, 0.87)',
      ...sx
    }}
  >
    {text}
  </Typography>
)

export const Subtitle: React.FC<Props> = ({ text, sx }) => (
  <Typography
    variant="subtitle1"
    sx={{
      fontSize: '1.5rem',
      fontFamily: 'Poppins',
      ...sx
    }}
  >
    {text}
  </Typography>
)
