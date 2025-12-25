import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../Api/axiosInstance";

export default function useLogin(){
    const navigate = useNavigate();
     const[serverErrors, setServerErrors]= useState([]);
    const {setToken, setAccessToken}= useContext(AuthContext);
    const loginMutation= useMutation({
      mutationFn:async(values)=>{
       return await axiosInstance.post(`/Auth/Account/Login`, values);
      },
        onSuccess:(response)=>{
        setToken(response.data.accessToken);
        setAccessToken(response.data.accessToken);
        navigate('/home');
      },
        onError:(err)=>{
          const errors =err.response?.data?.errors || err.response?.data?.message ||
          ["Something went wrong"];
      
        setServerErrors([errors]);
        }
    });

    return {loginMutation};
}