import MenuItem from "../../../layouts/MenuItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";

export default function SideBar() {

  const [ open, setOpen ] = useState(false)
  const {pathname} = useLocation()
  const { logout, openModalStore } = useAuth()
  
  // const path = pathname.split('/')[2]
  const param = useParams()

    const menuList = [
      { id: 2, text: "จัดการ Order", to: `/store/${param.id}`},
      { id: 1, text: "จัดการ voucher", to: `/store/voucher/${param.id}`},
      { id: 3, text: "ตั้งค่าร้านค้า", to: `/store/setting/${param.id}`}
    ]

    const handleClickLogout = () => {
      logout()
    }

    const handleClick = () => {
      setOpen(false)
    }

  return (

    <>
      { pathname === "/store"
        ? <div className=" h-[70vh] flex gap-1 items-center justify-center w-full">
            <div className="gap-3" role="button" onClick={openModalStore}>
              <h1 className="font-semibold text-[#2BB673] text-center text-6xl">คลิก</h1>
              <h1 className="text-6xl">สร้างร้านค้า</h1>
            </div>
            <div className="w-[35rem]">
              <img src="https://lh5.googleusercontent.com/d/1TNybaa53IoyUyEBhc4wahy4ak5gHq_cH"
              alt="fastervoucher" />
            </div>

        </div>
        : <nav className="w-40 my-4 px-2 h-[70vh] flex flex-col gap-2 border-r">

          {menuList.map((el) => (
                <MenuItem key={el.id} text={el.text} to={el.to} active={pathname === el.to} />
            ))}
    
            <div className="hover:underline" role="button" onClick={() => setOpen(true)}>ออกจากระบบ</div>
    
            <Modal title="คุณต้องการออกจากระบบ" open={open} onClose={handleClick} width={30}>
              <div className="flex gap-4 justify-center mb-4">
                <Button width='40' bg="green" onClick={handleClickLogout}>
                  ออกจากระบบ
                </Button>
                <Button width='40' border="green" color="gray" onClick={handleClick}>
                  ยกเลิก
                </Button>
              </div>
            </Modal>
        </nav> }
    </>
    
  )
}
