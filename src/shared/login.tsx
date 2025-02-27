'use client'
import { useState } from 'react'
import {
  TextField,
  Button,
  Alert,
  Container,
  Box,
  Typography
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/auth'

// pruebas_tecnica

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      router.push('/people') // Redirige al dashboard
    } catch (err) {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <Typography variant='h5' textAlign='center'>
          Iniciar Sesión
        </Typography>

        {error && <Alert severity='error'>{error}</Alert>}

        <TextField
          label='UserName'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label='pw'
          type='pw'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          login
        </Button>
      </Box>
    </Container>
  )
}
