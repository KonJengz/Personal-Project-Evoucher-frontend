import { useState } from "react"
import { createContext } from "react"
import { getAccessToken } from "../utils/local-storage";
import orderApi from "../api/order";

export const OrderContext = createContext() 

export default function OrderContextProvider({ children }) {

  const [ getAllVoucher, setGetAllVoucher ] = useState(null)

  const fetchOrder = async (storeId) => {

    try {
      if (getAccessToken()) {
        const res = await orderApi.getVoucherByStoreId(storeId)
        // console.log('res.data fetchOrder', res.data)
        setGetAllVoucher(res.data)
      }
    } catch (error) {
      console.log('error getOrder', error)
    }
  }

  return (
    <OrderContext.Provider value={{ fetchOrder, getAllVoucher }}>
        { children }
    </OrderContext.Provider>
  )
}
