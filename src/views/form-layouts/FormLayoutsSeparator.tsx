// ** React Imports
import { forwardRef,  useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'





const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [date, setDate] = useState<Date | null | undefined>(null)


  return (
    <Card>
      <CardHeader title='Application for Membership' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Name' placeholder='carterLeonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='Blood Group' label='Blood Group' placeholder='A+' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Email' placeholder='carterleonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Tel/Mob' placeholder='carterleonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='' label='WhatsApp No' placeholder='carterleonard@gmail.com' />
            </Grid><Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Qualification' placeholder='carterleonard@gmail.com' />
            </Grid>
             <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Emirates</InputLabel>
                <Select
                  label='Emirates'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'> Abu Dhabi</MenuItem>
                  <MenuItem value='USA'>Dubai</MenuItem>
                  <MenuItem value='Australia'> Sharjah</MenuItem>
                  <MenuItem value='Germany'> Ajman</MenuItem>
                  <MenuItem value='Germany'> Umm Al Quwain</MenuItem>
                  <MenuItem value='Germany'> Ras Al Khaimah</MenuItem>
                  <MenuItem value='Germany'>  Fujairah</MenuItem>
                </Select>
              </FormControl>
            </Grid> 
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Profession' placeholder='carterleonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='Email' label='Zone/Area' placeholder='carterleonard@gmail.com' />
            </Grid>


            {/* j */}

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Address in home country 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='House Name' placeholder='Leonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='District' placeholder='Carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Panjayath' placeholder='Carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='PIN' placeholder='Carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Legislative assembly' placeholder='Carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Before in PDP' placeholder='Carter' />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
