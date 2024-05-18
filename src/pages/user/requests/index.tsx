// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'

// ** Custom Components Imports
import Table from 'src/views/user/Table'

interface RowType {
  age: number
  membershipNo: string
  name: string
  date: string
  email: string
  salary: string
  status: string
  designation: string
}



const rows: RowType[] = [
  {
    name: 'Asees. km',
    membershipNo: "AUH-585",
    age: 27,
    status: 'current',
    date: '09/27/2018',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant'
  },
  {
    name: 'Margaret Bowers',
    membershipNo: "AUH-586",
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'active',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Nuclear Power Engineer'
  },
  {
    name: 'Minnie Roy',
    membershipNo: "AUH-587",
    age: 59,
    date: '10/15/2017',
    status: 'rejected',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Environmental Specialist'
  },
  {
    name: 'Ralph Leonard',
    membershipNo: "AUH-588",
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    email: 'dfalloona@ifeng.com',
    designation: 'Sales Representative'
  },
  {
    name: 'Annie Martin',
    membershipNo: "AUH-589",
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    name: 'Adeline Day',
    membershipNo: "AUH-590",
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    status: 'active',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant'
  },
  {
    name: 'Lora Jackson',
    membershipNo: "AUH-591",
    age: 61,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    name: 'Rodney Sharp',
    membershipNo: "AUH-592",
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    status: 'active',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

const UserRequests = () => {

  // const [data , setData] = useState()

  // useEffect(() => {
  //   axios.get('/api/findalluser')
  //     .then((res) => {
  //       setData(res.data)
  //       console.log(res.data)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, [])

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
            <Table data={rows} type='' />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>

  )
}

export default UserRequests
