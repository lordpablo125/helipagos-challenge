'use client'

import {
  Box,
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { FC, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { EmployeeTableProps } from '@/types/types'
// import { useDeleteEmployee } from '../api'

const PeopleList: FC<T> = ({ people }) => {
  const [page, setPage] = useState(1)
  // const { mutate: deleteEmployee } = useDeleteEmployee({
  //   onSuccess: () => window.location.reload()
  // })
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Typography className='text-center' variant='h2'>
          Employee List
        </Typography>
        <Link href='/employees/create' className='ml-auto mr-4' passHref>
          <Button color='primary' variant='outlined'>
            <AddIcon />
            Add new
          </Button>
        </Link>

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
              people.map(({ height, name, gender, birth_year }: any) => (
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
                        href={`/employees/edit/${name}`}
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
                      <Button
                        color='error'
                        variant='outlined'
                        // onClick={() => deleteEmployee(documentId)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          className='my-4'
          color='primary'
          count={5}
          shape='rounded'
          variant='outlined'
          // count={data.totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </TableContainer>
    </Box>
  )
}

export default PeopleList
