import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../Api/axiosInstance';

export default function useRegister(){
    const[serverErrors, setServerErrors]= useState([]);
    const navigate= useNavigate();

    const registerMutation= useMutation({
        mutationFn: async (values)=>{
          return await axiosInstance.post(`/Auth/Account/Register`, values);
        },
        onSuccess:()=>{
          navigate('/login');
        },
        onError:()=>{
           setServerErrors(err.response.data.errors);
        }
      })
      
      return {serverErrors, registerMutation}
}