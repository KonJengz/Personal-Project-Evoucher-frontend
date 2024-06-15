import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../components/Button"
import { toast } from "react-toastify"
import { AxiosError } from "axios"
import useAdmin from "../hooks/useAdmin"
import validateLoginAdmin from "../features/admin/validate/validate-loginAdmin"
import Input from "../components/Input"


const initialInput = {
    username: '',
    password: ''
}

const initialInputError = {
    username: '',
    password: ''
}

export default function AdminPage() {

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    const { login } = useAdmin()

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
        setInputError((prev) => ({ ...prev, [e.target.name]: ''}))
    }

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()
            const error = validateLoginAdmin(input)
            if(error) {
                return setInputError(error)
            }

            console.log(input)
            setInputError(initialInputError)
            await login(input)
            navigate('/admin')
            toast.success('login success')

            setInput(initialInput)

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError) {

                setInputError((prev) => ({
                    ...prev,
                    password: err.response.data.message,
                    usernme: ' '
                }))

                const message = err.response.status === 400
                ? 'username or password invalid'
                : 'internal erver error'
                return toast.error(message)
            }
        }
    }

  return (
    <form onSubmit={handleSubmitFrom}>
        <div className="flex mx-auto justify-center flex-col gap-3 w-4/12 h-[70vh]">
            <h1 className="text-center font-semibold text-4xl">Admin login</h1>
            <div>
                <label>Username</label>
                <Input
                    placeholder="username admin"
                    value={input.username}
                    name={'username'}
                    onChange={handleChange}
                    error={inputError.username}
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
                <Button bg="green" width="full">ลงทะเบียน</Button>
            </div>
        </div>
    </form>
  )
}
