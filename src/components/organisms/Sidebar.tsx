/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Backpack from '@mui/icons-material/Backpack'
import BarChart from '@mui/icons-material/BarChart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Logout from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Person from '@mui/icons-material/Person'
import {
  Grid,
  ListItemButton, ListItemIcon, ListItemText
} from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

import account from '../../_mock/account'
import { Title } from '../atoms/Text'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    boxShadow: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      border: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

export function Sidebar() {

  const items = [{
    label: 'Dashboard',
    element: (<BarChart />),
    url: '/dashboard',
  }, {
    label: 'User',
    element: (<Person />),
    url: '/sign-up',
  }, {
    label: 'Product',
    element: (<Backpack />),
    url: '/listing',
  }, {
    label: 'Logout',
    element: (<Logout />),
    url: '/login',
  },
  ]

  const subitems = [{
    label: 'Current month',
    element: (<AssignmentIcon />),
  }, {
    label: 'Last quarter',
    element: (<AssignmentIcon />),
  }, {
    label: 'Year-end sale',
    element: (<AssignmentIcon />),
  }
  ]

  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const navigate = useNavigate()

  return (
    <div>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px',
            bgcolor: 'rgb(249, 250, 251)',
            boxShadow: 'none',
          }}
        >
          <IconButton
            edge="start"
            color="primary"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              color: '#000',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="space-between">
            <Title text={`Hi ${account.displayName}, welcome back`} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <List component="nav">
          {
            items.map((row) => (
              <ListItemButton
                key={row.label}
                onClick={() => navigate(`${row.url}`)}
                style={{
                  borderRadius: 5,
                  margin: 5,
                }}
              >
                <ListItemIcon>
                  {row.element}
                </ListItemIcon>
                <ListItemText
                  primary={row.label}
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                />
              </ListItemButton>
            ))
          }

          <Divider sx={{ my: 1 }} />
          {
            subitems.map((row) => (
              <ListItemButton key={row.label}>
                <ListItemIcon>
                  {row.element}
                </ListItemIcon>
                <ListItemText
                  primary={row.label}
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                />
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
    </div>
  )
}
