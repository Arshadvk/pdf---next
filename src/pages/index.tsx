// ** React Imports
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const RegisterPage = () => {
  const router = useRouter()

  return (
    <div className='bg-gray-500 p-10'>
      <div className='flex gap-10 justify-between items-center'>
        <img src="/images/logos/pcf.png" className='h-20' alt="" />
      <div className='flex gap-4'>

      <a className='bg-white p-2 px-4 font-bold  rounded cursor-pointer'onClick={() => router.push('/login')}>Login</a>
      <a className='bg-red-500 text-white p-2 px-4 font-bold  rounded cursor-pointer'onClick={() => router.push('/register')}>Join Us</a>
      </div>

      </div>
    </div>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
