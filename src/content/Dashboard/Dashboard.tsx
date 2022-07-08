import * as React from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import BugReportIcon from '@mui/icons-material/BugReport'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import Person from '@mui/icons-material/Person'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

import Chart from '../../components/molecules/Chart'
import Deposits from '../../components/molecules/Deposits'
import Orders from '../../components/molecules/Orders'
import Summary from '../../components/molecules/Summary'
import { Sidebar } from '../../components/organisms/Sidebar'

const mdTheme = createTheme()

function DashboardContent() {

  return (
    <ThemeProvider theme={mdTheme}>
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
              <Grid
                container
                spacing={4}
                sx={{
                  width: '100%',
                  margin: '0 auto',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Grid item xs={12} sm={6} md={3}>
                  <Summary
                    title="Weekly Sales"
                    total={714.000}
                    icon={(<MonetizationOnIcon sx={{ color: 'rgb(16, 57, 150)' }} />)}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Summary
                    title="New Users"
                    total={135.281}
                    icon={(<Person sx={{ color: 'rgb(16, 57, 150)' }} />)}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Summary
                    title="Item Orders"
                    total={172.315}
                    icon={(<AnalyticsIcon sx={{ color: 'rgb(16, 57, 150)' }} />)}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Summary
                    title="Bug Reports"
                    total={234}
                    icon={(<BugReportIcon sx={{ color: 'rgb(16, 57, 150)' }} />)}
                  />
                </Grid>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Chart title="Recent Sales" />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Deposits />
              </Grid>
              <Grid item xs={12}>
                <Orders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
