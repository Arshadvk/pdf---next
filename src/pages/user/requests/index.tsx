// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'

const UserRequests = () => {
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
        <Table />
        </Card>
      </Grid>
    </Grid>
    </ApexChartWrapper>
    
  )
}

export default UserRequests