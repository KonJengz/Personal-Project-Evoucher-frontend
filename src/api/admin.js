import axios from "../config/axios";

const adminApi = {}

adminApi.register = (body) => axios.post('/admin/register', body) // axios({ method : "post","url" })
adminApi.login = (body) => axios.post('/admin/login', body)
adminApi.getAuthUser = () => axios.get('/admin/me')

export default adminApi