'use client'

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { FC, useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { Person } from '@/types/types'

type PeopleList = {
  people: Person[]
  isLoadingPeople: boolean
  errorLoading: boolean
}

const PeopleList: FC<PeopleList> = ({
  people,
  isLoadingPeople,
  errorLoading
}) => {
  const [search, setSearch] = useState('')

  if (isLoadingPeople) {
    return <>Loading...</>
  }

  if (errorLoading) {
    return <>Error!</>
  }

  const filteredPeople = people?.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Box className='mb-10'>
          <Typography className='text-center' variant='h2'>
            People List
          </Typography>
        </Box>

        <Box className='mb-4 w-full'>
          <TextField
            label='Search...'
            name='dni'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-4/5  mb-4 '
          />
          <Button
            className='h-14'
            variant='outlined'
            color='primary'
            onClick={() => setSearch('')}
          >
            Clear
          </Button>
        </Box>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ '& > th': { fontWeight: 700 } }}>
              <TableCell>Name</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>height</TableCell>
              <TableCell>birth_year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people?.length > 0 &&
              filteredPeople.map(
                ({ id, name, height, gender, birth_year }: any) => (
                  <TableRow
                    key={name + birth_year}
                    className='hover:bg-slate-300'
                  >
                    <TableCell>{name}</TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>{height}</TableCell>
                    <TableCell>{birth_year}</TableCell>
                    <TableCell>
                      <Box>
                        <Link
                          href={`/people/${id}`}
                          className='ml-auto mr-4'
                          passHref
                        >
                          <Button
                            className='bg-red-500'
                            color='inherit'
                            variant='outlined'
                          >
                            <EditNoteIcon />
                          </Button>
                        </Link>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PeopleList
