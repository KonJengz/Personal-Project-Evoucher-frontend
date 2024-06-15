import { useState } from "react";
import ButtonAdmin from "./ButtonAdmin";
import adminApi from '../../../api/admin'

export default function AdminItem({ phone, name, statusSendEmail, statusUser, id }) {

  const [ clickStatusEmail, setClickStatusEmail ] = useState(statusSendEmail)
  const [ clickStatusUser, setClickStatusUser ] = useState(statusUser)
  
  const handleClickStatusEmail = async () => {
    try {
      const data = {statusSendEmail:!clickStatusEmail, id}
      await adminApi.updateStatusUser(data)
      setClickStatusEmail(!clickStatusEmail)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickStatusUser = async () => {
    try {
      const data = {statusUser:!clickStatusUser, id}
      await adminApi.updateStatusUser(data)
      setClickStatusUser(!clickStatusUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-around text-sm border-b pt-2 pb-1">
        <h3 className="basis-16 text-center text-sm">{id}</h3>
        <h3 className="flex-1">{name}</h3>
        <h3 className="basis-40 text-center text-sm">{phone}</h3>
        <h3 className="basis-36 text-center text-sm">3</h3>
        <h3 className="basis-36 text-center text-sm">1000</h3>
        <h3 className="basis-36 text-center text-sm"><ButtonAdmin onClick={handleClickStatusEmail} bg={ clickStatusEmail ? "green" : "red"} color="white">{clickStatusEmail+''}</ButtonAdmin></h3>
        <h3 className="basis-36 text-center text-sm"><ButtonAdmin onClick={handleClickStatusUser} bg={ clickStatusUser ? "green" : "red"} color="white">{clickStatusUser+''}</ButtonAdmin></h3>
    </div>
  )
}
