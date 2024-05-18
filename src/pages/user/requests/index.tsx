// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'

// ** Custom Components Imports
import Table from 'src/views/user/Table'
import axios from 'axios'


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useEffect, useState } from 'react'

// ** Demo Components Imports

const UserRequests = () => {

  const [data , setData] = useState()

  useEffect(() => {
    axios.get('/api/findalluser')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            <Link href='https://mui.com/components/tables/' target='_blank'>
              User Requests
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Table data={data} type='' />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>

  )
}

export default UserRequests
