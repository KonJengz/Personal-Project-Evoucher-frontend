import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

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

export default function UserRegister() {

    const [ input, setInput ] = useState( initialInput )
    const [ inputError, setInputError ] = useState( initialInputError )

    console.log(input)

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value})
    }

    const handleSubmitFrom = async (e) => {
        try {
            e.preventDefault()

        } catch (err) {
            console.log(err)
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
                    error={'password มากกว่า 6 ตัวอักษรขึ้นไป'}
                />
            </div>

            <div>
                <label>หมายเลขโทรศัพท์มือถือ</label>
                <Input
                    placeholder="สำหรับติดต่อคุณลูกค้า"
                    value={input.phone}
                    name={'phone'}
                    onChange={handleChange}
                    error={''}
                />
            </div>

            <div>
                <label>Password</label>
                <Input
                    placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                    value={input.password}
                    name={'password'}
                    onChange={handleChange}
                    error={''}
                    type="password"
                />
            </div>

            <div>
                <label>Confirm password</label>
                <Input
                    placeholder="จำนวน 6 ตัวอักษรขึ้นไป"
                    value={input.confirmPassword}
                    name={'confirmPassword'}
                    onChange={handleChange}
                    error={''}
                    type="password"
                />
            </div>

            <div className="mt-3">
                <Button bg="green" width="full">ลงทะเบียน</Button>
            </div>
        </div>
    </form>
  )
}
