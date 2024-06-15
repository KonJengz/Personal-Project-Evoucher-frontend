import axios from 'axios'

const axiosLine = axios.create({
    baseURL: import.meta.env.VITE_API_LINE
})

export default axiosLine