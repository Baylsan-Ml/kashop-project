import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";

export default function useClearCart() {
  const queryClient= useQueryClient();
  const clearCartMutation= useMutation({
    mutationFn: async()=>{
       return await axiosAuthInstance.delete("/Carts/clear")
    }, onSuccess:()=>{
      
      queryClient.invalidateQueries({queryKey: ['carts']});
    }
  })

  return clearCartMutation
}
