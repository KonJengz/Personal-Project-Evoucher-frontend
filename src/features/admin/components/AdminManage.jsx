import { useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import AdminItem from "./AdminItem";


export default function AdminManage() {

  const navigate = useNavigate()
  const { getAllUser, logout } = useAdmin()
  // console.log('getAllUser', getAllUser)

  const handleClickLogout = () => {
    logout()
    navigate('/')
  }



  return (
    <div className="p-10">
      <h1>Admin</h1>
      <div>
        <div className="flex justify-around border-b-gray-300 border-b font-semibold text-sm py-3">
          <h3 className="basis-16 text-center">id</h3>
          <h3 className="flex-1">name store/email</h3>
          <h3 className="basis-40 text-center">phone</h3>
          <h3 className="basis-36 text-center">num of store</h3>
          <h3 className="basis-36 text-center">total send email</h3>
          <h3 className="basis-36 text-center">status send email</h3>
          <h3 className="basis-36 text-center">status user</h3>
        </div>

        <div className="flex flex-col my-3">
          { getAllUser?.map((item) => (
            <AdminItem key={item.id} id={item.id} phone={item.phone} name={item.email} statusSendEmail={item.statusSendEmail} statusUser={item.statusUser} />
          ))}

        </div>
      </div>

      <small className="text-xs text-gray-400 hover:underline" role="button" onClick={handleClickLogout}>ออกจากระบบ</small>
    </div>
  )
}
