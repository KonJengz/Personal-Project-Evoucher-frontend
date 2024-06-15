import axios from "../config/axios";

const storeApi = {}

storeApi.addStore = (body) => axios.post('/store/addstore', body)
// storeApi.getAllStore = () => axios.get('/store/getstore')
storeApi.updateImageProfile = () => axios.patch('/store')

storeApi.getStoreByUserId = () => axios.get(`/store`)
storeApi.getStoreById = (storeId) => axios.get(`/store/storeId/${storeId}`)
storeApi.editProfileStore = (storeId, body) => axios.patch(`/store/editStore/${storeId}`, body)
storeApi.editStoreByid = (body) => axios.patch(`/store/editStoreByid`, body)

export default storeApi