import { useState } from "react"
import { useEffect } from "react"
import storeApi from "../api/store"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Input from "../components/InputSetting"

const initialInputError = {
  startDate: '',
  endDate: ''
}


export default function SettingPage() {

  const [ getStoreById, setGetStoreById ] = useState(null)

  const [ input, setInput ] = useState({
    id: getStoreById?.id,
    nameStore: getStoreById?.nameStore,
    lineShoppingUrl: getStoreById?.lineShoppingUrl,
    ApiKey: getStoreById?.ApiKey || '',
    secretKeyApi: getStoreById?.secretKeyApi  || '',
    webHookForOpenApi: getStoreById?.webHookForOpenApi  || ''
  })
  const [ inputError, setInputError ] = useState( initialInputError )
  const [ isEdit, setIsEdit ] = useState({
    nameStore: false,
    lineShoppingUrl: false,
    ApiKey: false,
    secretKeyApi: false,
    webHookForOpenApi: false
  })

    const params = useParams()
    // console.log(params)

      const fetchStorePage = async () => {
        try {
            const res = await storeApi.getStoreById(params.id)
            setGetStoreById(res.data)
            
        } catch (err) {
            console.log(err)
        } 
    }

    useEffect(() => {
      fetchStorePage()
    }, [])

    useEffect(() => {
      setInput({
        id: getStoreById?.id,
        nameStore: getStoreById?.nameStore,
        lineShoppingUrl: getStoreById?.lineShoppingUrl,
        ApiKey: getStoreById?.ApiKey || '',
        secretKeyApi: getStoreById?.secretKeyApi  || '',
        webHookForOpenApi: getStoreById?.webHookForOpenApi  || ''
      })
    }, [getStoreById])

    const handleChange = (e) => {
      setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
      setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
  }

    const handleSubmitFrom = async (e) => {
      try {

          // console.log('input', input)
          toast.success('update success')
          
          // console.log('e.target.name', e)
          setIsEdit((prev) => ({...prev, [e]:false}))
          await storeApi.editStoreByid(input)
          fetchStorePage()
          
      } catch (err) {
          console.log(err.message)
      }
  }

  // console.log('getStoreById', getStoreById)
  // console.log('inputeeeeeeeee', input)
  // console.log('isEdit', isEdit)


  return (
  <div className="p-4 w-full flex gap-2">

    <form className="flex gap-4 flex-col flex-1">
      <div role="buttom" className="flex flex-col gap-1 bg-gray-50 py-5 px-6 rounded-2xl hover:shadow-[0_0px_8px_1px_rgba(0,0,0,0.07)]">
        <div className="flex items-end gap-3">
          <label className="">ชื่อร้านค้า</label>
          { !isEdit.nameStore
            ?  <small onClick={() => setIsEdit({...isEdit, nameStore: true})} className="hover:underline" role="button">แก้ไข</small>
            :  <>
              <small onClick={() => handleSubmitFrom('nameStore')} className="hover:underline text-[#2BB673]" role="button">บันทึก</small>
              <small onClick={() => setIsEdit({...isEdit, nameStore: false})} className="hover:underline" role="button">ยกเลิก</small>
            </>
          }
        </div>
        { !isEdit.nameStore
            ? <p className="">{getStoreById?.nameStore}</p>
            : <Input
            placeholder="ชื่อร้านค้า"
            value={input?.nameStore}
            name={'nameStore'}
            onChange={handleChange}
            error={inputError.nameStore}
        />}
        
      </div>

      <div role="buttom" className="flex flex-col gap-1 bg-gray-50 py-5 px-6 rounded-2xl hover:shadow-[0_0px_8px_1px_rgba(0,0,0,0.07)]">
        <div className="flex items-end gap-3">
          <label className="">line Shopping Url</label>
          { !isEdit.lineShoppingUrl
            ?  <small onClick={() => setIsEdit({...isEdit, lineShoppingUrl: true})} className="hover:underline" role="button">แก้ไข</small>
            :  <>
            <small onClick={() => handleSubmitFrom('lineShoppingUrl')} className="hover:underline text-[#2BB673]" role="button">บันทึก</small>
            <small onClick={() => setIsEdit({...isEdit, lineShoppingUrl: false})} className="hover:underline" role="button">ยกเลิก</small>
          </> }
        
        </div>
        { !isEdit.lineShoppingUrl
            ? <p>{getStoreById?.lineShoppingUrl}</p>
            : <Input
            placeholder="voucher ID"
            value={input?.lineShoppingUrl}
            name={'lineShoppingUrl'}
            onChange={handleChange}
            error={inputError.lineShoppingUrl}
        />}
      </div>

      <div role="buttom" className="flex flex-col gap-1 bg-gray-50 py-5 px-6 rounded-2xl hover:shadow-[0_0px_8px_1px_rgba(0,0,0,0.07)]">
        <div className="flex items-end gap-3">
          <label className="">Api Key</label>
          { !isEdit.ApiKey
            ?  <small onClick={() => setIsEdit({...isEdit, ApiKey: true})} className="hover:underline" role="button">แก้ไข</small>
            :  <>
            <small onClick={() => handleSubmitFrom('ApiKey')} className="hover:underline text-[#2BB673]" role="button">บันทึก</small>
            <small onClick={() => setIsEdit({...isEdit, ApiKey: false})} className="hover:underline" role="button">ยกเลิก</small>
          </>
          }
        </div>
        { !isEdit.ApiKey
            ? <p>{getStoreById?.ApiKey}</p>
            : <Input
            placeholder="Api Key"
            value={input?.ApiKey}
            name={'ApiKey'}
            onChange={handleChange}
            error={inputError.ApiKey}
        />}
      </div>

      <div role="buttom" className="flex flex-col gap-1 bg-gray-50 py-5 px-6 rounded-2xl hover:shadow-[0_0px_8px_1px_rgba(0,0,0,0.07)]">
        <div className="flex items-end gap-3">
            <label className="">Secret Key Api</label>
            { !isEdit.secretKeyApi
            ?  <small onClick={() => setIsEdit({...isEdit, secretKeyApi: true})} className="hover:underline" role="button">แก้ไข</small>
            : <>
            <small onClick={() => handleSubmitFrom('secretKeyApi')} className="hover:underline text-[#2BB673]" role="button">บันทึก</small>
            <small onClick={() => setIsEdit({...isEdit, secretKeyApi: false})} className="hover:underline" role="button">ยกเลิก</small>
          </>
            }
        </div>

        { !isEdit.secretKeyApi
            ? <p>{getStoreById?.secretKeyApi}</p>
            : <Input
            placeholder="Secret Key Api"
            value={input?.secretKeyApi}
            name={'secretKeyApi'}
            onChange={handleChange}
            error={inputError.secretKeyApi}
        />}
      </div>

      <div role="buttom" className="flex flex-col gap-1 bg-gray-50 py-5 px-6 rounded-2xl hover:shadow-[0_0px_8px_1px_rgba(0,0,0,0.07)]">
        <div className="flex items-end gap-3">
            <label className="">Webhook For Open Api</label>
            { !isEdit.webHookForOpenApi
            ?  <small onClick={() => setIsEdit({...isEdit, webHookForOpenApi: true})} className="hover:underline" role="button">แก้ไข</small>
            :  <>
            <small onClick={() => handleSubmitFrom('webHookForOpenApi')} className="hover:underline text-[#2BB673]" role="button">บันทึก</small>
            <small onClick={() => setIsEdit({...isEdit, webHookForOpenApi: false})} className="hover:underline" role="button">ยกเลิก</small>
          </>
            }
        </div>
        { !isEdit.webHookForOpenApi
            ? <p>{getStoreById?.webHookForOpenApi}</p>
            : <Input
            placeholder="Webhook For Open Api"
            value={input?.webHookForOpenApi}
            name={'webHookForOpenApi'}
            onChange={handleChange}
            error={inputError.webHookForOpenApi}
        />}
      </div>
    </form>

    <div className="flex flex-shrink-0 pl-20 flex-1">
      <img className="h-[20rem]" src="https://lh5.googleusercontent.com/d/18DTHYC6dTEc7twOnyDj9tGtGotbQn706" alt="setting" />
    </div>
  </div>
  )
}
