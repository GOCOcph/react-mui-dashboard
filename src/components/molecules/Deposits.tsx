import * as React from 'react'
import { Card } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Subtitle, Title } from '../atoms/Text'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <Card sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      height: 300,
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }}
    >
      <Title text="Recent Deposits" sx={{ fontSize: '1.3rem' }} />
      <Subtitle text="$3,024.00" />
      <Typography color="text.secondary" sx={{ flex: 1, my: 2 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link
          color="primary"
          href="/dashboard"
          onClick={preventDefault}
          sx={{
            mt: 3,
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          View balance
        </Link>
      </div>
    </Card>
  )
}
