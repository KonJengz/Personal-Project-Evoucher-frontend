import { useParams } from "react-router-dom";
import orderApi from "../../../api/order";
import { useState } from "react";
import { useEffect } from "react";


export default function RedeemVoucher() {

    const [ dataOrder, setDataOrder ] = useState(null)
    const params = useParams();

    const fetchDataOrder = async () => {
        try {

            const res = await orderApi.getOrderById(params.id)
            console.log('res.data fetchOrder', res.data)
            setDataOrder(res.data)

        } catch (error) {
          console.log('error getOrder', error)
        }
      }

    useEffect(() => {
        fetchDataOrder()
    }, [])

    const handleClickConfirmUseVoucher = () => {

    }

  return (
    <main className="flex flex-col items-center">
        <div className="w-full overflow-hidden flex justify-center">
            <img src={dataOrder?.evoucher.imageVoucher} alt="voucher" />
        </div>

        <div className="flex flex-col items-center p-10 gap-7 text-center">
            <div className="gap-3 flex flex-col">
                <div>
                    <small className="text-xl font-semibold">E-Voucher</small>
                    <h2 className="text-xl font-semibold">{dataOrder?.evoucher.nameVoucher}</h2>
                </div>
                <h2 className="text-xl font-semibold">ชื่อลูกค้า คุณ {dataOrder?.nameEnduser}</h2>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Order No.{dataOrder?.orderNumber}</h2>
                    <small className="">Reference code</small>
                </div>
            </div>

            <div className="">
                <form className="w-[80vw]">
                    <div className="mb-3 flex justify-center">
                        <input className="py-2 w-[80%] text-center border focus:border-[#2BB673] focus:border rounded-full placeholder:text-center" type="text" placeholder="ใส่รหัสยืยนยัน" />
                    </div>
                    <div  className="flex flex-col items-center">
                        <button onClick={handleClickConfirmUseVoucher} className="bg-[#2BB673] py-2 rounded-full text-white px-10">ยืนยันใช้ Voucher</button>
                    </div>
                </form>
            </div>

            <div>
                <small className="text-end"><strong>แจ้งเพื่อทราบ:</strong> เมื่อยืนยันแล้ว voucher จะถูกบันทึกลงระบบและ<br />ไม่สามารถยกเลิกการใช้ได้</small>
            </div>

            <div className="w-24">
                <img src="https://lh5.googleusercontent.com/d/1NnI65wiS5nrN41eYoQQtjrxSNPlFsJfP" alt="logo faster voucher" />
            </div>
        </div>
        
    </main>
  )
}
