import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";

export default function useSendCode(){
    const navigate = useNavigate();

  const sendCodeMutation= useMutation({
     mutationFn: async (value)=>{
      return await axiosInstance.post(`/Auth/Account/SendCode`, value);
            },
    onSuccess:()=>{
      navigate('/resetPassword');
    },
    onError:()=>{
      alert('Please Enter a Valid Email');
    }
  });

  return {sendCodeMutation};
}