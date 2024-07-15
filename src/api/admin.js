import axios from "../config/axiosAdmin";

const adminApi = {}

adminApi.register = (body) => axios.post('/admin/register', body) // axios({ method : "post","url" })
adminApi.login = (body) => axios.post('/admin/login', body)
adminApi.getAuthAdmin = () => axios.get('/admin/me')

adminApi.getAllUser = () => axios.get('/admin/getusers')
adminApi.updateStatusUser = (status) => axios.patch('/admin/updateStatus', status)
adminApi.getAllStore = () => axios.get('/admin/getuAllstore')
adminApi.countOrderByUserId = () => axios.get('/admin/countOrderByUserId')

export default adminApi