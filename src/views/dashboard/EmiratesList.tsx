// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface DataType {
  logo: string
  title: string
  amount: any
  logoWidth: number
  logoHeight: number
}


const withdrawData = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: '145',
    title: 'Ajman',
    logo: '/images/logos/ajman.png'
  },
  {
    logoWidth: 34,
    logoHeight: 34,
    amount: '1870',
    title: 'Umm Al Quwain',
    logo: '/images/logos/umm_al_quwain.svg',
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '50',
    title: 'Ras Al Khaimah',
    logo: '/images/logos/ras_al_khaimah.png'
  },

]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const EmiratesList = () => {

  const [data , setData] = useState<any>()
  const [emiratesData , setEmiratesData] = useState<any>([])
  useEffect(()=>{
    axios.get('/api/dashboard').then((res)=>{  
        setData(res.data)
        console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
    const data1 = [
      {
        logoWidth: 28,
        logoHeight: 29,
        amount: data?.count,
        title: 'Abu Dhabi',
        logo: '/images/logos/abudhabi.png'
      },
      {
        logoWidth: 38,
        logoHeight: 38,
        amount: data?.count,
        title: 'Dubai',
        logo: '/images/logos/dubai.png'
      },
      {
        logoWidth: 20,
        logoHeight: 28,
        amount: data?.count ,
        title: 'Sharjah',
        logo: '/images/logos/sharjah.png'
      },
      
      {
        logoWidth: 30,
        logoHeight: 30,
        amount: data?.count ,
        title: 'Fujairah',
        logo: '/images/logos/fujairah.png'
      },
    ]
    setEmiratesData(data1)
  },[])


  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Emirates'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {emiratesData.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== emiratesData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem className='hidden lg:block'/>

      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {withdrawData.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== emiratesData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 36, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default EmiratesList
