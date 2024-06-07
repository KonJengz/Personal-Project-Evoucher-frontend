import { Link } from "react-router-dom"
import logofastervoucher from '../assets/logo/logofastervoucher.svg'
import Button from "../components/Button"
import Menu from "./Menu"
import { useState } from "react"
import Modal from "../components/Modal"
import UserRegister from "../components/UserRegister"

export default function Header() {

    const [ open, setOpen ] = useState(false)
    const [ open1, setOpen1 ] = useState(false)

    const handleClickRegister = () => {
        setOpen(true)
    }

    const handleClickLogin = () => {
        setOpen1(true)
    }

  return (
    <header className="flex justify-between px-7 pt-5 pb-3 border-b border-gray-300">
        <div>
            <Link to='/'>
                <img width={250} src={logofastervoucher} alt="logo faster voucher" />
            </Link>
        </div>

        <div className="flex gap-4 items-center">
            <Menu />
            <Link to='#'>
                <Button onClick={handleClickRegister} border="green" color="gray">เริ่มต้นใช้งาน</Button>
            </Link>
            <Link to='#'>
                <Button onClick={handleClickLogin} bg="green">เข้าสู่ระบบ</Button>
            </Link>
            <Modal title="ลงทะเบียนใช้งาน" open={open} onClose={() => setOpen(false)} width={30}>
                <UserRegister />
            </Modal>
            <Modal title="เข้าสู่ระบบ" open={open1} onClose={() => setOpen1(false)} width={40}>
                ddddddd
            </Modal>
        </div>

    </header>
  )
}
