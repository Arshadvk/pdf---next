// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import Home from 'mdi-material-ui/Home'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AccountPlus from 'mdi-material-ui/AccountPlus'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import AccountArrowLeft from 'mdi-material-ui/AccountArrowLeft'


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: Home,
      path: '/'
    },
    {
      title: 'User List',
      icon: Table ,
      path: '/user',
    },
    {
      title: 'User Requests',
      icon: AccountArrowLeft ,
      path: '/user/requests',
    },
    {
      title: 'User Register',
      icon: AccountPlus ,
      path: '/user/register',
    },
    //  {
    //   title: 'Admin List',
    //   icon: Table ,
    //   path: '/admin',
    // },
    // {
    //   title: 'Admin Register',
    //   icon: AccountPlus ,
    //   path: '/admin/register',
    // },
    {
      title: 'Profile',
      icon: AccountCogOutline,
      path: '/profile'
    },   
  ]
}

export default navigation
