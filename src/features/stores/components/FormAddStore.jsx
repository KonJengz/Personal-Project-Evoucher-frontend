import { useState } from "react";
import { AxiosError } from "axios";
import validateAddstore from "../validate/validate-store";
import storeApi from "../../../api/store";
import { toast } from "react-toastify";
import useStore from "../../../hooks/useStore";
import FormStore from "./FormStore";

const initialInput = {
  nameStore: '',
//   profileImage: '',
  lineShoppingUrl: '',
  emailStore: '',
  phoneStore: ''
}

const initialInputError = {
  nameStore: '',
//   profileImage: '',
  lineShoppingUrl: '',
  emailStore: '',
  phoneStore: ''
}

export default function FormAddStore({ closeFormAddStore }) {

    const { fetchStore } = useStore()

  const [ input, setInput ] = useState( initialInput )
  const [ inputError, setInputError ] = useState( initialInputError )
  const [ file, setFile ] = useState(null)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value})
    setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
}

const handleSubmitFrom = async (e) => {
  try {
      e.preventDefault()

      const err = validateAddstore(input)

      if (err) {
          console.log('333333',err)
          return setInputError(err)
      }
       
      setInputError({...initialInput})

      console.log(file)
      console.log('nameStore',input.nameStore)
      const formData = new FormData();
        formData.append('profileImage', file);
        formData.append('nameStore' , input.nameStore)
        formData.append('lineShoppingUrl' , input.lineShoppingUrl)
        formData.append('emailStore' , input.emailStore)
        formData.append('phoneStore' , input.phoneStore)

      await storeApi.addStore(formData)

      toast.success('add store successfully.')
      closeFormAddStore()
      setInput({...initialInput})

      fetchStore()

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

  return (
    <FormStore
        handleSubmitFrom={handleSubmitFrom}
        input={input}
        handleChange={handleChange}
        inputError={inputError}
        file={file}
        setFile={setFile}
        textBtutton='เพิ่มร้านค้า'
    />
  )
}
