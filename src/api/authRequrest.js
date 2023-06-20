import axios from 'axios'



const API = axios.create({ baseURL: "https://t42sgp-5000.csb.app"})
export const register = (formData) => API.post('/register', formData)
export const login = (formData) => API.post('/login', formData)
