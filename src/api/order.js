import axios from "../config/axios";

const orderApi = {}

orderApi.getVoucherByStoreId = (storeId) => axios.get(`order/getvoucher/${storeId}`)
orderApi.getOrderByStoreId = (numberVoucher) => axios.get(`order/getallorder/${numberVoucher}`)
orderApi.getOrderById = (orderId) => axios.get(`order/dataOrder/${orderId}`)

export default orderApi