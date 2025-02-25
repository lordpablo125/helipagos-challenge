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
        Person details
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
          label='Birth Year'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.mass}
          label='Mass'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.hair_color}
          label='Hair Color'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.skin_color}
          label='Skin Color'
          variant='standard'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.eye_color}
          variant='standard'
          label='Eye Color'
          disabled
        />
        <TextField
          id='outlined-disabled'
          defaultValue={person?.gender}
          variant='standard'
          label='Gender'
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
