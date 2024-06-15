import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { AxiosError } from "axios";
import validateLogin from "../validator/validate-login.js";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import useAuth from "../../../hooks/useAuth";

const initialInput = {
    email: '',
    password: ''
}

const initialInputError = {
    email: '',
    password: ''
}

export default function LoginUser({ onClose }) {

    const { login, openModalStore } = useAuth()

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()
            const error = validateLogin(input)

            if(error) {
                return setInputError(error)
            }

            setInputError(initialInputError)
            await login(input)
            navigate('/store')
            toast.success('login success')

            setInput(initialInput)
            onClose()
            openModalStore()

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {

                setInputError((prev) => ({
                    ...prev,
                    password: err.response.data.message,
                    email: ' '
                }))

                const message = err.response.status === 400
                ? 'email or password invalid'
                : 'internal erver error'
                return toast.error(message)
            }
        }
    }

  return (
    <form onSubmit={handleSubmitFrom}>
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

            <div className="mt-3">
                <Button bg="green" width="full">เข้าสู่ระบบ</Button>
            </div>
        </div>
    </form>
  )
}
