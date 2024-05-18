// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import AdminTable from 'src/views/admin/Table'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
           Admin List
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <AdminTable />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
