import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";
import Swal from 'sweetalert2';

export default function useAddReview() {
  const queryClient= useQueryClient();
  const addReviewMutation= useMutation({
    mutationFn: async({rating, comment, productId})=>{
      return await axiosAuthInstance.post(`/Products/${productId}/reviews`, {
        rating,
        comment,
        productId
      })
    }, onSuccess:()=>{
      Swal.fire({ icon: 'success', title: 'Added!', text: 'Your Review Has Been Added', timer: 2000, showConfirmButton: false });           
      queryClient.invalidateQueries({queryKey: ['reviews']});
    }
  })

  return addReviewMutation
}
