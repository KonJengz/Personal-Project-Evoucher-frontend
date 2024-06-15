import { useNavigate } from "react-router-dom"

export default function OrderItem({ getOrder }) {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(getOrder.id)
        navigate(`/voucher/${getOrder.id}`)
    }

    
    
  return (
    <div onClick={handleClick} className="flex justify-around items-center text-sm border-b pt-2 pb-1">
        <h3 className="basis-40 text-center">{getOrder.orderNumber}</h3>
        <h3 className="flex-1">{getOrder.nameEnduser}</h3>
        <h3 className="basis-40 text-center">{getOrder.voucherId}</h3>
        <h3 className="basis-40 text-center">{getOrder.branchId}</h3>
        <h3 className="basis-40 text-center">{new Date(getOrder.timeSendEmail).toLocaleDateString("en-GB")}</h3>
        <div className="basis-40 text-center">
        { !getOrder.statusUseVoucher
        ? <h3 className="">{new Date(getOrder.updatedAt).toLocaleDateString("en-GB") + " " +new Date(getOrder.updatedAt).toLocaleTimeString('th-TH')}</h3>
        : <h3 className="bg-[#2BB673] py-1 px-3 rounded-lg text-white inline-block">Redeemed</h3> }
       </div>
    </div>

  )
}