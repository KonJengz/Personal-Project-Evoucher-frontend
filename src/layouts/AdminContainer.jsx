import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function AdminContainer() {
  return (
    <div>
        <Header />
        <div className='px-7'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}