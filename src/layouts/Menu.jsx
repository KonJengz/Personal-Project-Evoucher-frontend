import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";



export default function Menu() {

    const {pathname} = useLocation()

    const menuList = [
        { id: 1, text: "หน้าหลัก", to: '/'},
        { id: 2, text: "คู่มือการใช้งาน", to: '/manual'},
        { id: 3, text: "ติดต่อทีมงาน", to: '/contact'}
    ]

  return (
    <nav className="flex justify-center gap-5 py-1.5">
        {menuList.map((el) => (
            <MenuItem key={el.id} text={el.text} to={el.to} active={pathname === el.to} />
        ))}
    </nav>
  )
}