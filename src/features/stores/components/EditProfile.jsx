import { useState } from "react";
import FormStore from "./FormStore";
import storeApi from "../../../api/store";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import validateAddstore from "../validate/validate-store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

  const initialInputError = {
    nameStore: '',
    lineShoppingUrl: '',
    emailStore: '',
    phoneStore: ''
  }

export default function EditProfile({ fetchStorePage, getStoreById }) {

    const initialInput = {
        nameStore: getStoreById.nameStore,
        lineShoppingUrl: getStoreById.lineShoppingUrl,
        emailStore: getStoreById.emailStore,
        phoneStore: getStoreById.phoneStore
      }

    const [ input, setInput ] = useState( {
      nameStore: getStoreById.nameStore,
      lineShoppingUrl: getStoreById.lineShoppingUrl,
      emailStore: getStoreById.emailStore,
      phoneStore: getStoreById.phoneStore
    } )
    const [ inputError, setInputError ] = useState( initialInputError )
    const [ file, setFile ] = useState(null)
    const params = useParams()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    // useEffect(()=>{
    //   // setInput({
    //   //   nameStore: getStoreById.nameStore,
    //   //   lineShoppingUrl: getStoreById.lineShoppingUrl,
    //   //   emailStore: getStoreById.emailStore,
    //   //   phoneStore: getStoreById.phoneStore
    //   // })
    // },[input])

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()
      
            const err = validateAddstore(input)
      
            if (err) {
                console.log('333333',err)
                return setInputError(err)
            }
             
            setInputError({...initialInputError})
      
            console.log(file)
            // console.log('nameStore',input.nameStore)
            const formData = new FormData();
              formData.append('profileImage', file);
              formData.append('nameStore' , input.nameStore)
              formData.append('lineShoppingUrl' , input.lineShoppingUrl)
              formData.append('emailStore' , input.emailStore)
              formData.append('phoneStore' , input.phoneStore)
              
            console.log('formData', formData)
      
            await storeApi.editProfileStore(params.id, formData)
      
            toast.success('update successfully.')
      
            fetchStorePage()
      
        } catch (error) {
            console.log(error.response)
            if (error instanceof AxiosError) {
                    setInputError((prev) => ({
                        ...prev,
                        lineShoppingUrl: error.response.data.message
                    }))
            }
        }
      }

      console.log('initialInput', initialInput)
      console.log('input ===========', input)

  return (
    <FormStore
        handleSubmitFrom={handleSubmitFrom}
        input={input}
        handleChange={handleChange}
        inputError={inputError}
        file={file}
        setFile={setFile}
        textBtutton='ยืนยัน'
        profileImage={getStoreById.profileImage}
    />
  )
}
