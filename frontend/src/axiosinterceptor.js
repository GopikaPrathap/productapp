import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'http://localhost:8000'
})
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=localStorage.getItem("token")
    if(accessToken){
        if(config){
            //token is from middlewae token in productRoute
            config.headers.token=accessToken
        }
    }
    return config
},(error)=>{
   return Promise.reject(error)
})
export default axiosInstance;