import SelectStoreitem from "./SelectStoreitem";
import imgSelect from '../../../assets/plus.svg'
import useStore from "../../../hooks/useStore";

export default function SelectStore({ onClickAddstore, closeModal }) {

    const { getStore } = useStore()

    // console.log('selestore getStore',getStore)

  return (
    <div className="flex justify-center py-5">
        <div className='grid grid-cols-3 gap-8 content-start'>

            { getStore?.map((item) => (
                <div role="button" key={item.id} onClick={closeModal}>
                    <SelectStoreitem item={item} profileImage={item.profileImage} />
                </div>
            ))}
            
            <div onClick={onClickAddstore}>
                <div className='bg-gray-200 w-40 h-40 overflow-hidden rounded-full flex items-center justify-center hover:bg-gray-300'>
                    <img className="w-10" src={imgSelect} alt="logo store" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
