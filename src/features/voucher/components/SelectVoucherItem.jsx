import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import EditVoucher from "./EditVoucher";
import voucherApi from "../../../api/voucher";
import { useParams } from "react-router-dom";


export default function SelectVoucherItem({ findSelectVoucher, getSelectVoucher }) {

    const [ openModal, setOpenModal ] = useState(false)
    const params = useParams()

    const handleClickCloseModal = () => {
        setOpenModal(false)
      }

    const handleClickCloseStatusVoucher = async () => {
        try {
            const updateStatusVoucher = { // ทำข้อมูล update statusVoucher
                id: findSelectVoucher.id,
                statusVoucher: false}
            await voucherApi.updateDataVoucher(updateStatusVoucher, params.id)
            getSelectVoucher()
        } catch (error) {
            console.log('error', error)
        }
    }

  return (
    <div className="max-w-52">
      <div role="button" className="relative">
        <div className="rounded-2xl overflow-hidden">
            <img className="w-full" src={findSelectVoucher?.imageVoucher} alt={findSelectVoucher?.nameVoucher} />
        </div>
        <button onClick={handleClickCloseStatusVoucher} className="absolute top-0 right-2">&#10005;</button>
        <h3 className="text-xs px-2 pt-2">{findSelectVoucher?.nameVoucher}</h3>

        { findSelectVoucher ? <div className="pt-2"> 
          <Button width="full" onClick={() => setOpenModal(true)} border="green" color="black">view</Button>
        </div> : null } 
        
      </div>
      
      {/* ที่กด modal ขึ้นมาเพื่มดูข้อมูล voucher */}
      <Modal width={40} title="แก้ไข voucher" open={openModal} onClose={handleClickCloseModal}>
          <EditVoucher handleClickCloseModal={handleClickCloseModal} selectVoucher={findSelectVoucher} getSelectVoucher={getSelectVoucher} />
      </Modal>
    </div>
  )
}
