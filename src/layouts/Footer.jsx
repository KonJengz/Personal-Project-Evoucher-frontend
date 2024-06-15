import { Link } from "react-router-dom";
import logofastervoucher from '../assets/logo/logo-footer.svg'
import qrCode from '../assets/qrcode.svg'

export default function Footer() {
  return (
    <footer className="px-10 bg-[#35425A]">
        <div className='px-8 flex items-center justify-between'>
            <div className='pt-16 pb-14'>
                <div className='w-48 mb-2'>
                    <img src={logofastervoucher} alt="logofastervoucher" />
                </div>
                <p className='text-[#C6CBD4] font-light'>ตัวช่วยการขายที่ทุกร้านค้าออนไลน์ต้องมี</p>
            </div>

            <div className='flex items-center gap-4'>
                <div className='w-28'>
                    <img src={qrCode} alt="logofastervoucher" />
                </div>
                <p className='text-[#C6CBD4]'>เพิ่มเพื่อน LINE<br />คุยกับเราได้ที่นี่</p>
            </div>
        </div>

        <div className="border-t border-gray-300 border-opacity-50 text-center pb-3 pt-1 flex justify-between items-center">
            <small className="text-[#C6CBD4] text-xs invisible">login</small>
            <small className="text-[#C6CBD4] text-xs">&#169; KonJeng Create 2024</small>
            <Link to='/login'><small className="text-[#5a6373] text-xs">login</small></Link>
        </div>
    </footer>
  )
}
