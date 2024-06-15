import axios from "../config/axios";

const lineApi = {}


lineApi.getVoucherLine = (storeId) => axios.get(`/voucher/line/${storeId}`)


export default lineApi