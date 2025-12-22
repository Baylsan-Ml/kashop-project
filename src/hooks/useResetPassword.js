import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";

export default function useResetPassword(){
     const navigate= useNavigate();

  const resetPasswordMutation=useMutation({
    mutationFn:async(values)=>{
     return await axiosInstance.patch(`/Auth/Account/ResetPassword`, values);
    },
    onSuccess:()=>{
      navigate('/login');
    },
    onError:()=>{
      alert('Please Check the Code Again');
    }
  });

  return {resetPasswordMutation}
}