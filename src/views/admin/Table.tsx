// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { ReactChild, ReactFragment, ReactPortal } from 'react'


const TableAdmin = ({data}:any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Emirates</TableCell>
            <TableCell>Veiw</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: { name: {} | null | undefined; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; emirates: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => (
            // eslint-disable-next-line react/jsx-key
            <TableRow
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.emirates}</TableCell>
              <TableCell className='cursor-pointer'>details</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableAdmin
