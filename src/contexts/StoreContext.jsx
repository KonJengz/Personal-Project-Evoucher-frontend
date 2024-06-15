import { createContext } from "react";
import storeApi from "../api/store";
import { getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from '../hooks/useAuth'

export const StoreContext = createContext() 

export default function StoreContextProvider({ children }) {

    const [ getStore, setGetStore ] = useState(null)
    const [ isGetStoreLoading, setGetStoreLoding ] = useState(true)
    

    const { authUser } = useAuth()

    // console.log('authUser', authUser)
    const fetchStore = async () => {
        try {
            if (getAccessToken()) {
                const res = await storeApi.getStoreByUserId()
                setGetStore(res.data.store)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setGetStoreLoding(false)
        }
    }
    useEffect(() => {
    
        fetchStore()
    }, [authUser])
    
    // console.log('getStore', getStore)

    
    return (
        <StoreContext.Provider value={{ getStore, isGetStoreLoading ,fetchStore }}>
            { children }
        </StoreContext.Provider>
    )
}