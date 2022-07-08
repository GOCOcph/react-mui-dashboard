/* eslint-disable react/function-component-definition */
import React from 'react'
import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'

import { Subtitle, Title } from '../atoms/Text'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}))

type Props = {
  title: string,
  total: number;
  icon: any;
}

const Summary: React.FC<Props> = ({
  title, total, icon
}) => (
  <Card
    sx={{
      py: 5,
      borderRadius: 5,
      height: '18rem',
      margin: '1rem',
      width: 'auto',
      textAlign: 'center',
      color: 'secondary',
      bgcolor: 'rgb(209, 233, 252)',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }}
  >
    <IconWrapperStyle
      sx={{
        background: 'linear-gradient(135deg, rgba(16, 57, 150, 0) 0%, rgba(16, 57, 150, 0.24) 100%)',
      }}
    >
      {icon}
    </IconWrapperStyle>

    <Title text={total.toFixed(3)} sx={{ color: 'rgb(6, 27, 100)', fontSize: '2rem', marginY: '1rem' }} />

    <Subtitle
      text={title}
      variant="subtitle2"
      sx={{
        opacity: 0.72, color: 'rgb(6, 27, 100)', marginY: '1rem', fontSize: '0.8rem'
      }}
    />
  </Card>
)

export default Summary
