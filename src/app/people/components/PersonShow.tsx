'use client'
import { Person } from '@/types/types'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

type PersonShowProps = {
  person: Person
  isLoading: boolean
  error: boolean | null
}

const PersonShow: FC<PersonShowProps> = ({ person, isLoading, error }) => {
  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error!</>
  }

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        Person detail
      </Typography>
      <Box
        component='form'
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField
          id='Name-disabled'
          defaultValue={person?.name}
          label='Name'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.birth_year}
          label='birth_year'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.mass}
          label='mass'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.hair_color}
          label='hair_color'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.skin_color}
          label='skin_color'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.eye_color}
          variant='standard'
          label='eye_color'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.gender}
          variant='standard'
          label='gender'
          disabled
        />

        <Box className='mx-auto'>
          <Link href='/people' className='ml-auto mr-4' passHref>
            <Button color='inherit' variant='contained'>
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default PersonShow
