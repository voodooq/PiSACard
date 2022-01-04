import axios from 'axios'
export const DEV_URL = `http://127.0.0.1:3000/api/`
export const PROD_URL = 'https://card.pisa.world/api/'
const isDev = process.env.NODE_ENV === 'development'

export default axios.create({
    baseURL: isDev ? DEV_URL : PROD_URL
})
