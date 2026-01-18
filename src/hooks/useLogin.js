import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import useAuthStore from "../store/authStore";
import { jwtDecode } from "jwt-decode";


export default function useLogin(){
    const navigate = useNavigate();
    const[serverErrors, setServerErrors]= useState([]);
    const setToken= useAuthStore((state)=>state.setToken);
    const setUser=useAuthStore((state)=>state.setUser);
    
    const loginMutation= useMutation({
      mutationFn:async(values)=>{
       return await axiosInstance.post(`/Auth/Account/Login`, values);
      },
        onSuccess:(response)=>{
          const accessToken= response.data.accessToken;
          const decoded = jwtDecode(accessToken);
          const user={
            name:decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            role:decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
          }
        setToken(accessToken);
        setUser(user);
        // const decodedUser=localStorage.setItem("user", user);
        navigate('/');
      },
        onError:(err)=>{
          const errors =err.response?.data?.errors || err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
        }
    });

    return {loginMutation};
}