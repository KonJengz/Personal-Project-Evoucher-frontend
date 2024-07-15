import { useParams } from "react-router-dom";
import orderApi from "../../../api/order";
import { useState } from "react";
import { useEffect } from "react";

export default function RedeemVoucher() {

    const [ dataOrder, setDataOrder ] = useState(null)
    const [ inputPassword, setInputPassword ] = useState('')
    const [ errorInput, setErrorInput ] = useState('')

    const params = useParams();

    const currentDate = new Date()

    const fetchDataOrder = async () => {
        try {

            const res = await orderApi.getOrderById(params.id)
            // console.log('res.data fetchOrder', res.data)
            setDataOrder(res.data)

        } catch (error) {
          console.log('error getOrder', error)
        }
      }

    useEffect(() => {
        fetchDataOrder()
    }, [])

    const handleChangeInput = (e) => {
        setInputPassword(e.target.value)
        setErrorInput('')
    }

    const handleClickConfirmUseVoucher = async (e) => {
        try {
            e.preventDefault()
            if (!inputPassword) {
                return setErrorInput('คุณยังไม่ได้ใส่รหัสยืนยัน')
            }

            const data = {
                id: +params.id,
                branchId: inputPassword
            }
            const res = await orderApi.updateStatusOrder(data)
            console.log('res', res.data)
            fetchDataOrder()

        } catch (error) {
            console.log('error handleClickConfirmUseVoucher', error)
        }
    }

  return (
    <main className="flex flex-col items-center">
        <div className="w-full overflow-hidden flex justify-center">
            <img src={dataOrder?.evoucher.imageVoucher} alt="voucher" />
        </div>

        <div className="flex flex-col items-center p-10 gap-8 text-center">
            <div className="gap-3 flex flex-col">
                <div>
                    <small className="text-base">E-Voucher</small>
                    <h2 className="text-xl font-semibold">{dataOrder?.evoucher.nameVoucher}</h2>
                </div>
                <div>
                    <small className="text-base">ชื่อคุณลูกค้า</small> 
                    <h2 className="text-xl font-semibold">{dataOrder?.nameEnduser}</h2>
                </div>
                <div className="text-center">
                <small className="text-base">Order No.</small> 
                    <h2 className="text-xl font-semibold">{dataOrder?.orderNumber}</h2>
                    <small>Reference code</small>
                </div>
            </div>

            <div className="">
                { currentDate > new Date(dataOrder?.evoucher.endDate) || dataOrder?.statusUseVoucher
                    ? <div className="border-2 py-4 px-6 rounded-xl border-red-500 shadow-[0_0px_10px_1px_rgba(239,68,68,0.3)]">
                        <h1 className="text-red-500 font-semibold text-3xl">voucher นี้</h1>
                        <h1 className="text-red-500 font-semibold text-3xl">ถูกใช้งานแล้ว</h1>
                    </div>
                    : (<form className="w-[80vw]">
                    <div className="mb-3 flex  gap-1 flex-col items-center justify-center">
                        <input onChange={handleChangeInput} value={inputPassword} className="py-2 w-10/12 text-center border focus:border-[#2BB673] focus:border outline-none rounded-full placeholder:text-center" type="text" placeholder="ใส่รหัสยืนยัน" />
                        <small className="text-red-500">{errorInput}</small>
                    </div>
                    <div>
                        <button onClick={handleClickConfirmUseVoucher} className="bg-[#2BB673] py-2 rounded-full text-white w-10/12">ยืนยันใช้ Voucher</button>
                    </div>
                </form>)}
                
            </div>

            <div>
                <p>expiry date: {new Date(dataOrder?.evoucher.endDate).toLocaleDateString("en-GB")}</p>
                { currentDate < new Date(dataOrder?.evoucher.endDate)
                ? null 
                : <p className="text-red-500">Voucher นี้หมดอายุแล้ว ไม่สามารถใช้ได้</p> }
                
            </div>

            <div>
                <small className="text-end"><strong>แจ้งเพื่อทราบ:</strong> เมื่อยืนยันแล้ว voucher จะถูกบันทึกลงระบบและ<br />ไม่สามารถยกเลิกการใช้ได้</small>
            </div>

            <div className="w-32">
                <img src="https://lh5.googleusercontent.com/d/1NnI65wiS5nrN41eYoQQtjrxSNPlFsJfP" alt="logo faster voucher" />
            </div>
        </div>
        
    </main>
  )
}
