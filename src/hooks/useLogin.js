import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../Api/axiosInstance";

export default function useLogin(){
    const navigate = useNavigate();
    const {setToken, setAccessToken}= useContext(AuthContext);
    const loginMutation= useMutation({
      mutationFn:async(values)=>{
       return await axiosInstance.post(`/Auth/Account/Login`, values);
      },
      onSuccess:()=>{
        setToken(response.data.accessToken);
        setAccessToken(response.data.accessToken);
        navigate('/home');
      },
      onError:()=>{
        console.log('Please confirm your data and try again..')
      }
    });

    return {loginMutation};
}