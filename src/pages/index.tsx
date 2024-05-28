// ** React Imports
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const HomePage = () => {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path ? 'text-black' : 'text-gray-500 hover:text-gray-900';
  }

  return (
    <div className='bg-gray-200 p-10'>
      <div className='flex gap-10 justify-between items-center'>
        <img src="/images/logos/pcf.png" className='h-20' alt="" />
      
        <div className='flex gap-16 font-bold'>
          <p className={`${isActive('/')} cursor-pointer`} onClick={() => router.push('/')}>Home</p>
          <p className={`${isActive('/gallery')} cursor-pointer`} onClick={() => router.push('/gallery')}>Events</p>
          <p className={`${isActive('/about-us')} cursor-pointer`} onClick={() => router.push('/about-us')}>About Us</p>
          <p className={`${isActive('/contact-us')} cursor-pointer`} onClick={() => router.push('/contact-us')}>Contact Us</p>
        </div>

        <div className='flex gap-4'>
          <a 
            style={{backgroundColor:'#184291'}} 
            className='p-2 px-4 text-white font-bold rounded cursor-pointer' 
            onClick={() => router.push('/login')}
          >
            Login
          </a>
          <a 
            className='bg-red-500 text-white p-2 px-4 font-bold rounded cursor-pointer' 
            onClick={() => router.push('/register')}
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default HomePage
