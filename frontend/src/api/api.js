import axios from 'axios'

const api=axios.create({
    baseURL:'https://portfolio-backend-five-rho.vercel.app'
})

export default api