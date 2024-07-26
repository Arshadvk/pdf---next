import { ReactNode } from 'react'

// ** Layout Import
import UserLayout from 'src/@core/layouts/UserLayout'

const HomePage = () => {

  const photo = [1,2,3, 4,5,6,7,8,9]

  return (
    <div className=' grid grid-cols-3'>
       {photo.map((photo)=>{
        return (
            // eslint-disable-next-line react/jsx-key
            <div className='flex items-center justify-center pb-5'>
            <img src={`/images/events/${photo}.jpg`} height={300} width={300} alt="" srcSet="" />
          </div>)
       })}
    

    </div>
  )
}

HomePage.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>

export default HomePage
