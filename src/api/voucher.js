import axios from "../config/axios";

const voucherApi = {}

voucherApi.createVoucher = (body) => axios.post('/voucher/create', body)
voucherApi.getVoucher = (storeId) => axios.get(`/voucher/${storeId}`)
// voucherApi.getAllStore = () => axios.get('/store/getstore')
// voucherApi.updateImageProfile = () => axios.patch('/store')
// storeApi.getStoreByid = (storeId) => axios.get(`/store/${storeId}`)

voucherApi.updateDataVoucher = (body) => axios.patch(`/voucher/update`, body)

export default voucherApi