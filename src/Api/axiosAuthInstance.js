import axios from "axios";
import useAuthStore from "../store/authStore";

const axiosAuthInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
  withCredentials:true,
});


const axiosRefresh = axios.create({
   baseURL: 'https://knowledgeshop.runasp.net/api',
  withCredentials:true,
})

 axiosAuthInstance.interceptors.request.use((config)=>{
    const{token}= useAuthStore.getState();
  config.headers["Accept-language"]= "en";
  config.headers["Authorization"]= `Bearer ${token}`
  return config;
 })

axiosAuthInstance.interceptors.response.use((response)=>{
  console.log(response)
  return response;
}, async(error)=>{
  const originalRequist=error.config;
  if(error.response.status=== 401 && !originalRequist._retry){
    !originalRequist._retry=== true;

    try{
      const refreshResponse= await axiosRefresh.post(`/auth/Account/RefreshToken`,{});
      const newAccessToken = refreshResponse.data.accessToken;
      useAuthStore.getState().setToken(newAccessToken);
      originalRequist.headers["Authorization"]= `Bearer ${newAccessToken}`
      return axiosAuthInstance(originalRequist);
    }catch(refreshError){
      useAuthStore.getState().logout();
      return Promise.reject(refreshError)
    }
  }

  return Promise.reject(error);
})
 export default axiosAuthInstance;