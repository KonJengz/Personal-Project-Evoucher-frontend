import Avatar from "../../../components/Avatar";
import Menu from "../../../layouts/Menu";
import SelectStore from "./SelectStore";
import Modal from "../../../components/Modal";
import { useState } from "react";
import FormAddStore from "./FormAddStore";
import { useParams } from "react-router-dom";
import storeApi from "../../../api/store";
import { useEffect } from "react";
import EditProfile from "./EditProfile";
import useAuth from "../../../hooks/useAuth";

export default function HeaderStore() {

    const [ openModalProfile, setOpenModalProfile ] = useState(false)
    const [ addStore, setAddStore ] = useState(false)
    const [ getStoreById, setGetStoreById ] = useState(null)

    const { closeModalSelectStore, openModalStore, openModalSelectStore} = useAuth()

    const params = useParams()
    // console.log('params', params.id)

        const fetchStorePage = async () => {
        try {
            if (params.id) {
                const res = await storeApi.getStoreById(params.id)
                setGetStoreById(res.data)
            }
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
    
        fetchStorePage()
    }, [params.id])

    const handleClickAddStore = () => {
        setAddStore(true)
    }

    const closeFormAddStore = () => {
        setAddStore(false)
    }


  return (
    <div>
        <div className="flex justify-between items-center px-7 pt-5 pb-3 border-b border-gray-300">
            <div role="button" className="flex gap-3">
                <div onClick={() => {
                    if (getStoreById) {
                        setOpenModalProfile(true)
                    }
                }} className="flex items-center justify-center border-2 border-[#f3f3f3] hover:border-2 hover:border-[#2BB673] rounded-full">
                    <Avatar size={3} src={getStoreById?.profileImage} />
                </div>
                <div>
                    <h1 className="font-semibold text-xl mt-1 -mb-1">{getStoreById?.nameStore || "ชื่อร้านค้า"}</h1>
                    <div role="button" className="hover:text-[#999999]" onClick={() => {
                        openModalStore()
                        setAddStore(false)
                    }}>
                        <small className="cursor-pointer">เลือกร้านค้า</small>
                    </div>
                </div>
            </div>

            <div>
                <Menu />
            </div>
        </div>

        
        <Modal title={addStore? "เพิ่มร้านค้า" : "เลือกร้านค้าที่ต้องการใช้งาน"} open={openModalSelectStore} onClose={closeModalSelectStore} width={40}>
        { addStore ? <FormAddStore closeFormAddStore={closeFormAddStore} /> : <SelectStore closeModal={closeModalSelectStore} onClickAddstore={handleClickAddStore} />}
        </Modal>

        <Modal title="แก้ไข Profile ร้านค้า" open={openModalProfile} onClose={() => setOpenModalProfile(false)}>
            <EditProfile getStoreById={getStoreById} fetchStorePage={fetchStorePage} />
        </Modal>
        
    </div>
  )
}
