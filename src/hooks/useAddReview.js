import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";

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
      
      queryClient.invalidateQueries({queryKey: ['reviews']});
    }
  })

  return addReviewMutation
}
