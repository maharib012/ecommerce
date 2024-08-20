import { Outlet } from 'react-router-dom'
import Navbar from '../components/user/Navbar/Navbar'

const User = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full'>
        <div className='w-full max-w-7xl mx-auto px-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User;