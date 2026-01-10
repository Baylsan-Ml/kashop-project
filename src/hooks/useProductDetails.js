
import useFetch from "./useFetch";

export default function useProductDetails(id){
   return useFetch(['productDetails', id], `/products/${id}`)
}