import { useMutation } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";

export default function useAddToCart() {

  const addToCartMutation= useMutation({
    mutationFn: async({ProductId, Count})=>{
      return await axiosAuthInstance.post('/Carts', {
        ProductId,
        Count
      },{
        headers:{
          Authorization:{

          }
        }
      })
    }
  })

  return addToCartMutation;
}
