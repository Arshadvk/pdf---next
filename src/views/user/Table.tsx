// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useRouter } from 'next/router'


// ** Types Imports

type Props = {
  data: any
  type: string
}






const DashboardTable = ({ data }: Props) => {
  const router = useRouter()
  const rows = data

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>

                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell >
                  <span className={row.status == "pending" ? "bg-red-600 p-2 text-white rounded-full" : ""}>
                    {row.status}
                    </span>
                  </TableCell>
                <TableCell onClick={() => router.push(`/user/requests/${row._id}`)}>
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
