import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";
import { Navigate } from "react-router-dom";


export default function useCart(){
const useCartMutation=useMutation({
    mutationFn:async(values)=>{
        return await axiosInstance.post(`/Carts`);
    },
    onSuccess:(response)=>{
        alert('product added successfully!')
    },
    onError:(err)=>{
        alert('somthing went wrong..')
    }
})

return {useCartMutation}
}
