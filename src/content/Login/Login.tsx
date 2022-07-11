/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import { Input } from '../../components/atoms/Input'
import { PasswordInput } from '../../components/atoms/PasswordInput'
import { Title } from '../../components/atoms/Text'

export default function SignIn() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      email,
      password,
    })
    navigate('/dashboard')
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'grid',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#fdfdfd',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          backgroundColor: '#fff',
          borderRadius: 3,
          p: 3,
          justifyContent: 'center',
        }}
      >
        <Grid container>
          <Title text="Login" />

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Input fullWidth required setValue={setEmail} value={email} label="Email" />
            <PasswordInput fullWidth required setValue={setPassword} value={password} label="Password" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="space-around">
              <Link href="/sign-up" variant="body2" sx={{ textDecoration: 'none', color: '#3d3d3d' }}>
                Sign Up
              </Link>
              <Link href="/sign-up" variant="body2" sx={{ textDecoration: 'none', color: '#3d3d3d' }}>
                Forgot your password?
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Container>
  )
}
