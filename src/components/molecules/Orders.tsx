import * as React from 'react'
import { Card } from '@mui/material'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { Title } from '../atoms/Text'

function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return {
    id, date, name, shipTo, paymentMethod, amount
  }
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
]

const cells = [
  'Date', 'Name', 'Ship to', 'Payment Method', 'Sale Amount'
]

function Orders() {
  return (
    <Card sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }}
    >
      <Title text="Recent Orders" sx={{ fontSize: '1.3rem' }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            {cells.map((i) => (
              <TableCell sx={{ fontWeight: 700 }}>{i}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="/listing"
        onClick={(event) => event.preventDefault()}
        sx={{ mt: 3, textDecoration: 'none', fontSize: '0.9rem' }}
      >
        See more orders
      </Link>
    </Card>
  )
}

export default Orders
