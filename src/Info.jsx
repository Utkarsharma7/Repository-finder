import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link
} from '@mui/material'

//This component will be used to display the information of the repositories and will get the data from the parent component
function info({data, numRows}) {
  console.log(data)//Data is received from the parent component
  
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Repositories Information
      </Typography>
      
      <TableContainer component={Paper} elevation={3} sx={{ maxHeight: 600 }}>
        <Table sx={{ minWidth: 650 }} aria-label="repository table" stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>URL</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Repository Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: numRows }, (_, index) => (
              <TableRow key={index} sx={{ backgroundColor: '#000' }}>
                <TableCell>
                  {data && data[index] ? (
                    <Link href={data[index].html_url} target="_blank" rel="noopener noreferrer">
                      {data[index].html_url}
                    </Link>
                  ) : (
                    'N/A'
                  )}
                </TableCell>
                <TableCell>
                  {data && data[index] ? data[index].name : 'N/A'}
                </TableCell>
                <TableCell>
                  {data && data[index] ? (data[index].description || 'No description available') : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default info
