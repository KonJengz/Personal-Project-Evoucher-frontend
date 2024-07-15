import { useState } from "react";
import ButtonAdmin from "./ButtonAdmin";
import adminApi from '../../../api/admin'

export default function AdminItem({ data, id }) {

  const [ clickStatusEmail, setClickStatusEmail ] = useState(data.statusSendEmail)
  const [ clickStatusUser, setClickStatusUser ] = useState(data.statusUser)

  const handleClickStatusEmail = async () => {
    try {
      const data = {statusSendEmail:!clickStatusEmail, id}
      await adminApi.updateStatusUser(data)
      setClickStatusEmail(!clickStatusEmail)
    } catch (error) {
      console.log(error)
    }
  }

  // const countAllSendEmail = data.store.evoucher?.reduce((count, order) => {
  //     return count + order.countSendVoucher;
  // },0)

  const handleClickStatusUser = async () => {
    try {
      const data = {statusUser:!clickStatusUser, id}
      await adminApi.updateStatusUser(data)
      setClickStatusUser(!clickStatusUser)
    } catch (error) {
      console.log(error)
    }
  }

  // console.log('data.stores---', data.stores)
  // console.log('totalSendEmail.totalSendEmail---', totalSendEmail)

  return (
    <div className="flex justify-around text-sm border-b pt-2 pb-1 h-11">
        <h3 className="basis-16 text-center text-sm">{data.id}</h3>
        <h3 className="flex-1">{data.email}</h3>
        <h3 className="basis-40 text-center text-sm">{data.phone}</h3>
        <h3 className="basis-36 text-center text-sm">{data.stores?.length}</h3>
        <h3 className="basis-36 text-center text-sm">
        
        {
          data.stores?.reduce((count, store) => {

            const result = store.evoucher?.reduce(( count2, evoucher2) => {
              return count2 + evoucher2.countSendVoucher
            },0)

            return count + result
          },0)
        }

        </h3>
                
        <h3 className="basis-36 text-center text-sm"><ButtonAdmin onClick={handleClickStatusEmail} bg={ clickStatusEmail ? "green" : "red"} color="white">{clickStatusEmail+''}</ButtonAdmin></h3>
        <h3 className="basis-36 text-center text-sm"><ButtonAdmin onClick={handleClickStatusUser} bg={ clickStatusUser ? "green" : "red"} color="white">{clickStatusUser+''}</ButtonAdmin></h3>
    </div>
  )
}
