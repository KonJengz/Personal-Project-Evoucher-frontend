import { useState } from "react"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import voucherApi from "../../../api/voucher"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import validateVoucher from "../validate/validate-voucher"
import { useEffect } from "react"

// const initialInput = {
//     nameVoucher: selectVoucher.nameVoucher,
//     numberVoucher: selectVoucher.numberVoucher,
//     startDate: selectVoucher.startDate,
//     endDate: selectVoucher.endDate
//   }
  
  const initialInputError = {
    startDate: '',
    endDate: ''
  }

export default function EditVoucher({ selectVoucher, handleClickCloseModal, getSelectVoucher }) {


    console.log('selectVouchddddddddddddder', selectVoucher)
    const [ input, setInput ] = useState( {
        id: selectVoucher.id,
        nameVoucher: selectVoucher.nameVoucher,
        numberVoucher: selectVoucher.numberVoucher,
        startDate: selectVoucher?.startDate || "",
        endDate: selectVoucher?.endDate || "",
        detailVoucher: selectVoucher.detailVoucher || ""
      } )
    const [ inputError, setInputError ] = useState( initialInputError )
    const [ isEdit, setIsEdit ] = useState(true)

    const params = useParams()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()

            const error = validateVoucher(input)
            console.log('error', error)
            if (error.startDate || error.endDate) {
                return setInputError(error)
            }
            setInputError({...initialInputError})

            toast.success('update success')
            await voucherApi.updateDataVoucher(input, params.id)
            setIsEdit(true)
            getSelectVoucher()
            
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getSelectVoucher()
    },[])

    console.log('selectVoucher', selectVoucher)
    console.log('startDate', input.startDate)
  return (
    <div className="flex gap-6 justify-center mt-3 mb-5">
        <div role="button" className={`rounded-2xl w-1/3`}>
            <div className="rounded-2xl overflow-hidden">
                <img className="w-full" src={selectVoucher?.imageVoucher} alt={selectVoucher?.nameVoucher} />
            </div>
        </div>

        <form className="flex gap-2 flex-col w-1/2" onSubmit={handleSubmitFrom}>

            <div>
                <label className="text-slate-400">ชื่อ Voucher</label>
                { isEdit
                    ? <p>{input?.nameVoucher}</p>
                    : <Input
                    placeholder="ชื่อ Voucher"
                    value={input?.nameVoucher}
                    name={'nameVoucher'}
                    onChange={handleChange}
                    error={inputError.nameVoucher}
                />}
                
            </div>

            <div>
                <label className="text-slate-400">voucher ID</label>
                { isEdit
                    ? <p>{input?.numberVoucher}</p>
                    : <Input
                    placeholder="voucher ID"
                    value={input?.numberVoucher}
                    name={'numberVoucher'}
                    onChange={handleChange}
                    error={inputError.numberVoucher}
                />}
            </div>

            <div>
                <label className="text-slate-400">วันที่เริ่มต้นใช้ได้</label>
                { isEdit
                    ? <p>{new Date(input?.startDate).toLocaleDateString("en-GB")}</p>
                    : <Input
                    value={input?.startDate}
                    name={'startDate'}
                    onChange={handleChange}
                    error={inputError.startDate}
                    typeInput="date"
                />}
            </div>

            <div>
                <label className="text-slate-400">วันที่สิ้นสุด</label>
                { isEdit
                    ? <p>{new Date(input?.endDate).toLocaleDateString("en-GB")}</p>
                    : <Input
                    value={input?.endDate}
                    name={'endDate'}
                    onChange={handleChange}
                    error={inputError.endDate}
                    typeInput="date"
                />}
            </div>

            <div className="flex flex-col">
                <label className="text-slate-400">รายละเอียด</label>
                { isEdit
                    ? <p>{input?.detailVoucher}</p>
                    : <textarea
                    className="border-2 rounded-lg p-2 focus:border focus:border-[#2BB673] focus:outline-none"
                    rows="4"
                    placeholder="รายละเอียด voucher"
                    value={input?.detailVoucher}
                    name={'detailVoucher'}
                    onChange={handleChange}></textarea>}
            </div>

            <div className="mt-2">
                { isEdit
                    ? <div className="flex gap-3">
                        <Button type="button" onClick={() => setIsEdit(false)} width="40" border="green" color="black">แก้ไข</Button>
                        <Button type="button" onClick={handleClickCloseModal} width="40" border="green" color="black">ปิด</Button>
                    </div>
                        
                    : <div className="flex gap-3"> <Button width="full" bg="green">ยืนยัน</Button>
                    <Button type="button" onClick={() => setIsEdit(true)} width="40" border="green" color="black">ยกเลิก</Button>
                    </div> }
                
            </div>
        </form> 
        
    </div>
  )
}
