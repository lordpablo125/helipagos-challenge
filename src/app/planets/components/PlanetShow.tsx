'use client'
import { Planet } from '@/types/types'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

type PlanetShowProps = {
  planet: Planet
  isLoading: boolean
  error: boolean | null
}

const PlanetShow: FC<PlanetShowProps> = ({ planet, isLoading, error }) => {
  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error!</>
  }

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        Planet details
      </Typography>
      <Box
        component='form'
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField
          id='Name-disabled'
          defaultValue={planet?.name}
          label='Name'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.climate}
          label='climate'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.terrain}
          label='terrain'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.gravity}
          label='gravity'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.population}
          label='population'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.diameter}
          label='diameter'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.population}
          label='population'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={planet?.surface_water}
          label='surface_water'
          variant='standard'
          disabled
        />

        <Box className='mx-auto'>
          <Link href='/planets' className='ml-auto mr-4' passHref>
            <Button color='inherit' variant='contained'>
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default PlanetShow
