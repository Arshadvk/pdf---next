import { ReactNode } from 'react'

// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'

const HomePage = () => {

  return (
    <div>

    </div>
  )
} 

HomePage.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>

export default HomePage
