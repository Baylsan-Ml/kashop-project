import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";
import Swal from 'sweetalert2';


export default function useAddToCart() {
  const queryClient= useQueryClient();
  const addToCartMutation= useMutation({
    mutationFn: async({ProductId, Count})=>{
      return await axiosAuthInstance.post('/Carts', {
        ProductId,
        Count
      })
    }, onSuccess:()=>{
      Swal.fire({ icon: 'success', title: 'Added!', text: 'Product Added To Cart', timer: 2000, showConfirmButton: false });           
      queryClient.invalidateQueries({queryKey: ['carts']});
    }
  })

  return addToCartMutation
}
