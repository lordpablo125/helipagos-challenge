'use client'

import { IconButton, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'People', path: '/people' },
    { label: 'Planets', path: '/planets' },
    { label: 'Starships', path: '/starships' }
  ]
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1em' }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            IC
          </IconButton>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, flexGrow: 1 }}
          >
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} style={{ color: 'white' }}>
                <Typography variant='body1'>{link.label}</Typography>
              </Link>
            ))}
          </Box>

          <Box>
            <Link href={'/login'} style={{ color: 'white' }}>
              <Typography variant='body1'>login</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
