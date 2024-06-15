import { useParams } from "react-router-dom";
// import storeApi from "../api/store";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import VoucherItem from "../features/stores/components/VoucherItem";
import SelectVoucher from "../features/voucher/components/SelectVoucher";
import voucherApi from "../api/voucher";
import lineApi from "../api/lineShopping";
import storeApi from "../api/store";
import CloseVoucher from "../features/voucher/components/CloseVoucher";

export default function VoucherPage() {

  const [ openModal, setOpenModal ] = useState(false)
  const [ selectVoucher, setSelectVoucher ] = useState(null)
  const [ getAllVoucherApiLine, setGetAllVoucherApiLine] = useState(null)
  const [ getStoreById, setGetStoreById ] = useState(null)
  const [ closeVoucher, setCloseVoucher ] = useState(null)
  const [ isVoucherCloseStatus, setIsVoucherCloseStatus ] = useState(false)
  const [ isClickVoucherUse, setIsClickVoucherUse ] = useState(true)

  const params = useParams()

  const fetchVoucherPage = async () => {
    try {

        const res = await storeApi.getStoreById(params.id)
        setGetStoreById(res.data)

    } catch (err) {
        console.log(err)
    }
  }

  const getVoucherApiLine = async () => {
    try {
      const voucherApiLine = await lineApi.getVoucherLine(params.id)
      setGetAllVoucherApiLine(voucherApiLine.data)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  const handClickConfirm = (data) => {
    setSelectVoucher(data)
    // console.log('first', data)
  }

  const handClickCancel = () => {
    setSelectVoucher(null)
  }

  const handleBtnConfirm = async () => {
    setOpenModal(false)
    
    const dataCreate = {
      nameVoucher: selectVoucher.name,
      numberVoucher: selectVoucher.id,
      imageVoucher: selectVoucher.imageUrls[3] || selectVoucher.imageUrls[0],
      statusVoucher: true,
      storeId: getStoreById.id
    }
    
    await voucherApi.createVoucher(dataCreate)
    getSelectVoucher()
  }

  console.log('selectVoucher', selectVoucher)
  console.log('getStoreById', getStoreById)

  const [ findSelectVoucher, setFindSelectVoucher ] = useState(null)

  const getSelectVoucher = async () => {
    try {
      const voucherUse = await voucherApi.getVoucher(params.id)
      const data = voucherUse.data
      console.log('dataaaaaaaaa', data)
      const voucherStatusTrue = []
      const voucherStatusFalse = []
      
      for (let i of data) {
        if (i.statusVoucher === true) {
          console.log('iiiiiiiiiiiii', i)
          voucherStatusTrue.push(i)
          
        } else {
          voucherStatusFalse.push(i)
        }
      }

      setFindSelectVoucher(voucherStatusTrue)
      setCloseVoucher(voucherStatusFalse)
      
    } catch (error) {
      console.log('error', error.message)
    }
  }

  useEffect(() => {
    fetchVoucherPage()
    getSelectVoucher()
  }, [])

  useEffect(() => {
    getVoucherApiLine()
  }, [getStoreById])

  const handleClickVoucherCloseStatus = () => {
    setIsVoucherCloseStatus(true)
    setIsClickVoucherUse(false)
  }

  return (
    <main className="p-4 flex-1">
      <div className="flex gap-3">
        <Button bg="gray" color="black" onClick={() => setOpenModal(true)}>เลือก Voucher ที่ต้องการใช้จาก Line Shopping</Button>
        <Button
          bg = {isClickVoucherUse ? "green" : "none" }
          border = {isClickVoucherUse ? 'none' : 'green' }
          color = {isClickVoucherUse ? "white" : 'black' }
          onClick = {() => {
            setIsVoucherCloseStatus(false)
            setIsClickVoucherUse(true)
            }}>Voucher ที่ใช้งานอยู่</Button>
        <Button
          border = {isClickVoucherUse ? 'green' : 'none' }
          color = {isClickVoucherUse ? "black" : 'white' }
          bg = {isClickVoucherUse ? "none" : 'green' }
          onClick = {handleClickVoucherCloseStatus}
          className = "text-gray-400 hover:underline">Voucher ที่ปิดการใช้งาน</Button>
      </div>
      <Modal width={60} title="เลือก voucher ที่ต้องการใช้" open={openModal} onClose={() => setOpenModal(false)}>
          <div className="grid grid-cols-4 gap-3 mt-3 mb-2 px-14" onClick={handClickCancel}>

            { getAllVoucherApiLine?.map((item) => (
              <VoucherItem key={item.id} data={item} selectVoucher={selectVoucher} handClickCancel={handClickCancel} onClick={handClickConfirm} />
            ))}
          
          </div>
          <div className="flex justify-center my-4 h-12 items-center">
             <Button onClick={ selectVoucher ? handleBtnConfirm : null} bg={ selectVoucher ? "green" : "greenDrop"}>ยืนยัน</Button>
          </div>
      </Modal>

      { isVoucherCloseStatus
        ? <div className="my-4">
          <CloseVoucher getSelectVoucher={getSelectVoucher} closeVoucher={closeVoucher} />
        </div>
        : <div className="my-4">
          <SelectVoucher getSelectVoucher={getSelectVoucher} findSelectVoucher={findSelectVoucher} />
        </div> }


    </main>
  )
}
