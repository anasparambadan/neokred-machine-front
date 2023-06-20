import axios from 'axios'



const API = axios.create({ baseURL: "https://t42sgp-5000.csb.app"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
  })
export const getProfile = () => API.get('/profile')