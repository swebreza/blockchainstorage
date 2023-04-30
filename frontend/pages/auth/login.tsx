import { useState } from "react";
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Link from 'next/link'
const theme = createTheme()

export default function SignIn() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await axios.post(
        'http://localhost:8000/api/signin',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(response.data)
      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('email', response.data.result.email)
      sessionStorage.setItem('id', response.data.result._id)
      console.log(sessionStorage.getItem('token'))
      console.log(sessionStorage.getItem('id'))
      console.log(sessionStorage.getItem('email'))
      alert('User Logged In Successfully!!!')

      router.push('../components/allFiles')
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs' style={{backgroundColor:'white',color:'black',borderRadius:'1rem'}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleChange}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href='./signup'  className='underline'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {error && <div className='text-red-500'>{error}</div>}
        </Container>
      </ThemeProvider>
    </>
  )
}
