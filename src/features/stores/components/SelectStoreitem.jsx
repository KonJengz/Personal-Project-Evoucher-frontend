import { useNavigate } from "react-router-dom"
import { setAccessStoreId } from "../../../utils/local-storage"

export default function SelectStoreitem({ profileImage, item }) {

  const navigate = useNavigate()

  const handleClick = () => {
    setAccessStoreId(item.id)
    const path = `/store/${item.id}`
    navigate(path)
    
  }

  return (
            <div onClick={handleClick} className='w-40 h-40 overflow-hidden rounded-full hover:drop-shadow-[0px_0px_6px_rgba(0,0,0,0.4)]'>
                <img className='h-full w-full object-cover' src={profileImage} alt="logo store" />
            </div>
  )
}
