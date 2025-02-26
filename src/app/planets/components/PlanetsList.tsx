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
import { Planet } from '@/types/types'

type PlanetsListProp = {
  planets: Planet[]
  isLoadingPlanets: boolean
  errorLoading: boolean
}

const PlanetsList: FC<PlanetsListProp> = ({
  planets,
  isLoadingPlanets,
  errorLoading
}) => {
  const [search, setSearch] = useState('')

  if (isLoadingPlanets) {
    return <>Loading...</>
  }

  if (errorLoading) {
    return <>Error!</>
  }

  const filteredPlanets = planets?.filter((planet) =>
    planet.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Box className='mb-10'>
          <Typography className='text-center' variant='h2'>
            Planets List
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
              <TableCell>gravity</TableCell>
              <TableCell>climate</TableCell>
              <TableCell>population</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {planets?.length > 0 &&
              filteredPlanets.map(
                ({ id, name, climate, gravity, population }) => (
                  <TableRow
                    key={name + population}
                    className='hover:bg-slate-300'
                  >
                    <TableCell>{name}</TableCell>
                    <TableCell>{gravity}</TableCell>
                    <TableCell>{climate}</TableCell>
                    <TableCell>{population}</TableCell>
                    <TableCell>
                      <Box>
                        <Link
                          href={`/planets/${id}`}
                          className='ml-auto mr-4'
                          passHref
                        >
                          <Button color='inherit' variant='outlined'>
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

export default PlanetsList
