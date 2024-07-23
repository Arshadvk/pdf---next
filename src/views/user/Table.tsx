// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useRouter } from 'next/router'
import { useState } from 'react'


// ** Types Imports

type Props = {
  data: any
  type: string
}






const DashboardTable = ({ data, type }: Props) => {
  const router = useRouter()
  const rows = data
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusClick = () => {
    setIsEditing(!isEditing);
  };

  const handleStatusChange = (newStatus:string) => {
    console.log(newStatus)
    setIsEditing(false);
  };
  
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
                <td>
                  <span
                    className={`${row.status === 'pending'
                        ? 'bg-red-600'
                        : row.status === 'verified'
                          ? 'bg-orange-600'
                          : 'bg-green-600'
                      } p-2 text-white rounded-full font-bold cursor-pointer`}
                    onClick={handleStatusClick}
                  >
                    {row.status}
                  </span>
                  {isEditing && (
                    <div className="absolute bg-white shadow-md rounded mt-2">
                      <ul>
                        <li
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleStatusChange('approved')}
                        >
                         {row.status === "pending" ? "verified" : "approved"}
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
                <TableCell className='cursor-pointer' onClick={() => type === "request" ? router.push(`/user/requests/${row._id}`) : router.push(`/user/${row._id}`)}>
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
