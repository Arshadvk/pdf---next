// ** Icon imports
import Table from 'mdi-material-ui/Table'
import Home from 'mdi-material-ui/Home'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlus from 'mdi-material-ui/AccountPlus'

import AccountArrowLeft from 'mdi-material-ui/AccountArrowLeft'


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: Home,
      path: '/dashboard'
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
     {
      title: 'Admin List',
      icon: Table ,
      path: '/admin',
    },
    {
      title: 'Admin Register',
      icon: AccountPlus ,
      path: '/admin/register',
    },
    {
      title: 'Profile',
      icon: AccountCogOutline,
      path: '/profile'
    },   
  ]
}

export default navigation
