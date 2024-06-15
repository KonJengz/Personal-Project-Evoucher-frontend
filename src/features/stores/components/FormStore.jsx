import { useRef } from "react"
import Input from "../../../components/Input"
import imgSelect from '../../../assets/plus.svg'
import Button from "../../../components/Button"


export default function FormStore({
    handleSubmitFrom, input, handleChange, inputError, file, setFile, textBtutton, profileImage
}) {

    const fileEl = useRef()

    console.log('input input', input)

  return (
    <form onSubmit={handleSubmitFrom}>
        <div className="flex mx-10 flex-col gap-3 mb-7 mt-1">
            <div>
                <label>ชื่อร้านค้า</label>
                <Input
                    placeholder="ชื่อร้านค้าของคุณ"
                    value={input.nameStore}
                    name={'nameStore'}
                    onChange={handleChange}
                    error={inputError.nameStore}
                />
            </div>

            <div role="button">
                <label>logo ร้านค้า</label>
                <div className="flex gap-3 items-center">
                    {profileImage
                        ? <div onClick={() => fileEl.current.click()} className={`w-20 h-20 bg-gray-200 rounded-xl overflow-hidden relative`}>
                            <img className="object-contain " src={profileImage} alt="imgSelect" />
                        </div>
                        : null}

                    <div role="button" onClick={() => fileEl.current.click()} className={`w-20 bg-gray-200 ${file ? '' : 'p-6' } rounded-xl overflow-hidden relative`}>
                        { file
                            ? <div className="text-gray-400 text-sm absolute right-1 top-0"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setFile(null)
                                    fileEl.current.value = ''
                                }}>&#10005;</div>
                            : null}

                    <img src={file ? URL.createObjectURL(file) : imgSelect} alt="imgSelect" />
                    
                    </div>
                    <small>ขนาดที่แนะนำ 1,040 x 1,040 px</small>
                </div>
                <input
                    type="file"
                    ref={fileEl}
                    className="hidden"
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0])
                        }
                    }} />
            </div>

            <div>
                <label>LINE Shopping URL</label>
                <Input
                    placeholder="https://shop.line.me/@"
                    value={input.lineShoppingUrl}
                    name={'lineShoppingUrl'}
                    onChange={handleChange}
                    error={inputError.lineShoppingUrl}
                />
            </div>

            <div>
                <label>Phone store</label>
                <Input
                    placeholder="เบอร์ติดต่อร้านค้าของคุณ 10 หลัก"
                    value={input.phoneStore}
                    name={'phoneStore'}
                    onChange={handleChange}
                    error={inputError.phoneStore}
                />
            </div>

            <div>
                <label>Email store</label>
                <Input
                    placeholder="Email ร้านค้าของคุณ"
                    value={input.emailStore}
                    name={'emailStore'}
                    onChange={handleChange}
                    error={inputError.emailStore}
                />
            </div>

            <div className="mt-3 mx-auto">
                <Button bg="green" width="40">{textBtutton}</Button>
            </div>
        </div>
    </form>
  )
}
