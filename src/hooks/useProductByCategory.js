import useFetch from "./useFetch";

export default function useProductByCategory(id){
   return useFetch(['productByCategory', id], `/Products/category/${id}`)
}