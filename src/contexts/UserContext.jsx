import { createContext, useState } from 'react'
import { getAccessToken, removeAccessToken, setAccessToken } from "../utils/local-storage";
import userApi from '../api/authUser';
import { useEffect } from 'react';

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

  const [ authUser, setAuthUser ] = useState(null)
  const [ isAuthUserLoading, setIsAuthUserLoding ] = useState(true)
  const [ openModalSelectStore, setOpenModalSelectStore ] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
        try {
            if (getAccessToken()) {
                const res = await userApi.getAuthUser()
                setAuthUser(res.data.user)

            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsAuthUserLoding(false)
        }
    }

    fetchUser()
}, [])

  const login = async ( credentials ) => {
    
    const res = await userApi.login(credentials)
    setAccessToken(res.data.accessToken)

    const resGetAuthUser = await userApi.getAuthUser()
    setAuthUser(resGetAuthUser.data.user)
  }

  const logout = () => {
    removeAccessToken()
    setAuthUser(null)
    localStorage.clear()
  }

  const closeModalSelectStore = () => {
    setOpenModalSelectStore(false)
  }

  const openModalStore = () => {
      setOpenModalSelectStore(true)
  }

  // console.log('getAccessToken', getAccessToken())

  return (
    <AuthContext.Provider value={{ login, logout, authUser, isAuthUserLoading, closeModalSelectStore, openModalStore, openModalSelectStore }}>
      { children }
    </AuthContext.Provider>
  )
}
