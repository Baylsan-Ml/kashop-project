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
    onError:(error) => {
        Swal.fire({ icon: 'error', title: `${error.message}`, text: error.response?.data?.message || "Current password might be wrong" });
            }
  });

  return {resetPasswordMutation}
}