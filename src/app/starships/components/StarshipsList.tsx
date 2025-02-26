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
import { Starship } from '@/types/types'

type StarshipsListProp = {
  starships: Starship[]
  isLoadingStarship: boolean
  errorLoading: boolean
}

const StarshipsList: FC<StarshipsListProp> = ({
  starships,
  isLoadingStarship,
  errorLoading
}) => {
  const [search, setSearch] = useState('')

  if (isLoadingStarship) {
    return <>Loading...</>
  }

  if (errorLoading) {
    return <>Error!</>
  }

  const filteredStarships = starships?.filter((starship) =>
    starship.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Box className='mb-10'>
          <Typography className='text-center' variant='h2'>
            Starships List
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
              <TableCell>model</TableCell>
              <TableCell>manufacturer</TableCell>
              <TableCell>length</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {starships?.length > 0 &&
              filteredStarships.map(
                ({ id, name, model, manufacturer, length }) => (
                  <TableRow key={name + id} className='hover:bg-slate-300'>
                    <TableCell>{name}</TableCell>
                    <TableCell>{model}</TableCell>
                    <TableCell>{manufacturer}</TableCell>
                    <TableCell>{length}</TableCell>
                    <TableCell>
                      <Box>
                        <Link
                          href={`/starships/${id}`}
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

export default StarshipsList
