import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeaderStore from '../features/stores/components/HeadStore'
import SideBar from '../features/stores/components/SideBar'

export default function StoreContainer() {
  return (
    <div>
        <HeaderStore />
        <div className='px-7 flex'>
          <SideBar />
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}
