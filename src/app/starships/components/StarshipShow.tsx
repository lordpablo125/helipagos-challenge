'use client'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

type PlanetShowProps = {
  starship: any
  isLoading: boolean
  error: boolean | null
}

const PlanetShow: FC<PlanetShowProps> = ({ starship, isLoading, error }) => {
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
          defaultValue={starship?.name}
          label='Name'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.model}
          label='model'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.manufacturer}
          label='manufacturer'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.length}
          label='length'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.crew}
          label='crew'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.passengers}
          label='passengers'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.cargo_capacity}
          label='cargo_capacity'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.consumables}
          label='consumables'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.hyperdrive_rating}
          label='hyperdrive_rating'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.starship_class}
          label='starship_class'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.starship_class}
          label='starship_class'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={starship?.max_atmosphering_speed}
          label='max_atmosphering_speed'
          variant='standard'
          disabled
        />

        <Box className='mx-auto'>
          <Link href='/starships' className='ml-auto mr-4' passHref>
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
