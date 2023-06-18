import axios from 'axios'

// const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

const API = axios.create({ baseURL: "http://localhost:5000"})
export const register = (formData) => API.post('/register', formData)
export const login = (formData) => API.post('/login', formData)
