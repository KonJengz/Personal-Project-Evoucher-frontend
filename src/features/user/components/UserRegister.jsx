import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { AxiosError } from "axios";
import validateRegister from "../validator/validate-register.js";
import userApi from "../../../api/authUser";
import { toast } from 'react-toastify'
// import useAdmin from "../../../hooks/useAdmin";

const initialInput = {
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

const initialInputError = {
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

export default function UserRegister({ onCloseModal }) {

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

   const handleSubmitForm = async (e) => {
    try {
        e.preventDefault()
        const error = validateRegister(input)

        if( error ) {
            setInputError(error)
            
            if (input.confirmPassword === '') {
                return setInputError((prev)=>({...prev, confirmPassword: "confirm password is required"}))
            }
        }


        setInputError({...initialInputError})

        await userApi.register(input)

        toast.success("register successfully. please login to continue.")
        onCloseModal()
        
    } catch (err) {
        console.log(err)
        if (err instanceof AxiosError) {
            if (err.response.data.message === 'email already in use')
              setInputError(prev => ({
                ...prev,
                email: 'email already in use.'
              }));
          }
    }
   }

  return (
    <form onSubmit={handleSubmitForm}>
        <div className="flex mx-10 flex-col gap-3 mb-7 mt-1">
            <div>
                <label>Email</label>
                <Input
                    placeholder="email ใช้สำหรับ login"
                    value={input.email}
                    name={'email'}
                    onChange={handleChange}
                    error={inputError.email}
                />
            </div>

            <div>
                <label>หมายเลขโทรศัพท์มือถือ</label>
                <Input
                    placeholder="สำหรับติดต่อคุณลูกค้า"
                    value={input.phone}
                    name={'phone'}
                    onChange={handleChange}
                    error={inputError.phone}
                />
            </div>

            <div>
                <label>Password</label>
                <Input
                    placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                    value={input.password}
                    name={'password'}
                    onChange={handleChange}
                    error={inputError.password}
                    typeInput="password"
                />
            </div>

            <div>
                <label>Confirm password</label>
                <Input
                    placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                    value={input.confirmPassword}
                    name={'confirmPassword'}
                    onChange={handleChange}
                    error={inputError.confirmPassword}
                    typeInput="password"
                />
            </div>

            <div className="mt-3">
                <Button bg="green" width="full">ลงทะเบียน</Button>
            </div>
        </div>
    </form>
  )
}
