import { useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import AdminItem from "./AdminItem";


export default function AdminManage() {

  const navigate = useNavigate()
  const { getAllUser, logout, getAllStore } = useAdmin()
  // console.log('getAllUser', getAllUser)

  console.log('getAllUser admin', getAllUser)
  console.log('getAllStore admin', getAllStore)

  const handleClickLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="p-10">
      <div className="flex mb-5 gap-2 items-center">
        <h1>Admin</h1>
        <div className="border py-2 px-4 rounded-2xl text-center bg-gray-200">
          <h2>จำนวนผู้ใช้งานทั้งหมด <strong>{getAllUser?.length}</strong></h2>
        </div>
        <div className="border py-2 px-4 rounded-2xl text-center bg-gray-200">
          <h2>จำนวนร้านค้าทั้งหมด <strong>{getAllStore?.length}</strong></h2>
        </div>
      </div>
      <div>
        <div className="flex justify-around border-b-gray-300 border-b font-semibold text-sm py-3">
          <h3 className="basis-16 text-center">id</h3>
          <h3 className="flex-1">name store/email</h3>
          <h3 className="basis-40 text-center">phone</h3>
          <h3 className="basis-36 text-center">number of store</h3>
          <h3 className="basis-36 text-center">total send email</h3>
          <h3 className="basis-36 text-center">status send email</h3>
          <h3 className="basis-36 text-center">status user</h3>
        </div>

        <div className="flex flex-col my-3">
          { getAllUser?.map((item) => (
            <AdminItem key={item.id} id={item.id} data={item} />
          ))}

        </div>
      </div>

      <small className="text-xs text-gray-400 hover:underline" role="button" onClick={handleClickLogout}>ออกจากระบบ</small>
    </div>
  )
}
