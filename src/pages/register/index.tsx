// ** React Imports
import { Fragment, ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'



// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import Grid from '@mui/material/Grid'
import { Select } from '@mui/material'
import axios from 'axios'


// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  // ** States
  const [name, setName] = useState<any | null | undefined>(null)
  const [email, setEmail] = useState<any | null | undefined>(null)
  const [number, setNumber] = useState<any | null | undefined>(null)
  const [date_of_birth, setDOB] = useState<any | null | undefined>(null)
  const [whatsapp, setWhatsapp] = useState<any | null | undefined>(null)
  const [image, setImage] = useState<any | null | undefined>(null)

  const [blood, setBlood] = useState<any | null | undefined>(null)
  const [emirates, setEmirates] = useState<any | null | undefined>(null)
  const [profession, setProfession] = useState<any | null | undefined>(null)
  const [zone, setZone] = useState<any | null | undefined>(null)


  const [houseName, setHouseName] = useState<any | null | undefined>(null)
  const [district, setDistrict] = useState<any | null | undefined>(null)
  const [panjayath, setPanjayath] = useState<any | null | undefined>(null)
  const [pin, setPin] = useState<any | null | undefined>(null)

  const handleEmiratesChange = (event: any) => {
    setEmirates(event.target.value);
  };
  const handleBloodChange = (event: any) => {
    setBlood(event.target.value as string);
  };


  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    formData.append('dob', date_of_birth);
    formData.append('whatsapp', whatsapp);
    formData.append('image', image);
    formData.append('blood', blood);
    formData.append('emirates', emirates);
    formData.append('profession', profession);
    formData.append('zone', zone);
    formData.append('houseName', houseName);
    formData.append('district', district);
    formData.append('panjayath', panjayath);
    formData.append('pin', pin);

    try {
      const res = await axios.post('/api/post/createuser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully: ' + res.data.filePath);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };



  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1, width: '66.6667% !important' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <img src="/images/logos/pcf.png" className='h-14' alt="" />
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 5 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: "center", mb: 5 }}>
              Application for Membership
            </Typography>
            <Divider sx={{ marginBottom: 0 }} />
          </Box>

          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  1. Personal Info
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Name' value={name} onChange={e => setName(e.currentTarget.value)} placeholder='Enter Your Name' required />
              </Grid>

              <Grid item xs={12} sm={6} >
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>Blood Group</InputLabel>
                  <Select
                    label='Blood Group'
                    value={blood}
                    onChange={handleBloodChange}
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='A+'>A+</MenuItem>
                    <MenuItem value='A-'>A-</MenuItem>
                    <MenuItem value='AB+'>AB+</MenuItem>
                    <MenuItem value='AB-'>AB-</MenuItem>
                    <MenuItem value='B+'>B+</MenuItem>
                    <MenuItem value='B-'>B-</MenuItem>
                    <MenuItem value='O+'>O+</MenuItem>
                    <MenuItem value='O-'>O-</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='email' value={email} onChange={e => setEmail(e.currentTarget.value)} label='Email' required placeholder='example@gmail.com' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='tel' value={number} onChange={e => setNumber(e.currentTarget.value)} label='Tel/Mob' placeholder='Enter your Number' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='date' value={date_of_birth} onChange={e => setDOB(e.currentTarget.value)} label='Date of Birth' placeholder='carterleonard@gmail.com' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='tel' value={whatsapp} onChange={e => setWhatsapp(e.currentTarget.value)} label='WhatsApp No' placeholder='Enter Your WhatsApp no' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='file' label='Photo' value={image} onChange={e => setImage(e.currentTarget.value)} />
              </Grid>

              <Grid item xs={12} sm={6} >
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>Emirates</InputLabel>
                  <Select
                    label='Emirates'
                    value={emirates}
                    onChange={handleEmiratesChange}
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='Abu Dhabi'>Abu Dhabi</MenuItem>
                    <MenuItem value='Dubai'>Dubai</MenuItem>
                    <MenuItem value='Sharjah'>Sharjah</MenuItem>
                    <MenuItem value='Ajman'>Ajman</MenuItem>
                    <MenuItem value='Umm Al Quwain'>Umm Al Quwain</MenuItem>
                    <MenuItem value='Ras Al Khaimah'>Ras Al Khaimah</MenuItem>
                    <MenuItem value='Fujairah'>Fujairah</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='text' value={profession} onChange={e => setProfession(e.target.value)} label='Profession' />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth type='text' value={zone} onChange={e => setZone(e.target.value)} label='Zone/Area' />
              </Grid>




              <Grid item xs={12}>
                <Divider sx={{ marginBottom: 0 }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  2. Address in home country
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='House Name' value={houseName} onChange={e => setHouseName(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='District' value={district} onChange={e => setDistrict(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Panjayath' value={panjayath} onChange={e => setPanjayath(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='PIN' value={pin} onChange={e => setPin(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Legislative assembly' placeholder='Carter' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label='Before in PDP' placeholder='Carter' />
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I hereby declare that the above information is true & correct to the best of my knowledge and belief</span>

                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/pages/login'>
                  <LinkStyled>Sign in instead</LinkStyled>
                </Link>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
