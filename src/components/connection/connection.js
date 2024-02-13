import axios from 'axios'

const BASE_URL = 'https://login-register-system-54ud.onrender.com'
const connection = axios.create({baseURL: BASE_URL})

export default connection