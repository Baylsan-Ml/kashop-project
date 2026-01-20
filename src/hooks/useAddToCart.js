import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";

export default function useAddToCart() {
  const queryClient= useQueryClient();
  const addToCartMutation= useMutation({
    mutationFn: async({ProductId, Count})=>{
      return await axiosAuthInstance.post('/Carts', {
        ProductId,
        Count
      })
    }, onSuccess:()=>{
      
      queryClient.invalidateQueries({queryKey: ['carts']});
    }
  })

  return addToCartMutation
}
