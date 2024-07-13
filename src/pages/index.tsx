// ** React Imports
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const HomePage = () => {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path ? 'text-black' : 'text-white hover:text-gray-900';
  }

  return (
    <div>


      <div className='p-10' style={{backgroundColor:"#E0A75E"}}>
        <div className='flex gap-10 justify-between items-center'>
          <img src="/images/logos/pcf.png" className='h-10 md:h-20' alt="" />

          <div className='md:flex gap-16 font-bold hidden'>
            <p className={`${isActive('/')} cursor-pointer`} onClick={() => router.push('/')}>Home</p>
            <p className={`${isActive('/gallery')} cursor-pointer`} onClick={() => router.push('/gallery')}>Events</p>
            <p className={`${isActive('/about-us')} cursor-pointer`} onClick={() => router.push('/about-us')}>About Us</p>
            <p className={`${isActive('/contact-us')} cursor-pointer`} onClick={() => router.push('/contact-us')}>Contact Us</p>
          </div>

          <div className='flex gap-4'>
            <a
              style={{ backgroundColor: '#184291' }}
              className='p-2 px-4 text-white font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/login')}
            >
              Login
            </a>
            <a
              className='bg-red-500 text-white p-2 px-4 font-bold rounded cursor-pointer text-xs'
              onClick={() => router.push('/register')}
            >
              Join Us
            </a>
          </div>
        </div>
      </div>

      <div 
        className='grid grid-cols-2' 
        style={{
          backgroundImage: `url(images/home/bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh'
        }}
      >
          <div className='flex items-center justify-center'>
              <h4 className='text-5xl font-extrabold text-black' style={{textTransform:"uppercase" , fontFamily:"Chilanka"}}>
             " അവർണ്ണന് അധികാരം <br /> 
               പീഡിതന് മോചനം "
              </h4>
          </div>
          <div className='flex items-end justify-end'>
          <img src="/images/home/home.png" className='h-80 mt-20' alt="" />
          
          </div>
      </div>

      <footer className='h-50 bg-red-500'>
        <div className='grid grid-cols-3'>
          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2 font-extrabold'>Contact Us</p>
              <p className='text-white m-2 font-normal'> Abu Dhabi</p>
              <p className='text-white m-2 font-normal'>pcf@gmail.com</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2'>Home</p>
              <p className='text-white m-2'>Events</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='m-3'>
              <p className='text-white m-2'>Home</p>
              <p className='text-white m-2'>Events</p>
            </div>
          </div>
        
        </div>

        
      </footer>
    </div>
  )
} 

HomePage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default HomePage
