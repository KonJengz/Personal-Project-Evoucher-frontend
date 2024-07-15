import { createContext, useState } from 'react'
import { getAccessTokenAdmin, removeAccessTokenAdmin, setAccessTokenAdmin } from "../utils/local-storage";
import { useEffect } from 'react';
import adminApi from '../api/admin';

export const AdminContext = createContext()

export default function AdminContextProvider({ children }) {

    const [ authAdmin, setAuthAdmin ] = useState(null)
    const [ isAuthAdminLoading, setIsAuthAdminLoding ] = useState(true)
    const [ getAllUser, setGetAllUser ] = useState(null)
    const [ getAllStore, setAllStore ] = useState(null)

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                if (getAccessTokenAdmin()) {
                    const res = await adminApi.getAuthAdmin()
                    // console.log('res.data',res.data)
                    setAuthAdmin(res.data.admin)

                    const resGetAllStore = await adminApi.getAllStore()
                    setAllStore(resGetAllStore.data)

                }
            } catch (err) {
                console.log(err)
            } finally {
                setIsAuthAdminLoding(false)
            }
        }

        fetchAdmin()
    }, [])

    const fetchAllUserPageAdmin = async () => {
        try {
            if (getAccessTokenAdmin()) {
                const res = await adminApi.getAllUser()
                setGetAllUser(res.data)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsAuthAdminLoding(false)
        }
  }

    useEffect(() => {
    
        fetchAllUserPageAdmin()
    }, [authAdmin])

    const login = async ( credentials ) => {
        // console.log('credentials', credentials)
        const res = await adminApi.login(credentials)
        setAccessTokenAdmin(res.data.accessTokenAdmin)
    
        const resGetAuthUser = await adminApi.getAuthAdmin()
        setAuthAdmin(resGetAuthUser.data.admin)


      }

    const logout = () => {
        removeAccessTokenAdmin()
        setAuthAdmin(null)
    }

  return (
    <AdminContext.Provider value={{ login, logout, authAdmin, isAuthAdminLoading, getAllUser, getAllStore }}>
        { children }
    </AdminContext.Provider>
  )
}
